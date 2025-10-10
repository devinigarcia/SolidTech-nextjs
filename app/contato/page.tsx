import { Metadata } from 'next';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import ContactForm from '../components/ContactForm';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Calendar,
  Headphones
} from 'lucide-react';
import Button from '../components/ui/Button';

export const metadata: Metadata = {
  title: 'Contato - Solid Tech',
  description: 'Entre em contato conosco. Estamos prontos para ajudar sua empresa a alcançar seus objetivos com tecnologia de ponta.',
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: ['contato@solidtech.com', 'suporte@solidtech.com'],
    description: 'Envie-nos um email e retornaremos em até 24h',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Phone,
    title: 'Telefone',
    details: ['(11) 99999-9999', '(11) 3333-4444'],
    description: 'Ligue para falar diretamente com nossa equipe',
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    icon: MapPin,
    title: 'Endereço',
    details: ['Av. Paulista, 1000', 'São Paulo - SP, 01310-100'],
    description: 'Visite nosso escritório no coração de São Paulo',
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    details: ['Seg - Sex: 9h às 18h', 'Sáb: 9h às 14h'],
    description: 'Estamos disponíveis para atendê-lo',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  }
];

const quickActions = [
  {
    icon: MessageCircle,
    title: 'Chat ao Vivo',
    description: 'Converse conosco em tempo real',
    action: 'Iniciar Chat',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Calendar,
    title: 'Agendar Reunião',
    description: 'Marque uma reunião com nossos especialistas',
    action: 'Agendar',
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    icon: Headphones,
    title: 'Suporte Técnico',
    description: 'Precisa de ajuda técnica? Estamos aqui',
    action: 'Abrir Ticket',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  }
];

const faqs = [
  {
    question: 'Quanto tempo leva para desenvolver um projeto?',
    answer: 'O tempo varia conforme a complexidade do projeto. Projetos simples podem levar 2-4 semanas, enquanto projetos mais complexos podem levar 3-6 meses. Sempre fornecemos um cronograma detalhado na proposta.'
  },
  {
    question: 'Vocês oferecem suporte pós-entrega?',
    answer: 'Sim! Oferecemos suporte técnico completo por 3 meses após a entrega, incluindo correções de bugs e pequenos ajustes. Também temos planos de manutenção contínua disponíveis.'
  },
  {
    question: 'Trabalham com empresas de qualquer tamanho?',
    answer: 'Sim, atendemos desde startups até grandes corporações. Nossas soluções são escaláveis e se adaptam às necessidades específicas de cada cliente.'
  },
  {
    question: 'Como funciona o processo de desenvolvimento?',
    answer: 'Seguimos metodologias ágeis com entregas incrementais. O processo inclui descoberta, planejamento, desenvolvimento, testes e deploy, com comunicação constante com o cliente.'
  }
];

export default function ContatoPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper background="gradient" padding="xl">
        <div className="text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para ajudar sua empresa a alcançar seus objetivos. 
              Entre em contato conosco e descubra como podemos transformar sua ideia em realidade.
            </p>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Contact Information */}
      <SectionWrapper background="white">
        <div className="text-center mb-16">
          <SectionTitle
            title="Informações de Contato"
            subtitle="Escolha a forma mais conveniente para entrar em contato conosco"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.1}>
              <Card className="p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${info.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">{info.title}</h3>
                <p className="text-dark-600 mb-4 text-sm">{info.description}</p>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-dark-700 font-medium">{detail}</p>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Quick Actions */}
      <SectionWrapper background="gray">
        <div className="text-center mb-16">
          <SectionTitle
            title="Ações Rápidas"
            subtitle="Resolva suas necessidades de forma rápida e eficiente"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {quickActions.map((action, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.1}>
              <Card className="p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${action.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className={`w-8 h-8 ${action.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">{action.title}</h3>
                <p className="text-dark-600 mb-6">{action.description}</p>
                <Button variant="outline" size="lg" className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                  {action.action}
                </Button>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Form */}
      <ContactForm />

      {/* FAQ Section */}
      <SectionWrapper background="white">
        <div className="text-center mb-16">
          <SectionTitle
            title="Perguntas Frequentes"
            subtitle="Encontre respostas para as dúvidas mais comuns"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-dark-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-dark-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Map Section */}
      <SectionWrapper background="gray">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-dark-900 mb-4">Nossa Localização</h3>
          <p className="text-dark-600">Visite nosso escritório no coração de São Paulo</p>
        </div>
        
        <AnimatedSection direction="up" delay={0.2}>
          <Card className="overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-dark-900 mb-2">Av. Paulista, 1000</h4>
                <p className="text-dark-600">São Paulo - SP, 01310-100</p>
                <Button variant="outline" size="sm" className="mt-4">
                  Ver no Google Maps
                </Button>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}



