export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { name, email, message } = req.body || {}

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields: name, email and message are required' })
    }

    // Basic email validation
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailValid) return res.status(400).json({ error: 'Invalid email' })

    // Here you can add integration with email service, database, etc.
    // For now we just log to the server console for local testing.
    console.log('[/api/contact] received:', { name, email, message })

    // If SENDGRID_API_KEY and TO_EMAIL are set, attempt to send an email to the site owner
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
    const TO_EMAIL = process.env.TO_EMAIL
    const FROM_EMAIL = process.env.FROM_EMAIL || 'no-reply@soutec.digital'

    if (SENDGRID_API_KEY && TO_EMAIL) {
      try {
        const payload = {
          personalizations: [{ to: [{ email: TO_EMAIL }], subject: `Novo contato de ${name}` }],
          from: { email: FROM_EMAIL, name: 'Soutec Digital' },
          content: [
            { type: 'text/plain', value: `Nome: ${name}\nEmail: ${email}\nMensagem:\n${message}` },
          ],
        }

        const resp = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })

        if (!resp.ok) {
          const text = await resp.text()
          console.error('[/api/contact] SendGrid error:', resp.status, text)
          // don't fail the whole request for mail delivery problems
        } else {
          console.log('[/api/contact] email sent via SendGrid')
        }
      } catch (errMail) {
        console.error('[/api/contact] SendGrid exception:', errMail)
      }
    }

    return res.status(200).json({ ok: true, message: 'Contato recebido com sucesso', data: { name, email } })
  } catch (err) {
    console.error('[/api/contact] error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
