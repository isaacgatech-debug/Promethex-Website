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
    return res.status(502).send('<h1>Instagram connection failed</h1><p>Meta did not return an access token. Check the app redirect URI and permissions, then try again.</p>');
  }

  // Token persistence and webhook subscription will be added once a secure database is configured.
  return res.status(200).send('<h1>Instagram authorization received</h1><p>Your Instagram authorization was received successfully. The dashboard storage and webhook setup are the next step.</p><p>You can close this tab.</p>');
}
