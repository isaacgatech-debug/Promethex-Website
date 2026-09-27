const REDIRECT_URI = process.env.INSTAGRAM_REDIRECT_URI || 'https://www.promethexproductions.com/api/instagram/callback';

export default async function handler(req, res) {
  const { code, error, error_reason: errorReason } = req.query || {};

  if (error) {
    return res.status(400).send(`<h1>Instagram connection cancelled</h1><p>${errorReason || error}</p><p>You can close this tab and try again.</p>`);
  }

  if (!code) return res.status(400).send('Missing Instagram authorization code.');
  if (!process.env.INSTAGRAM_APP_SECRET) {
    return res.status(503).send('<h1>Instagram connection needs one final setup step</h1><p>The authorization was received, but the server secret is not configured yet. Add INSTAGRAM_APP_SECRET in Vercel, then try Connect Instagram again.</p>');
  }

  const body = new URLSearchParams({
    client_id: process.env.INSTAGRAM_APP_ID || '2931829043845189',
    client_secret: process.env.INSTAGRAM_APP_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: REDIRECT_URI,
    code,
  });

  const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  const tokenData = await tokenResponse.json();

  if (!tokenResponse.ok || !tokenData.access_token) {
    console.error('Instagram token exchange failed', {
      status: tokenResponse.status,
      error_type: tokenData.error_type,
      error_message: tokenData.error_message,
      code: tokenData.code,
    });
    return res.status(502).send('<h1>Instagram connection failed</h1><p>Meta did not return an access token. Check the app redirect URI and permissions, then try again.</p>');
  }

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SECRET_KEY) {
    return res.status(503).send('<h1>Instagram authorization received</h1><p>The account was authorized, but secure dashboard storage is not configured yet.</p>');
  }

  const profileResponse = await fetch('https://graph.instagram.com/me?fields=user_id,username&access_token=' + encodeURIComponent(tokenData.access_token));
  const profile = await profileResponse.json();
  if (!profileResponse.ok || !profile.user_id) {
    console.error('Instagram profile lookup failed', { status: profileResponse.status, code: profile.code, message: profile.error?.message });
    return res.status(502).send('<h1>Instagram connection failed</h1><p>Meta authorized the account, but its profile could not be loaded.</p>');
  }

  const supabaseHeaders = {
    apikey: process.env.SUPABASE_SECRET_KEY,
    Authorization: `Bearer ${process.env.SUPABASE_SECRET_KEY}`,
    'Content-Type': 'application/json',
    Prefer: 'resolution=merge-duplicates,return=minimal',
  };
  const storeResponse = await fetch(`${process.env.SUPABASE_URL}/rest/v1/instagram_connections?on_conflict=instagram_user_id`, {
    method: 'POST',
    headers: supabaseHeaders,
    body: JSON.stringify({
      username: profile.username || 'promethexstudio',
      instagram_user_id: profile.user_id,
      access_token: tokenData.access_token,
      scopes: ['instagram_business_basic', 'instagram_business_manage_messages', 'instagram_business_manage_comments', 'instagram_business_content_publish', 'instagram_business_manage_insights'],
      updated_at: new Date().toISOString(),
    }),
  });
  if (!storeResponse.ok) {
    console.error('Instagram connection storage failed', { status: storeResponse.status });
    return res.status(502).send('<h1>Instagram connection needs one more setup step</h1><p>The account was authorized, but the dashboard database table is not ready yet.</p>');
  }

  const webhookResponse = await fetch(`https://graph.instagram.com/${encodeURIComponent(profile.user_id)}/subscribed_apps?subscribed_fields=messages,comments&access_token=${encodeURIComponent(tokenData.access_token)}`, { method: 'POST' });
  if (!webhookResponse.ok) {
    const webhookError = await webhookResponse.json().catch(() => ({}));
    console.error('Instagram webhook subscription failed', { status: webhookResponse.status, code: webhookError.code, message: webhookError.error?.message });
  }

  return res.status(200).send('<h1>Instagram connected</h1><p>Your Instagram account is connected and stored securely. Webhook subscription is being finalized.</p><p>You can close this tab.</p>');
}
