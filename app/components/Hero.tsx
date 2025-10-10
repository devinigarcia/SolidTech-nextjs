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
    '/videos/PixVerse_V5_Image_Text_540P_Cena_3D_cinematogr.mp4',
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

      <div className="relative z-10 text-center">
            <AnimatedSection direction="up" delay={0.4}>
          <h1 className="font-neue font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] text-center mb-8" style={{color: 'white', background: 'none', WebkitBackgroundClip: 'unset', WebkitTextFillColor: 'white', backgroundClip: 'unset'}}>
            Venda mais, com menos complicação<br/>
            Tudo o que você precisa, em um só lugar
          </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.6}>
          <CTAButton 
            variant="primary" 
            size="lg"
            onClick={() => console.log('Cadastro iniciado')}
            className="group font-bold"
            textColor="white"
          >
            Cadastre-se gratuitamente
          </CTAButton>
            </AnimatedSection>
      </div>
    </section>
  );
}