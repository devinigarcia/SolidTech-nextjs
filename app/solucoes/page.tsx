import { Metadata } from 'next';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Cloud,
  Database,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Button from '../components/ui/Button';

export const metadata: Metadata = {
  title: 'Soluções - Solid Tech',
  description: 'Conheça nossas soluções tecnológicas: desenvolvimento web, mobile, e-commerce, SaaS e muito mais. Tecnologia de ponta para seu negócio.',
};

const solutions = [
  {
    icon: Globe,
    title: 'Desenvolvimento Web',
    description: 'Sites e aplicações web modernas, responsivas e de alta performance.',
    features: [
      'Sites institucionais responsivos',
      'Aplicações web complexas',
      'PWA (Progressive Web Apps)',
      'Integração com APIs',
      'Otimização SEO',
      'Performance avançada'
    ],
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Smartphone,
    title: 'Aplicativos Mobile',
    description: 'Apps nativos e híbridos para iOS e Android com excelente UX.',
    features: [
      'Apps nativos iOS/Android',
      'React Native',
      'Flutter',
      'Design responsivo',
      'Integração com backend',
      'Publicação nas stores'
    ],
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Lojas virtuais completas com foco em conversão e performance.',
    features: [
      'Plataformas personalizadas',
      'Integração com gateways',
      'Gestão de estoque',
      'Analytics avançado',
      'Mobile-first design',
      'SEO otimizado'
    ],
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Cloud,
    title: 'SaaS & Cloud',
    description: 'Soluções SaaS escaláveis e infraestrutura em nuvem.',
    features: [
      'Arquitetura SaaS',
      'Multi-tenancy',
      'Escalabilidade automática',
      'APIs RESTful',
      'Microserviços',
      'Monitoramento 24/7'
    ],
    color: 'text-orange-500',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Database,
    title: 'Sistemas Corporativos',
    description: 'Sistemas personalizados para gestão e automação empresarial.',
    features: [
      'ERPs personalizados',
      'CRMs avançados',
      'Sistemas de gestão',
      'Automação de processos',
      'Relatórios inteligentes',
      'Integração de dados'
    ],
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
  {
    icon: Shield,
    title: 'Segurança & Compliance',
    description: 'Soluções de segurança e conformidade para proteger seu negócio.',
    features: [
      'Auditoria de segurança',
      'Compliance LGPD',
      'Criptografia avançada',
      'Backup automatizado',
      'Monitoramento de ameaças',
      'Certificações de segurança'
    ],
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50'
  }
];

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' }
];

const process = [
  {
    step: '01',
    title: 'Descoberta',
    description: 'Entendemos suas necessidades e objetivos através de workshops e entrevistas.'
  },
  {
    step: '02',
    title: 'Estratégia',
    description: 'Desenvolvemos uma estratégia personalizada com roadmap e cronograma.'
  },
  {
    step: '03',
    title: 'Design',
    description: 'Criamos protótipos e designs que garantem a melhor experiência do usuário.'
  },
  {
    step: '04',
    title: 'Desenvolvimento',
    description: 'Implementamos a solução com metodologias ágeis e entregas incrementais.'
  },
  {
    step: '05',
    title: 'Testes',
    description: 'Realizamos testes rigorosos para garantir qualidade e performance.'
  },
  {
    step: '06',
    title: 'Deploy',
    description: 'Fazemos o deploy e fornecemos suporte contínuo para sua solução.'
  }
];

export default function SolucoesPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper background="gradient" padding="xl">
        <div className="text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
              Nossas <span className="gradient-text">Soluções</span>
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos soluções tecnológicas personalizadas que impulsionam 
              o crescimento e maximizam os resultados do seu negócio.
            </p>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Solutions Grid */}
      <SectionWrapper background="white">
        <div className="text-center mb-16">
          <SectionTitle
            title="Soluções Completas para Seu Negócio"
            subtitle="Tecnologia de ponta para cada necessidade"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.1}>
              <Card className="p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`p-4 rounded-2xl ${solution.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className={`w-8 h-8 ${solution.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark-900 mb-3">{solution.title}</h3>
                    <p className="text-dark-600 mb-6 leading-relaxed">{solution.description}</p>
                    
                    <div className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-dark-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" className="mt-6 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                      Saiba Mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Technologies */}
      <SectionWrapper background="gray">
        <div className="text-center mb-16">
          <SectionTitle
            title="Tecnologias que Utilizamos"
            subtitle="Stack moderno e confiável para suas soluções"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.05}>
              <Card className="p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-dark-900 mb-2">{tech.name}</div>
                <div className="text-sm text-primary-600 font-medium">{tech.category}</div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper background="white">
        <div className="text-center mb-16">
          <SectionTitle
            title="Nosso Processo de Desenvolvimento"
            subtitle="Metodologia comprovada para entregas de qualidade"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.1}>
              <Card className="p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-4">{step.title}</h3>
                <p className="text-dark-600 leading-relaxed">{step.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="gradient">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4">
                Pronto para transformar sua ideia em realidade?
              </h3>
              <p className="text-lg text-dark-600 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos ajudar sua empresa 
                a alcançar seus objetivos com tecnologia de ponta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" className="group">
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Agendar Consultoria
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}



