const APP_ID = process.env.INSTAGRAM_APP_ID || '2931829043845189';
const REDIRECT_URI = process.env.INSTAGRAM_REDIRECT_URI || 'https://www.promethexproductions.com/api/instagram/callback';

export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).send('Method not allowed');

  const params = new URLSearchParams({
    client_id: APP_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: 'instagram_business_basic,instagram_business_manage_messages,instagram_business_manage_comments',
  });

  return res.redirect(`https://www.instagram.com/oauth/authorize?${params.toString()}`);
}
