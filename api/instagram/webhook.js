const VERIFY_TOKEN = process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN;

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { 'hub.mode': mode, 'hub.verify_token': token, 'hub.challenge': challenge } = req.query || {};
    if (mode === 'subscribe' && token && VERIFY_TOKEN && token === VERIFY_TOKEN) {
      return res.status(200).send(String(challenge || ''));
    }
    return res.status(403).send('Forbidden');
  }

  if (req.method === 'POST') {
    // Keep the receiver fast and avoid logging message contents or tokens.
    console.info('Instagram webhook received', {
      object: req.body?.object,
      entryCount: Array.isArray(req.body?.entry) ? req.body.entry.length : 0,
    });
    return res.status(200).send('EVENT_RECEIVED');
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).send('Method Not Allowed');
}
