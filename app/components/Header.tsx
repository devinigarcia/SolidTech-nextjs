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
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full border"
        style={{
          zIndex: 9999, 
          width: 'fit-content', 
          minWidth: '1100px', 
          maxWidth: '90vw',
          backgroundColor: 'rgba(20, 20, 20, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="px-8 py-2">
          <div className="flex items-center h-12 gap-x-12">
            {/* Logo - Kirvano Style */}
            <Link href="/" className="flex items-center">
              <span className="font-neue font-bold text-white text-xl tracking-tight">
                SOLID TECH
              </span>
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 px-4 py-1 rounded-full border border-gray-500/30 bg-gray-700/20 ml-auto">
            {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-[#FDB927] font-medium transition-all duration-300 text-sm px-2 py-2"
            >
              {item.name}
            </Link>
            ))}
          </nav>

          {/* CTA Buttons - Kirvano Style */}
          <div className="hidden md:flex items-center space-x-4 px-4 py-1 rounded-full border border-gray-500/30 bg-gray-700/20">
            <Link
              href="/login"
              className="text-white hover:text-[#FDB927] font-medium transition-all duration-300 text-sm px-2 py-2"
            >
              Login
            </Link>
            <Link
              href="/cadastro"
              className="text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm"
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
            className="md:hidden p-2 rounded-lg text-white hover:bg-gray-700/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-md border-t border-gray-700 rounded-b-3xl mt-2">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-gray-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-700">
                <Link
                  href="/login"
                  className="block text-white hover:text-gray-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/cadastro"
                  className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cadastre-se
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}