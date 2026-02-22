import { useEffect, useState } from 'react'
import { CpuChipIcon, XMarkIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'

export default function Agent({ delay = 2000 }){
  const [active, setActive] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setActive(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  if (!active) return null

  return (
    <div id="ai-agent" className={active ? 'agent-active' : ''}>
      <div className="flex justify-between items-start">
        <div className="robot-icon">
          {/* usar um ícone SVG do Heroicons em vez de FontAwesome */}
          <CpuChipIcon className="w-6 h-6" />
        </div>
        <button onClick={() => setActive(false)} className="text-gray-500 hover:text-white">
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="font-quantum text-[10px] text-cyan-400 mb-2 tracking-widest uppercase">Protocolo de Abordagem IA</div>
      <p className="text-sm text-gray-300 leading-relaxed mb-4">
        A tecnologia quântica e a IA são o presente. Como está a saúde da arquitetura de software da sua empresa hoje? Vamos blindar sua stack?
      </p>
      <div className="flex gap-3">
        <a href="https://wa.me/5500000000000?text=Olá!%20Vi%20o%20robô%20no%20site%20e%20quero%20blindar%20minha%20stack." target="_blank" rel="noreferrer" className="agent-btn flex items-center gap-2">
          {/* ícone de conversa do Heroicons, colorido para lembrar o WhatsApp */}
          <ChatBubbleLeftEllipsisIcon className="w-4 h-4 text-green-400" />
          Falar no WhatsApp
        </a>
      </div>
    </div>
  )
}
