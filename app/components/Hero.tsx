'use client';

import { motion } from 'framer-motion';
import { Play, Star, Users, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from './ui/Button';
import AnimatedSection from './ui/AnimatedSection';
import CTAButton from './ui/CTAButton';

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const videos = [
    '/videos/PixVerse_V5_Image.mp4',
    '/videos/PixVerse_V5_Image_Text_540P_Cena_3D_realista_m.mp4',
    '/videos/PixVerse_V5_Image_Text_540P_Cena_3D_ultrareali.mp4'
  ];

  useEffect(() => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => 
          (prevIndex + 1) % videos.length
        );
      };

      video.addEventListener('ended', handleVideoEnd);
      
      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [currentVideoIndex, videos.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Fundo em vídeo */}
      <video
        id="hero-video"
        src={videos[currentVideoIndex]}
        autoPlay
        loop={false}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Camada específica para esconder marca d'água no canto superior direito */}
      <div className="absolute top-0 right-0 w-full h-24 bg-black/90" />

      {/* Overlay escura */}
      <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center flex flex-col items-center justify-center px-4 mt-[-21rem] md:mt-[-4rem]">
            <AnimatedSection direction="up" delay={0.4}>
          <h1 className="headline-title font-neue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.2] text-center mb-2 px-4" style={{color: 'white', background: 'none', WebkitBackgroundClip: 'unset', WebkitTextFillColor: 'white', backgroundClip: 'unset', transform: 'scale(0.7586)'}}>
            Venda mais, com menos complicação<br/>
            Tudo o que você precisa, em um só lugar
          </h1>
          <p className="font-neue text-sm sm:text-base md:text-lg lg:text-xl text-white text-center mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-normal font-normal px-4">
            <span className="block md:hidden">A plataforma definitiva para a creator economy te ajuda a transformar seu conhecimento<br/>em negócio digital</span>
            <span className="hidden md:block">A plataforma definitiva para a creator economy te ajuda a transformar seu<br/>conhecimento em negócio digital</span>
          </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.6}>
          <CTAButton 
            variant="primary" 
            size="sm"
            onClick={() => console.log('Cadastro iniciado')}
            className="group font-bold text-lg sm:text-xl"
            style={{paddingTop: '0rem', paddingBottom: '0rem', paddingLeft: '0rem', paddingRight: '0rem', transform: 'scale(0.7)'}}
            textColor="white"
          >
            Cadastre-se gratuitamente
          </CTAButton>
            </AnimatedSection>
      </div>
    </section>
  );
}