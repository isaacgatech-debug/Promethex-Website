export default async function handler(req, res) {
  res.status(200).json({ 
    message: 'API is working',
    env: process.env.RESEND_API_KEY ? 'API key exists' : 'API key missing'
  });
}
