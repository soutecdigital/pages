import Link from 'next/link'

export default function NavBar(){
  return (
    <nav className="p-4 md:p-6 flex justify-between items-center max-w-7xl mx-auto w-full relative z-50">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 glass rounded-xl flex items-center justify-center bg-cyan-500/10 shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              <span className="text-cyan-400 font-bold font-quantum text-xl">S</span>
            </div>
            <div className="font-quantum font-bold text-xl tracking-tighter">
              SOUTEC <span className="text-[8px] block text-orange-400 tracking-[3px] uppercase leading-none">Digital Soluções</span>
            </div>
        </Link>
      </div>
      <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[2px] font-bold">
        <Link href="/" className="text-cyan-400 border-b border-cyan-400">Início</Link>
        <Link href="/sistemas" className="hover:text-cyan-400 transition">Sistemas</Link>
        <Link href="/soutecdigital" className="hover:text-cyan-400 transition">IA & Dev</Link>
        <Link href="/contato" className="hover:text-cyan-400 transition">Contato</Link>
      </div>
    </nav>
  )
}
