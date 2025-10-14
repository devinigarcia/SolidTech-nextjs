import Link from "next/link";

export default function Header() {
  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Suporte', href: '/suporte' },
    { name: 'Sobre nós', href: '/sobre' },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header 
        className="hidden md:block fixed top-0 left-0 right-0 z-50 relative"
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
                SOLID TECH
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-6 px-6 py-1 rounded-full border border-gray-600/20 bg-gray-800/40">
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
            <div className="flex items-center space-x-3 px-6 py-1 rounded-full border border-gray-600/20 bg-gray-800/40">
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
          </div>
        </div>
      </header>
    </>
  );
}