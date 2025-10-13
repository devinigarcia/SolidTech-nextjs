'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Suporte', href: '/suporte' },
    { name: 'Sobre nós', href: '/sobre' },
  ];

  return (
    <>
      {/* Header bar */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 relative"
        style={{
          zIndex: 9999,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: 'none'
        }}
      >
             <div className="px-4 md:px-8 py-4">
               <div className="flex items-center justify-between h-16 max-w-6xl mx-auto px-8 py-2 rounded-full border border-gray-600/20 bg-gray-800/40">
            {/* Logo - Notebook Style */}
            <Link href="/" className="flex items-center">
              <span className="font-mono font-bold text-white text-xl tracking-wider" style={{fontFamily: 'monospace, Courier New, monospace'}}>
                <span className="hidden sm:inline">SOLID TECH</span>
                <span className="sm:hidden">SOLID</span>
              </span>
            </Link>

                 {/* Desktop Navigation */}
                 <nav className="hidden md:flex items-center space-x-6 px-6 py-1 rounded-full border border-gray-600/20 bg-gray-800/40">
            {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white font-medium transition-all duration-300 text-sm px-2 py-1"
            >
              {item.name}
            </Link>
            ))}
          </nav>

                 {/* CTA Buttons - Desktop */}
                 <div className="hidden md:flex items-center space-x-3 px-6 py-1 rounded-full border border-gray-600/20 bg-gray-800/40">
                   <Link
                     href="/login"
                     className="text-gray-300 hover:text-white font-medium transition-all duration-300 text-sm px-4 py-2 rounded-full bg-gray-700/50"
                   >
                     Login
                   </Link>
                   <Link
                     href="/cadastro"
                     className="text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm"
                     style={{
                       background: 'linear-gradient(135deg, #FDB927, #FFB600)',
                       boxShadow: '0 4px 15px rgba(253, 185, 39, 0.4)'
                     }}
                   >
                     Cadastre-se
                   </Link>
                 </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-gray-700/50 transition-colors z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{zIndex: 10000}}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50" style={{zIndex: 10000}}>
            {/* Fundo preto apenas na metade superior */}
            <div className="fixed top-0 left-0 right-0 bg-black" style={{backgroundColor: '#000000', height: 'calc(50vh - 5.9rem)'}}></div>
            
            {/* Conteúdo do menu */}
            <div className="relative z-10">
            {/* Header do menu */}
            <div className="flex items-center justify-between p-6">
              <span className="font-mono font-bold text-white text-xl tracking-wider" style={{fontFamily: 'monospace, Courier New, monospace'}}>
                SOLID
              </span>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </Link>
            </div>

            {/* Conteúdo do menu */}
            <div className="flex flex-col items-center justify-center h-screen px-6 space-y-6 pb-20" style={{ transform: 'translateY(-17rem)' }}>
              {/* Links de navegação */}
              <div className="space-y-4 text-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-white hover:text-gray-300 font-medium text-sm transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/login"
                  className="block text-white hover:text-gray-300 font-medium text-sm transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </div>

              {/* Botões CTA */}
              <div className="space-y-0.5 text-center">
                <Link
                  href="/cadastro"
                  className="block text-white px-32 py-3 rounded-full font-bold text-sm transition-colors"
                  style={{backgroundColor: '#fdb927'}}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cadastre-se
                </Link>
              </div>
            </div>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}