'use client';

export default function KirvanoStyleHero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="font-satoshi font-bold text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight mb-8">
          <span className="block">Transforme</span>
          <span className="block text-gradient">sua empresa</span>
          <span className="block">com tecnologia</span>
        </h1>
        
        <p className="font-satoshi text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
          A plataforma definitiva para empresas que buscam inovação te ajuda a transformar sua operação em um negócio digital de alta performance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="font-satoshi font-medium bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors">
            Começar Agora
          </button>
          <button className="font-satoshi font-medium border border-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
            Ver Demo
          </button>
        </div>
      </div>
    </section>
  );
}




