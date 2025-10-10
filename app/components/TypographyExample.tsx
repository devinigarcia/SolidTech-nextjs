'use client';

export default function TypographyExample() {
  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-neue font-bold text-5xl text-white mb-4">
          Tecnologia que gera lucro.
        </h1>
        
        <p className="font-neue text-gray-400 mt-4 text-lg mb-8">
          Desenvolvemos sistemas e sites sob medida que impulsionam o crescimento do seu negócio.
        </p>

        <div className="space-y-6">
          <h2 className="font-neue font-bold text-4xl text-white">
            Título H2 - Peso 700
          </h2>
          
          <h3 className="font-neue font-bold text-3xl text-white">
            Título H3 - Peso 700
          </h3>
          
          <h4 className="font-neue font-medium text-2xl text-white">
            Subtítulo H4 - Peso 500
          </h4>
          
          <h5 className="font-neue font-medium text-xl text-white">
            Subtítulo H5 - Peso 500
          </h5>
          
          <h6 className="font-neue font-medium text-lg text-white">
            Subtítulo H6 - Peso 500
          </h6>
          
          <p className="font-neue text-gray-400 text-base leading-relaxed">
            Este é um parágrafo usando a fonte PP Neue Montreal com peso 300. O texto tem cor cinza claro (#d4d4d4) 
            e espaçamento de linha relaxado para melhor legibilidade.
          </p>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="font-neue font-bold text-2xl text-white mb-4">
              Exemplo de Card
            </h3>
            <p className="font-neue text-gray-400 mb-4">
              Este é um exemplo de como usar a tipografia PP Neue Montreal em cards e componentes.
            </p>
            <button className="font-neue font-medium bg-[#fdb927] text-black px-6 py-3 rounded-lg hover:bg-[#fdb927]/80 transition-colors">
              Botão com PP Neue Montreal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
