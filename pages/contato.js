import Head from 'next/head'
import { useState } from 'react'

export default function Contato(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try{
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })

      const data = await resp.json()
      if (resp.ok) {
        setStatus('success')
        setName(''); setEmail(''); setMessage('')
      } else {
        setStatus('error')
        setErrorMsg(data?.error || 'Erro ao enviar')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Erro de rede')
    }
  }

  return (
    <div className="flex-grow flex flex-col items-center justify-center px-6 relative z-10 py-20">
      <Head>
        <title>Contato | Soutec Digital</title>
      </Head>

      <h1 className="text-4xl md:text-6xl font-quantum font-bold mb-6 text-glow text-center">Conecte-se ao Futuro</h1>
      <p className="text-orange-400 font-light tracking-[5px] uppercase text-center mb-6">Pronto para a Transformação Digital?</p>

      <div className="w-full max-w-lg glass p-8 rounded-3xl border border-cyan-500/20 shadow-[0_0_50px_rgba(0,242,255,0.05)] relative z-20">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="text-[10px] uppercase tracking-[3px] text-cyan-400 font-bold ml-2 mb-1 block">Identificação</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Seu nome ou empresa" required
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white outline-none focus:border-cyan-400" />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[3px] text-purple-400 font-bold ml-2 mb-1 block">Canal de Retorno</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="seu@email.com" required
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white outline-none focus:border-purple-500" />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[3px] text-orange-400 font-bold ml-2 mb-1 block">Briefing do Projeto</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="4" placeholder="Descreva sua necessidade técnica..." required
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white outline-none focus:border-orange-400 resize-none" />
          </div>

          <button type="submit" disabled={status === 'loading'}
            className="mt-4 bg-cyan-500 hover:bg-cyan-400 text-black font-quantum font-bold py-4 rounded-xl disabled:opacity-60">
            {status === 'loading' ? 'Enviando...' : 'INICIALIZAR PROTOCOLO'}
          </button>

          {status === 'success' && <p className="text-green-400 mt-3">Mensagem enviada com sucesso. Obrigado!</p>}
          {status === 'error' && <p className="text-red-400 mt-3">Falha: {errorMsg}</p>}
        </form>
      </div>
    </div>
  )
}
