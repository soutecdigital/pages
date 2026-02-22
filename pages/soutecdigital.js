import Head from 'next/head'
import Particles from '../components/Particles'
import Agent from '../components/Agent'
import Nucleus from '../components/Nucleus'

export default function SoutecDigital(){
  return (
    <div className="px-6 py-8 max-w-6xl mx-auto relative">
      <Head>
        <title>Soutec Digital | Soluções</title>
      </Head>

      <Particles />
      <Agent delay={2000} />

      <section className="text-center mb-8">
        <Nucleus />
        <h1 className="text-4xl md:text-6xl font-quantum font-bold mb-2 text-glow leading-none">Soutec Digital</h1>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4">A tecnologia quântica e a IA são o presente. Como está a saúde da sua arquitetura de software hoje?</p>
      </section>

      <main className="grid md:grid-cols-3 gap-6">
        <div className="neon-card neon-cyan p-6 md:p-8 flex flex-col items-center text-center">
          <div className="text-cyan-400 text-3xl mb-4"><i className="fa-solid fa-network-wired"></i></div>
          <h3 className="text-lg font-quantum font-bold mb-2 text-white">Microservices</h3>
          <p className="text-gray-400 text-xs leading-relaxed">Arquiteturas distribuídas PHP 8.3 para alta escalabilidade.</p>
        </div>
        <div className="neon-card neon-purple p-6 md:p-8 flex flex-col items-center text-center">
          <div className="text-purple-500 text-3xl mb-4"><i className="fa-solid fa-brain"></i></div>
          <h3 className="text-lg font-quantum font-bold mb-2 text-white">AI Integration</h3>
          <p className="text-gray-400 text-xs leading-relaxed">Modelos inteligentes para automação e análise preditiva.</p>
        </div>
        <div className="neon-card neon-green p-6 md:p-8 flex flex-col items-center text-center">
          <div className="text-green-500 text-3xl mb-4"><i className="fa-solid fa-microchip"></i></div>
          <h3 className="text-lg font-quantum font-bold mb-2 text-white">Cloud Pro</h3>
          <p className="text-gray-400 text-xs leading-relaxed">Performance otimizada com Docker e Kubernetes.</p>
        </div>
      </main>
    </div>
  )
}
