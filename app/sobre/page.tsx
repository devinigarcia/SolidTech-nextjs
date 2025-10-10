import { Metadata } from 'next';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import { 
  Target, 
  Users, 
  Lightbulb, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Button from '../components/ui/Button';

export const metadata: Metadata = {
  title: 'Sobre Nós - Solid Tech',
  description: 'Conheça a Solid Tech, nossa missão, visão e valores. Uma empresa de tecnologia focada em inovação e resultados excepcionais.',
};

const values = [
  {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Cada projeto é desenvolvido com o objetivo claro de gerar valor real para nossos clientes.'
  },
  {
    icon: Users,
    title: 'Colaboração',
    description: 'Acreditamos que os melhores resultados surgem do trabalho em equipe e da parceria com nossos clientes.'
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Estamos sempre buscando novas tecnologias e metodologias para entregar soluções mais eficientes.'
  },
  {
    icon: Award,
    title: 'Excelência',
    description: 'Comprometemo-nos com a mais alta qualidade em todos os aspectos do nosso trabalho.'
  }
];

const team = [
  {
    name: 'Maria Silva',
    role: 'CEO & Fundadora',
    description: '15+ anos de experiência em tecnologia e liderança empresarial.',
    image: '/images/team-maria.jpg'
  },
  {
    name: 'João Santos',
    role: 'CTO',
    description: 'Especialista em arquitetura de software e tecnologias emergentes.',
    image: '/images/team-joao.jpg'
  },
  {
    name: 'Ana Costa',
    role: 'Head de Design',
    description: 'Designer UX/UI com foco em experiências digitais excepcionais.',
    image: '/images/team-ana.jpg'
  },
  {
    name: 'Carlos Oliveira',
    role: 'Head de Desenvolvimento',
    description: 'Desenvolvedor full-stack com expertise em múltiplas tecnologias.',
    image: '/images/team-carlos.jpg'
  }
];

const stats = [
  { number: '10K+', label: 'Clientes Ativos' },
  { number: '500+', label: 'Projetos Entregues' },
  { number: '99.9%', label: 'Satisfação do Cliente' },
  { number: '24/7', label: 'Suporte Disponível' }
];

export default function SobrePage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper background="gradient" padding="xl">
        <div className="text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
              Sobre a <span className="gradient-text">Solid Tech</span>
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              Somos uma empresa de tecnologia apaixonada por transformar ideias em soluções 
              digitais inovadoras que impulsionam o crescimento dos nossos clientes.
            </p>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Mission, Vision, Values */}
      <SectionWrapper background="white">
        <div className="grid lg:grid-cols-3 gap-8">
          <AnimatedSection direction="up" delay={0.2}>
            <Card className="p-8 text-center">
              <Target className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-dark-900 mb-4">Nossa Missão</h3>
              <p className="text-dark-600 leading-relaxed">
                Democratizar o acesso à tecnologia de ponta, fornecendo soluções inovadoras 
                que aceleram o crescimento e maximizam o potencial de cada negócio.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <Card className="p-8 text-center">
              <Lightbulb className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-dark-900 mb-4">Nossa Visão</h3>
              <p className="text-dark-600 leading-relaxed">
                Ser a principal referência em soluções tecnológicas no Brasil, 
                reconhecida pela excelência, inovação e impacto positivo na sociedade.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.6}>
            <Card className="p-8 text-center">
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-dark-900 mb-4">Nossos Valores</h3>
              <p className="text-dark-600 leading-relaxed">
                Transparência, qualidade, inovação e compromisso com o sucesso 
                dos nossos clientes são os pilares que guiam todas as nossas ações.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Values Grid */}
      <SectionWrapper background="gray">
        <div className="text-center mb-16">
          <SectionTitle
            title="Nossos Valores em Ação"
            subtitle="Os princípios que orientam cada decisão e projeto"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.1}>
              <Card className="p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl mb-4 group-hover:bg-primary-100 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">{value.title}</h3>
                <p className="text-dark-600 leading-relaxed">{value.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper background="white">
        <div className="text-center mb-16">
          <SectionTitle
            title="Nossa Equipe"
            subtitle="Profissionais apaixonados por tecnologia e resultados"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.1}>
              <Card className="p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-dark-600 text-sm leading-relaxed">{member.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper background="gradient">
        <div className="text-center mb-16">
          <SectionTitle
            title="Números que Comprovam Nossa Excelência"
            subtitle="Resultados que falam por si só"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-dark-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-600 font-medium">{stat.label}</div>
              </div>
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
                Pronto para trabalhar conosco?
              </h3>
              <p className="text-lg text-dark-600 mb-8 max-w-2xl mx-auto">
                Vamos conversar sobre como podemos ajudar sua empresa a alcançar seus objetivos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" className="group">
                  Falar com Especialista
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Ver Nossos Cases
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}



