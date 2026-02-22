import { useEffect, useRef } from 'react'

export default function Nucleus(){
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    function onMove(e){
      const x = (window.innerWidth / 2 - e.pageX) / 45
      const y = (window.innerHeight / 2 - e.pageY) / 45
      node.style.transform = `translate(${x}px, ${y}px)`
    }

    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="relative flex items-center justify-center mb-6 s-nucleus-box" id="s-nucleus" ref={ref}>
      <div className="absolute w-40 h-40 md:w-64 md:h-64 border-t-2 border-b-2 border-cyan-500/40 rounded-full animate-[spin_8s_linear_infinite]"></div>
      <div className="absolute w-48 h-48 md:w-72 md:h-72 border-l border-r border-purple-500/20 rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>
      <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 glass border-2 border-cyan-400/50 rounded-[35px] flex items-center justify-center rotate-12 shadow-[0_0_30px_rgba(0,242,255,0.3)]">
        <span className="text-5xl md:text-6xl font-quantum font-bold text-glow">S</span>
      </div>
    </div>
  )
}
