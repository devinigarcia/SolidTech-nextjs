'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Smartphone, 
  Globe,
  Lock,
  TrendingUp,
  Clock
} from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';
import AnimatedSection from './ui/AnimatedSection';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  { 
    icon: Zap, 
    title: "Performance Extrema", 
    description: "Carregamento ultra-rápido com otimizações avançadas e CDN global.",
    color: "text-[#fdb927]"
  },
  { 
    icon: Shield, 
    title: "Segurança Avançada", 
    description: "Proteção completa com criptografia de ponta e monitoramento 24/7.",
    color: "text-green-500"
  },
  { 
    icon: BarChart3, 
    title: "Analytics Inteligente", 
    description: "Insights profundos com IA para otimizar suas conversões e vendas.",
    color: "text-blue-500"
  },
  { 
    icon: Users, 
    title: "Escalabilidade Total", 
    description: "Cresça sem limites com infraestrutura que se adapta ao seu negócio.",
    color: "text-purple-500"
  },
  { 
    icon: Smartphone, 
    title: "Mobile First", 
    description: "Experiência perfeita em todos os dispositivos com design responsivo.",
    color: "text-pink-500"
  },
  { 
    icon: Globe, 
    title: "Global Reach", 
    description: "Presença mundial com servidores em múltiplos continentes.",
    color: "text-indigo-500"
  },
  { 
    icon: Lock, 
    title: "Compliance Total", 
    description: "Conformidade com LGPD, GDPR e todas as regulamentações.",
    color: "text-red-500"
  },
  { 
    icon: TrendingUp, 
    title: "ROI Garantido", 
    description: "Aumente suas vendas em até 300% com nossas otimizações.",
    color: "text-orange-500"
  },
  { 
    icon: Clock, 
    title: "Suporte 24/7", 
    description: "Equipe especializada disponível 24 horas para te ajudar.",
    color: "text-cyan-500"
  },
];

export default function Features() {
  return (
    <SectionWrapper id="features" background="gray">
      <div className="text-center mb-24">
        <SectionTitle
          title="Funcionalidades que fazem a diferença"
          subtitle="Tecnologia de ponta para acelerar seu crescimento e maximizar seus resultados"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <AnimatedSection 
            key={index} 
            direction="up" 
            delay={index * 0.1}
          >
            <Card className="p-10 h-full group hover:scale-105 transition-all duration-500">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-neutral-50 to-neutral-100 group-hover:from-primary-50 group-hover:to-primary-100 transition-all duration-500 mb-8 group-hover:scale-110 group-hover:rotate-3`}>
                  <feature.icon className={`w-10 h-10 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                
                <h3 className="text-2xl font-medium text-white mb-6 group-hover:text-accent-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      {/* CTA Section */}
      <AnimatedSection direction="up" delay={0.8}>
        <div className="text-center mt-24">
          <div className="card-glass p-16 md:p-20">
            <h3 className="text-4xl md:text-5xl font-light text-white mb-6">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Junte-se a milhares de empresas que já estão crescendo com nossas soluções.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-12 py-6 text-lg shimmer"
              >
                Começar Agora
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline px-12 py-6 text-lg"
              >
                Agendar Demo
              </motion.button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}