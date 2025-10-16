"use client";

import { motion } from "framer-motion";
import { Play, Star, Users, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "./ui/Button";
import AnimatedSection from "./ui/AnimatedSection";
import CTAButton from "./ui/CTAButton";

export default function MobileHero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    "/videos/PixVerse_V5_Image.mp4",
    "/videos/PixVerse_V5_Image_Text_540P_Cena_3D_realista_m.mp4",
    "/videos/PixVerse_V5_Image_Text_540P_Cena_3D_ultrareali.mp4",
  ];

  useEffect(() => {
    const video = document.getElementById(
      "mobile-hero-video"
    ) as HTMLVideoElement;
    if (video) {
      const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      };

      video.addEventListener("ended", handleVideoEnd);

      return () => {
        video.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, [currentVideoIndex, videos.length]);

  return (
    <section className="md:hidden relative min-h-screen flex items-center justify-center bg-black overflow-hidden w-full">
      {/* Fundo em vídeo */}
      <video
        id="mobile-hero-video"
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

      <div className="relative z-10 text-center flex flex-col items-center justify-center px-4 mt-[-21rem] w-full max-w-full">
        <AnimatedSection direction="up" delay={0.4}>
          <h1
            className="font-neue font-extrabold
         text-[25px] sm:text-[33px] 
         text-center mb-2 px-4 
         tracking-normal
         text-white 
        "
            style={{
              wordSpacing: "0px",
              color: "#fff",
              background: "none",
              WebkitBackgroundClip: "unset",
              backgroundClip: "unset",
              WebkitTextFillColor: "#fff",
            }}
          >
            <span className="block leading-none mb-[3px] sm:mb-[7px] font-neue font-extrabold leading-none">
              Venda mais,
            </span>
            <span className="block leading-none mb-[3px] sm:mb-[7px] font-neue font-extrabold leading-none">
              com menos complicação.
            </span>
            <span className="block leading-none mb-[3px] sm:mb-[7px] font-neue font-extrabold leading-none">
              Tudo o que você precisa,
            </span>
            <span className="block leading-none mb-[3px] sm:mb-[7px] font-neue font-extrabold leading-none">
              em um só lugar
            </span>
          </h1>
          <p className="font-neue text-sm sm:text-base text-white text-center mb-6 sm:mb-8 max-w-xs sm:max-w-md mx-auto leading-normal font-normal px-4">
            A plataforma definitiva para a creator economy te ajuda a
            transformar seu conhecimento
            <br />
            em negócio digital
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.6}>
          <CTAButton
            variant="primary"
            size="sm"
            onClick={() => console.log("Cadastro iniciado")}
            className="group font-bold text-lg sm:text-xl scale-75"
            textColor="white"
          >
            Cadastre-se gratuitamente
          </CTAButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
