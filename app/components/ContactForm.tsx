'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle,
  Calendar
} from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';
import AnimatedSection from './ui/AnimatedSection';
import Button from './ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['contato@solidtech.com', 'suporte@solidtech.com'],
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(11) 99999-9999', '(11) 3333-4444'],
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['São Paulo, SP', 'Brasil'],
      color: 'text-red-500'
    },
    {
      icon: Clock,
      title: 'Horário',
      details: ['Seg - Sex: 9h às 18h', 'Sáb: 9h às 14h'],
      color: 'text-purple-500'
    }
  ];

  return (
    <SectionWrapper id="contato" background="gradient">
      <div className="text-center mb-16">
        <SectionTitle
          title="Vamos conversar sobre seu projeto?"
          subtitle="Entre em contato conosco e descubra como podemos transformar sua ideia em realidade"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <AnimatedSection direction="left" delay={0.2}>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                Informações de Contato
              </h3>
              <p className="text-dark-600 leading-relaxed">
                Nossa equipe está pronta para ajudar você a alcançar seus objetivos. 
                Entre em contato através dos canais abaixo ou preencha o formulário.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gray-50 ${info.color}`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-dark-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-dark-900">Ações Rápidas</h4>
              <div className="space-y-3">
                <Button variant="outline" size="lg" className="w-full justify-start">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Chat ao Vivo
                </Button>
                <Button variant="outline" size="lg" className="w-full justify-start">
                  <Calendar className="w-5 h-5 mr-3" />
                  Agendar Reunião
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection direction="right" delay={0.4}>
          <Card className="p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-dark-900 mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-dark-600">
                  Obrigado pelo contato. Retornaremos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="desenvolvimento">Desenvolvimento</option>
                    <option value="suporte">Suporte</option>
                    <option value="parceria">Parceria</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Orçamento
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecione</option>
                      <option value="ate-10k">Até R$ 10.000</option>
                      <option value="10k-50k">R$ 10.000 - R$ 50.000</option>
                      <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                      <option value="acima-100k">Acima de R$ 100.000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Prazo
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecione</option>
                      <option value="urgente">Urgente (1-2 semanas)</option>
                      <option value="rapido">Rápido (1 mês)</option>
                      <option value="normal">Normal (2-3 meses)</option>
                      <option value="flexivel">Flexível (3+ meses)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Conte-nos mais sobre seu projeto..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensagem
                </Button>
        </form>
            )}
          </Card>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}