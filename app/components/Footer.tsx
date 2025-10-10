'use client';

import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    empresa: [
      { name: 'Sobre Nós', href: '/sobre' },
      { name: 'Nossa Equipe', href: '/equipe' },
      { name: 'Carreiras', href: '/carreiras' },
      { name: 'Imprensa', href: '/imprensa' },
    ],
    solucoes: [
      { name: 'Desenvolvimento Web', href: '/solucoes/web' },
      { name: 'Aplicativos Mobile', href: '/solucoes/mobile' },
      { name: 'E-commerce', href: '/solucoes/ecommerce' },
      { name: 'SaaS', href: '/solucoes/saas' },
    ],
    recursos: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentação', href: '/docs' },
      { name: 'API', href: '/api' },
      { name: 'Status', href: '/status' },
    ],
    suporte: [
      { name: 'Central de Ajuda', href: '/ajuda' },
      { name: 'Contato', href: '/contato' },
      { name: 'Comunidade', href: '/comunidade' },
      { name: 'Tickets', href: '/tickets' },
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-[#050505] text-[#E6E6E6]">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <img 
                src="/images/1555a04a-2272-495a-9b71-46e1fe04edb0.jpg" 
                alt="Solid Tech Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-semibold text-white">Solid Tech</span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformamos ideias em soluções tecnológicas inovadoras. 
              Aceleramos o crescimento de empresas através de tecnologia de ponta.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-primary-500" />
                <span>contato@solidtech.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-primary-500" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-primary-500" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3">
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[#B3B3B3] hover:text-[#FDB927] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Soluções</h3>
              <ul className="space-y-3">
                {footerLinks.solucoes.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[#B3B3B3] hover:text-[#FDB927] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos</h3>
              <ul className="space-y-3">
                {footerLinks.recursos.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[#B3B3B3] hover:text-[#FDB927] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Suporte</h3>
              <ul className="space-y-3">
                {footerLinks.suporte.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[#B3B3B3] hover:text-[#FDB927] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Receba as últimas novidades e insights sobre tecnologia.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <Button variant="primary" size="sm">
                Inscrever
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Solid Tech. Todos os direitos reservados.
            </div>

            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-[#B3B3B3] hover:text-[#FDB927] transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-[#FDB927] hover:bg-[#FFD14F] rounded-lg transition-colors duration-200"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}