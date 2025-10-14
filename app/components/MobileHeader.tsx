'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Suporte', href: '/suporte' },
    { name: 'Sobre nós', href: '/sobre' },
  ];

  return (
    <>
      {/* Mobile Header - Minimalist Design */}
      <div className="md:hidden bg-black">
        <div className="flex items-center justify-between px-6 py-4 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-mono font-bold text-white text-xl tracking-wider" style={{fontFamily: 'monospace, Courier New, monospace'}}>
              SOLID
            </span>
          </Link>

          {/* Mobile menu button - Two lines design */}
          <button
            className="flex flex-col items-center justify-center w-6 h-6 text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <>
                <div className="w-6 h-0.5 bg-white mb-1"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </>
            )}
          </button>
        </div>
        {/* Linha branca fina no final da navbar mobile */}
        <div className="w-full h-[0.5px] bg-white/30"></div>
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
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
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
    </>
  );
}
