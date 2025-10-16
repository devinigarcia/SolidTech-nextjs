"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Suporte", href: "/suporte" },
    { name: "Sobre nós", href: "/sobre" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeMenuAndGoHome = () => {
    console.log("Botão X clicado - fechando menu e indo para home");
    setIsMenuOpen(false);
    router.push("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Header - Minimalist Design */}
      <div className="md:hidden bg-black">
        <div className="flex items-center justify-between px-6 py-4 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className="font-mono font-bold text-white text-xl tracking-wider"
              style={{ fontFamily: "monospace, Courier New, monospace" }}
            >
              SOLID
            </span>
          </Link>

          {/* Mobile menu button - SVG Hamburger */}
          <button
            className="flex items-center justify-center w-6 h-6 text-white hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="1.5" y="5" width="21" height="2" fill="currentColor" />
                <rect
                  x="1.5"
                  y="13"
                  width="21"
                  height="2"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Linha branca fina no final da navbar mobile */}
        <div className="w-full h-[0.5px] bg-white/30"></div>
      </div>

      {/* Mobile Navigation - Full Screen */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50" style={{ zIndex: 10000 }}>
          {/* Fundo preto apenas na metade superior */}
          <div
            className="fixed top-0 left-0 right-0 bg-black"
            style={{
              backgroundColor: "#000000",
              height: "calc(50vh - 5.9rem)",
            }}
          ></div>

          {/* Conteúdo do menu */}
          <div className="relative z-10">
            {/* Header do menu */}
            <div className="flex items-center justify-between p-6 relative z-20">
              <span
                className="font-mono font-bold text-white text-xl tracking-wider"
                style={{ fontFamily: "monospace, Courier New, monospace" }}
              >
                SOLID
              </span>
              <button
                onClick={closeMenuAndGoHome}
                className="text-white hover:text-gray-300 transition-colors cursor-pointer p-2 relative z-30"
                type="button"
              >
                <X size={24} />
              </button>
            </div>

            {/* Conteúdo do menu */}
            <div
              className="flex flex-col items-center justify-center h-screen px-6 space-y-6 pb-20"
              style={{ transform: "translateY(-17rem)" }}
            >
              {/* Links de navegação */}
              <div className="space-y-4 text-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-white hover:text-gray-300 font-medium text-sm transition-colors"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/login"
                  className="block text-white hover:text-gray-300 font-medium text-sm transition-colors"
                  onClick={closeMenu}
                >
                  Login
                </Link>
              </div>

              {/* Botões CTA */}
              <div className="space-y-0.5 text-center">
                <Link
                  href="/cadastro"
                  className="block text-white px-8 sm:px-16 md:px-32 py-3 rounded-full font-bold text-sm transition-colors"
                  style={{ backgroundColor: "#fdb927" }}
                  onClick={closeMenu}
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
