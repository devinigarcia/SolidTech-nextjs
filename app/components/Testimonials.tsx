'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';
import AnimatedSection from './ui/AnimatedSection';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    role: "CEO",
    company: "TechStart",
    content: "A Solid Tech transformou completamente nossa operação. Em apenas 3 meses, aumentamos nossa eficiência em 300% e reduzimos custos operacionais em 40%. A plataforma é intuitiva e o suporte é excepcional.",
    rating: 5,
    avatar: "/images/avatar-maria.jpg"
  },
  {
    id: 2,
    name: "João Santos",
    role: "CTO",
    company: "Inovação Digital",
    content: "A melhor decisão que tomamos foi migrar para a Solid Tech. A performance é impressionante e a escalabilidade nos permitiu crescer 500% sem problemas técnicos. Recomendo para qualquer empresa séria.",
    rating: 5,
    avatar: "/images/avatar-joao.jpg"
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Diretora de Marketing",
    company: "Growth Agency",
    content: "Os resultados falam por si só. Nossas campanhas ficaram 250% mais eficazes com as ferramentas de analytics da Solid Tech. O ROI é incrível e o suporte técnico é de primeira qualidade.",
    rating: 5,
    avatar: "/images/avatar-ana.jpg"
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    role: "Fundador",
    company: "E-commerce Plus",
    content: "Implementamos a solução da Solid Tech em nossa loja online e os resultados foram surpreendentes. Aumentamos as vendas em 400% e melhoramos drasticamente a experiência do cliente.",
    rating: 5,
    avatar: "/images/avatar-carlos.jpg"
  },
  {
    id: 5,
    name: "Fernanda Lima",
    role: "Gerente de Operações",
    company: "Logistics Pro",
    content: "A automação que a Solid Tech nos proporcionou revolucionou nossos processos. Reduzimos o tempo de processamento em 80% e eliminamos erros manuais. Uma solução completa e confiável.",
    rating: 5,
    avatar: "/images/avatar-fernanda.jpg"
  },
  {
    id: 6,
    name: "Roberto Alves",
    role: "Diretor Financeiro",
    company: "Finance Solutions",
    content: "A segurança e compliance da Solid Tech nos deram total tranquilidade. Conseguimos automatizar todos os processos financeiros mantendo a conformidade com todas as regulamentações.",
    rating: 5,
    avatar: "/images/avatar-roberto.jpg"
  }
];

export default function Testimonials() {
  return (
    <SectionWrapper background="gradient">
      <div className="text-center mb-16">
        <SectionTitle
          title="O que nossos clientes dizem"
          subtitle="Mais de 10.000 empresas confiam na Solid Tech para acelerar seu crescimento"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <AnimatedSection 
            key={testimonial.id} 
            direction="up" 
            delay={index * 0.1}
          >
            <Card className="p-8 h-full group hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#fdb927] fill-current" />
                  ))}
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-accent-blue/30 absolute top-0 left-0" />
                <p className="text-gray-300 leading-relaxed pl-8">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4" style={{background: 'var(--gradient-primary)'}}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-accent-blue font-medium">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      {/* Stats Section */}
      <AnimatedSection direction="up" delay={0.8}>
        <div className="mt-16 card-glass p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent-blue mb-2">10K+</div>
              <div className="text-gray-300">Clientes Ativos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent-purple mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent-blue mb-2">4.9/5</div>
              <div className="text-gray-300">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent-purple mb-2">24/7</div>
              <div className="text-gray-300">Suporte</div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
