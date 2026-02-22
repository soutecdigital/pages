import Head from 'next/head'
import NavBar from './NavBar'
import { LinkIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

export default function Layout({ children }){
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Soutec Digital</title>
        {/* Font Awesome icons (6.x CDN) – permite usar <i className="fa-solid fa-atom animate-spin-slow" /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha384-rO8qWx8sfPGCEQ1gZuoO8ij2+/Imt0YHOSzX5dO7m1mL4I6dkw8w0pW5gW1Z3a1Y"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23020b14%22/><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-family=%22Orbitron%22 font-weight=%22bold%22 font-size=%2260%22 fill=%22%2300f2ff%22 style=%22filter:drop-shadow(0 0 5px %2300f2ff)%22>S</text></svg>" />
      </Head>
      <NavBar />
      <main className="min-h-[80vh]">{children}</main>
      <footer className="flex flex-col items-center justify-end pb-8 gap-4 relative z-50">
        <div className="flex gap-6 text-xl">
          <a href="#" className="text-gray-500 hover:text-cyan-400 transition"><LinkIcon className="w-5 h-5" /></a>
          <a href="#" className="text-gray-500 hover:text-cyan-400 transition"><CodeBracketIcon className="w-5 h-5" /></a>
        </div>
        <p className="text-[9px] text-gray-600 tracking-[4px] uppercase font-medium">© 2026 Soutec Digital Solutions</p>
      </footer>
    </div>
  )
}
