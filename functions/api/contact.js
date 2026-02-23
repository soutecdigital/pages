export async function onRequest(context) {
  const { request, env } = context

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Allow': 'POST', 'Content-Type': 'application/json' },
    })
  }

  let body
  try {
    body = await request.json()
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const { name, email, message } = body || {}
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing fields: name, email and message are required' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailValid) return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400, headers: { 'Content-Type': 'application/json' } })

  console.log('[functions/api/contact] received:', { name, email, message })

  const SENDGRID_API_KEY = env.SENDGRID_API_KEY
  const TO_EMAIL = env.TO_EMAIL
  const FROM_EMAIL = env.FROM_EMAIL || 'no-reply@soutec.digital'

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
        console.error('[functions/api/contact] SendGrid error:', resp.status, text)
      } else {
        console.log('[functions/api/contact] email sent via SendGrid')
      }
    } catch (err) {
      console.error('[functions/api/contact] SendGrid exception:', err)
    }
  }

  return new Response(JSON.stringify({ ok: true, message: 'Contato recebido com sucesso', data: { name, email } }), { status: 200, headers: { 'Content-Type': 'application/json' } })
}
