import Head from 'next/head'

export default function Sistemas(){
  return (
    <div className="flex-grow flex flex-col items-center justify-center px-6 relative z-10 py-20">
      <Head>
        <title>Sistemas | Soutec Digital</title>
      </Head>

      <h1 className="text-4xl md:text-6xl font-quantum font-bold mb-6 text-glow text-center">Nossos Sistemas</h1>
      <div className="max-w-4xl text-center">
        <p className="text-gray-400 text-lg tracking-widest uppercase">Arquiteturas robustas para automação industrial e análise de dados.</p>
      </div>
    </div>
  )
}
