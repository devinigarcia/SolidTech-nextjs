'use client';

export default function KirvanoHeroFinal() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video - Kirvano Style */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
        <source src="/videos/kirvano-bg.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 text-center">
        <h1 className="font-neue font-bold text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] text-center">
          Venda mais, com menos complicação<br/>
          Tudo o que você precisa, em um só lugar
        </h1>
      </div>
    </section>
  );
}




