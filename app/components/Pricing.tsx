'use client';

import { Zap } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import AnimatedSection from './ui/AnimatedSection';
import Button from './ui/Button';

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" background="gray">
      {/* Custom Solutions CTA */}
      <AnimatedSection direction="up" delay={0.2}>
        <div className="text-center">
          <div className="card-glass p-8 md:p-12">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-[#fdb927] mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">Precisa de algo personalizado?</h3>
            </div>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe de especialistas pode criar uma solução sob medida para suas necessidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Falar com Especialista
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900">
                Ver Comparativo
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
