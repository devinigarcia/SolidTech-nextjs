import { Metadata } from 'next';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import { 
  ExternalLink, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Zap,
  Calendar,
  Tag
} from 'lucide-react';
import Button from '../components/ui/Button';

export const metadata: Metadata = {
  title: 'Cases de Sucesso - Solid Tech',
  description: 'Conheça nossos cases de sucesso e veja como transformamos negócios através de soluções tecnológicas inovadoras.',
};

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce de Moda',
    company: 'Fashion Store',
    industry: 'E-commerce',
    description: 'Transformamos uma loja online tradicional em uma plataforma de alta performance, implementando otimizações avançadas e personalização baseada em IA.',
    challenge: 'A loja enfrentava baixa conversão e performance ruim, resultando em vendas limitadas.',
    solution: 'Desenvolvemos uma plataforma moderna com personalização por IA, otimização de performance e UX aprimorada.',
    results: [
      { metric: 'Aumento de Vendas', value: '+250%', icon: TrendingUp },
      { metric: 'Taxa de Conversão', value: '+180%', icon: Users },
      { metric: 'Performance', value: '3x mais rápido', icon: Zap }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    duration: '4 meses',
    team: '6 profissionais',
    image: '/images/case-fashion.jpg',
    link: '/cases/fashion-store'
  },
  {
    id: 2,
    title: 'Marketplace B2B',
    company: 'TechMarket',
    industry: 'B2B',
    description: 'Criamos uma plataforma B2B completa com sistema de cotações, integração de fornecedores e analytics avançado para otimizar processos.',
    challenge: 'Processos manuais e ineficientes para cotações e gestão de fornecedores.',
    solution: 'Plataforma automatizada com IA para matching de fornecedores e analytics preditivo.',
    results: [
      { metric: 'Redução de Custos', value: '-40%', icon: TrendingUp },
      { metric: 'Eficiência', value: '+300%', icon: Users },
      { metric: 'Tempo de Resposta', value: '90% mais rápido', icon: Zap }
    ],
    technologies: ['Next.js', 'Python', 'MongoDB', 'Docker'],
    duration: '6 meses',
    team: '8 profissionais',
    image: '/images/case-marketplace.jpg',
    link: '/cases/techmarket'
  },
  {
    id: 3,
    title: 'SaaS Financeiro',
    company: 'FinTech Pro',
    industry: 'Fintech',
    description: 'Desenvolvemos uma plataforma SaaS completa para gestão financeira empresarial com foco em segurança, compliance e escalabilidade.',
    challenge: 'Necessidade de uma solução financeira segura e escalável para empresas de médio porte.',
    solution: 'SaaS completo com arquitetura multi-tenant, compliance LGPD e integrações bancárias.',
    results: [
      { metric: 'Crescimento', value: '+400%', icon: TrendingUp },
      { metric: 'Clientes Ativos', value: '+500%', icon: Users },
      { metric: 'Uptime', value: '99.99%', icon: Zap }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Kubernetes'],
    duration: '8 meses',
    team: '10 profissionais',
    image: '/images/case-fintech.jpg',
    link: '/cases/fintech-pro'
  },
  {
    id: 4,
    title: 'App de Delivery',
    company: 'QuickEats',
    industry: 'Food & Beverage',
    description: 'Aplicativo mobile completo para delivery de comida com geolocalização, pagamentos integrados e sistema de avaliações.',
    challenge: 'Criar uma plataforma de delivery competitiva com excelente UX e performance.',
    solution: 'App nativo com integração de mapas, pagamentos e sistema de recomendações por IA.',
    results: [
      { metric: 'Downloads', value: '+1M', icon: TrendingUp },
      { metric: 'Avaliação', value: '4.8/5', icon: Users },
      { metric: 'Tempo de Entrega', value: '-25%', icon: Zap }
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
    duration: '5 meses',
    team: '7 profissionais',
    image: '/images/case-delivery.jpg',
    link: '/cases/quickeats'
  },
  {
    id: 5,
    title: 'ERP Personalizado',
    company: 'Manufacturing Co',
    industry: 'Manufacturing',
    description: 'Sistema ERP completo para gestão de produção, estoque, vendas e recursos humanos de uma indústria de médio porte.',
    challenge: 'Sistemas legados desconectados e processos manuais ineficientes.',
    solution: 'ERP integrado com automação de processos e dashboards em tempo real.',
    results: [
      { metric: 'Eficiência', value: '+200%', icon: TrendingUp },
      { metric: 'Redução de Erros', value: '-85%', icon: Users },
      { metric: 'Tempo de Processo', value: '-60%', icon: Zap }
    ],
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
    duration: '10 meses',
    team: '12 profissionais',
    image: '/images/case-erp.jpg',
    link: '/cases/manufacturing'
  },
  {
    id: 6,
    title: 'Plataforma de E-learning',
    company: 'EduTech',
    industry: 'Education',
    description: 'Plataforma completa de ensino online com videoaulas, exercícios interativos, gamificação e analytics de aprendizado.',
    challenge: 'Criar uma experiência de aprendizado envolvente e eficaz para estudantes online.',
    solution: 'Plataforma gamificada com IA para personalização do aprendizado e analytics avançado.',
    results: [
      { metric: 'Engajamento', value: '+350%', icon: TrendingUp },
      { metric: 'Taxa de Conclusão', value: '+180%', icon: Users },
      { metric: 'Satisfação', value: '4.9/5', icon: Zap }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    duration: '7 meses',
    team: '9 profissionais',
    image: '/images/case-education.jpg',
    link: '/cases/edutech'
  }
];

const industries = [
  'E-commerce',
  'Fintech',
  'Healthcare',
  'Education',
  'Manufacturing',
  'B2B',
  'Food & Beverage',
  'Real Estate'
];

export default function CasesPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper background="gradient" padding="xl">
        <div className="text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
              Cases de <span className="gradient-text">Sucesso</span>
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              Veja como transformamos negócios e geramos resultados extraordinários 
              através de soluções tecnológicas inovadoras.
            </p>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Filter Section */}
      <SectionWrapper background="white">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-dark-900 mb-6">Filtrar por Indústria</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300"
              >
                <Tag className="w-4 h-4 mr-2" />
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Cases Grid */}
      <SectionWrapper background="gray">
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <AnimatedSection key={caseStudy.id} direction="up" delay={index * 0.1}>
              <Card className="overflow-hidden group hover:scale-105 transition-all duration-300">
                {/* Header */}
                <div className="h-64 bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-dark-900 px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.industry}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
                    <p className="text-sm opacity-90">{caseStudy.company}</p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-dark-600 mb-6 leading-relaxed">
                    {caseStudy.description}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-dark-900 mb-2">Desafio:</h4>
                    <p className="text-sm text-dark-600 mb-3">{caseStudy.challenge}</p>
                    <h4 className="font-semibold text-dark-900 mb-2">Solução:</h4>
                    <p className="text-sm text-dark-600">{caseStudy.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-primary-50 rounded-lg mb-2">
                          <result.icon className="w-5 h-5 text-primary-600" />
                        </div>
                        <div className="text-lg font-bold text-dark-900">{result.value}</div>
                        <div className="text-xs text-dark-500">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-dark-900 mb-3">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex items-center justify-between text-sm text-dark-500 mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{caseStudy.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{caseStudy.team}</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300"
                  >
                    Ver Case Completo
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="white">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4">
                Quer ser nosso próximo case de sucesso?
              </h3>
              <p className="text-lg text-dark-600 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos transformar seu negócio 
                com soluções tecnológicas inovadoras.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" className="group">
                  Falar com Especialista
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}



