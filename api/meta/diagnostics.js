const json = (res, status, body) => {
  res.status(status).setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify(body));
};

async function graph(path, token) {
  const response = await fetch(`https://graph.instagram.com${path}${path.includes('?') ? '&' : '?'}access_token=${encodeURIComponent(token)}`);
  const body = await response.json().catch(() => ({}));
  return { ok: response.ok, status: response.status, error: body.error?.message || null };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  if (!process.env.META_DIAGNOSTIC_KEY || req.headers['x-meta-diagnostic-key'] !== process.env.META_DIAGNOSTIC_KEY) {
    return json(res, 401, { error: 'Unauthorized' });
  }
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SECRET_KEY) {
    return json(res, 503, { error: 'Server storage is not configured' });
  }

  const headers = {
    apikey: process.env.SUPABASE_SECRET_KEY,
    Authorization: `Bearer ${process.env.SUPABASE_SECRET_KEY}`,
  };
  const stored = await fetch(`${process.env.SUPABASE_URL}/rest/v1/instagram_connections?select=username,instagram_user_id,access_token&order=updated_at.desc&limit=1`, { headers });
  const rows = await stored.json().catch(() => []);
  const connection = rows[0];
  if (!stored.ok || !connection) return json(res, 404, { error: 'No connected Instagram account found' });

  const checks = {
    instagramProfile: await graph(`/me?fields=user_id,username`, connection.access_token),
    instagramMedia: await graph(`/${encodeURIComponent(connection.instagram_user_id)}/media?fields=id&limit=1`, connection.access_token),
    instagramComments: await graph(`/${encodeURIComponent(connection.instagram_user_id)}/media?fields=id,comments.limit(1)&limit=1`, connection.access_token),
  };

  return json(res, 200, {
    account: connection.username,
    checks: Object.fromEntries(Object.entries(checks).map(([name, result]) => [name, { ok: result.ok, status: result.status }]))
  });
}
