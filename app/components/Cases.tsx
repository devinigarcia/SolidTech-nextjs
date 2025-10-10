'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';
import AnimatedSection from './ui/AnimatedSection';
import Button from './ui/Button';

interface CaseStudy {
  id: number;
  title: string;
  company: string;
  industry: string;
  description: string;
  results: {
    metric: string;
    value: string;
    icon: React.ComponentType<any>;
  }[];
  image: string;
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "E-commerce de Moda",
    company: "Fashion Store",
    industry: "E-commerce",
    description: "Transformamos uma loja online tradicional em uma plataforma de alta performance, implementando otimizações avançadas e personalização baseada em IA.",
    results: [
      { metric: "Aumento de Vendas", value: "+250%", icon: TrendingUp },
      { metric: "Conversão", value: "+180%", icon: Users },
      { metric: "Performance", value: "3x mais rápido", icon: Zap }
    ],
    image: "/images/case-fashion.jpg",
    link: "/cases/fashion-store"
  },
  {
    id: 2,
    title: "Marketplace B2B",
    company: "TechMarket",
    industry: "B2B",
    description: "Criamos uma plataforma B2B completa com sistema de cotações, integração de fornecedores e analytics avançado para otimizar processos.",
    results: [
      { metric: "Redução de Custos", value: "-40%", icon: TrendingUp },
      { metric: "Eficiência", value: "+300%", icon: Users },
      { metric: "Tempo de Resposta", value: "90% mais rápido", icon: Zap }
    ],
    image: "/images/case-marketplace.jpg",
    link: "/cases/techmarket"
  },
  {
    id: 3,
    title: "SaaS Financeiro",
    company: "FinTech Pro",
    industry: "Fintech",
    description: "Desenvolvemos uma plataforma SaaS completa para gestão financeira empresarial com foco em segurança, compliance e escalabilidade.",
    results: [
      { metric: "Crescimento", value: "+400%", icon: TrendingUp },
      { metric: "Clientes Ativos", value: "+500%", icon: Users },
      { metric: "Uptime", value: "99.99%", icon: Zap }
    ],
    image: "/images/case-fintech.jpg",
    link: "/cases/fintech-pro"
  }
];

export default function Cases() {
  return (
    <SectionWrapper id="cases" background="gray">
      <div className="text-center mb-16">
        <SectionTitle
          title="Cases de Sucesso"
          subtitle="Veja como transformamos negócios e geramos resultados extraordinários"
        />
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
        {caseStudies.map((caseStudy, index) => (
          <AnimatedSection 
            key={caseStudy.id} 
            direction="up" 
            delay={index * 0.2}
          >
            <Card className="h-full flex flex-col overflow-hidden group hover:scale-105 transition-all duration-300">
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {caseStudy.industry}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{caseStudy.title}</h3>
                  <p className="text-sm opacity-90">{caseStudy.company}</p>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  {caseStudy.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-accent-blue/20 rounded-lg mb-2">
                        <result.icon className="w-5 h-5 text-accent-blue" />
                      </div>
                      <div className="text-lg font-bold text-white">{result.value}</div>
                      <div className="text-xs text-gray-400">{result.metric}</div>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-accent-blue group-hover:text-white group-hover:border-accent-blue transition-all duration-300 mt-auto"
                >
                  Ver Case Completo
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      {/* CTA Section */}
      <AnimatedSection direction="up" delay={0.8}>
        <div className="text-center mt-16">
          <div className="card-glass p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Quer ser nosso próximo case de sucesso?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos transformar seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="group">
                Falar com Especialista
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Ver Todos os Cases
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}