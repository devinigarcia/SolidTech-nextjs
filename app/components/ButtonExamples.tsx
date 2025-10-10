'use client';

import CTAButton from './ui/CTAButton';
import { ArrowRight, Play, Star } from 'lucide-react';

export default function ButtonExamples() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h1 className="font-neue font-bold text-4xl text-white mb-8">
          Exemplos de Botões CTA
        </h1>
        
        <div className="space-y-8">
          {/* Botão Principal */}
          <div className="space-y-4">
            <h2 className="font-neue font-medium text-xl text-gray-300">
              Botão Principal (Hero)
            </h2>
            <CTAButton 
              variant="primary" 
              size="lg"
              onClick={() => console.log('Cadastro principal')}
              className="group"
            >
              Cadastre-se gratuitamente
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300 text-black" />
            </CTAButton>
          </div>

          {/* Botão Secundário */}
          <div className="space-y-4">
            <h2 className="font-neue font-medium text-xl text-gray-300">
              Botão Secundário
            </h2>
            <CTAButton 
              variant="secondary" 
              size="lg"
              onClick={() => console.log('Ver demo')}
              className="group"
            >
              <Play className="w-5 h-5 mr-2 inline-block group-hover:scale-110 transition-transform duration-300" />
              Ver Demo
            </CTAButton>
          </div>

          {/* Botões em Diferentes Tamanhos */}
          <div className="space-y-4">
            <h2 className="font-neue font-medium text-xl text-gray-300">
              Diferentes Tamanhos
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton variant="primary" size="sm">
                Pequeno
              </CTAButton>
              <CTAButton variant="primary" size="md">
                Médio
              </CTAButton>
              <CTAButton variant="primary" size="lg">
                Grande
              </CTAButton>
            </div>
          </div>

          {/* Botão com Ícone */}
          <div className="space-y-4">
            <h2 className="font-neue font-medium text-xl text-gray-300">
              Botão com Ícone
            </h2>
            <CTAButton 
              variant="primary" 
              size="lg"
              onClick={() => console.log('Começar agora')}
              className="group"
            >
              <Star className="w-5 h-5 mr-2 inline-block group-hover:rotate-12 transition-transform duration-300" />
              Começar Agora
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
