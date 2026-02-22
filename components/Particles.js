import { useEffect } from 'react'

export default function Particles(){
  useEffect(() => {
    let mounted = true
    const script = document.createElement('script')
    script.src = '/vendor/particles/particles.min.js'
    script.async = true
    script.onload = () => {
      if (!mounted) return
      try {
        if (window.particlesJS) {
          window.particlesJS('particles-js', {
            particles: {
              number: { value: 50, density: { enable: true, value_area: 800 } },
              color: { value: '#00f2ff' },
              opacity: { value: 0.3 },
              size: { value: 1.5 },
              line_linked: { enable: true, distance: 150, color: '#00f2ff', opacity: 0.15, width: 1 },
              move: { enable: true, speed: 1.2 }
            }
          })
        }
      } catch (e) {
        console.error('particles init failed', e)
      }
    }
    document.body.appendChild(script)

    return () => {
      mounted = false
      try { document.body.removeChild(script) } catch(e){}
    }
  }, [])

  return <div id="particles-js" />
}
