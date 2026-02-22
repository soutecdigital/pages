import Link from 'next/link'
import { useEffect, useState } from 'react'
import Particles from '../components/Particles'
import Agent from '../components/Agent'
import Nucleus from '../components/Nucleus'
// icons used on the home cards
import { ServerStackIcon, CpuChipIcon, CloudIcon } from '@heroicons/react/24/outline'

function Typewriter({ text = '', speed = 80, className = '' }){
  const [display, setDisplay] = useState('')
  useEffect(() => {
    let i = 0
    let mounted = true
    function tick(){
      if(!mounted) return
      if(i < text.length){
        setDisplay((d) => d + text.charAt(i))
        i++
        setTimeout(tick, speed)
      }
    }
    tick()
    return () => { mounted = false }
  }, [text, speed])
  return <p className={className}>{display}</p>
}

export default function Home(){
  useEffect(() => {
    const nucleus = document.getElementById('s-nucleus')
    function onMove(e){
      if (!nucleus) return
      const x = (window.innerWidth / 2 - e.pageX) / 45
      const y = (window.innerHeight / 2 - e.pageY) / 45
      nucleus.style.transform = `translate(${x}px, ${y}px)`
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center pt-8 px-4">
      <Particles />
      <Agent delay={2000} />

      <header className="text-center z-10 mb-8">
        <Nucleus />
        <h1 className="text-4xl md:text-6xl font-quantum font-bold mb-2 text-glow leading-none">Soutec Digital</h1>
        <Typewriter text={"Transformando negócios em potências digitais."} className="text-sm md:text-lg text-orange-400 font-light tracking-[8px] uppercase min-h-[20px]" />
      </header>

      <main className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 w-full">
        <div className="neon-card neon-cyan p-6 md:p-8 flex flex-col items-center text-center glass">
          <div className="text-cyan-400 text-3xl mb-4">
            {/* microservices icon via Heroicons */}
          <ServerStackIcon className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-quantum font-bold mb-2 text-white">Microservices</h3>
          <p className="text-gray-400 text-xs leading-relaxed">Arquiteturas distribuídas PHP 8.3 para alta escalabilidade.</p>
        </div>
        <div className="neon-card neon-purple p-6 md:p-8 flex flex-col items-center text-center glass">
          <div className="text-purple-500 text-3xl mb-4">
            {/* AI integration icon */}
            <CpuChipIcon className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-quantum font-bold mb-2 text-white">AI Integration</h3>
          <p className="text-gray-400 text-xs leading-relaxed">Modelos inteligentes para automação e análise preditiva.</p>
        </div>
        <div className="neon-card neon-green p-6 md:p-8 flex flex-col items-center text-center glass">
          <div className="text-green-500 text-3xl mb-4">
            {/* cloud pro icon */}
            <CloudIcon className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-quantum font-bold mb-2 text-white">Cloud Pro</h3>
          <p className="text-gray-400 text-xs leading-relaxed">Performance otimizada com Docker e Kubernetes.</p>
        </div>
      </main>

      

      {/* Removed inline script to avoid accessing DOM before mount — using React Typewriter component instead */}
    </div>
  )
}
