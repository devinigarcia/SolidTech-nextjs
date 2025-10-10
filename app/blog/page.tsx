import { Metadata } from 'next';
import Link from 'next/link';
import SectionWrapper from '../components/ui/SectionWrapper';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  Eye,
  Search
} from 'lucide-react';
import Button from '../components/ui/Button';

export const metadata: Metadata = {
  title: 'Blog - Solid Tech',
  description: 'Insights, tendências e dicas sobre tecnologia, desenvolvimento e inovação. Mantenha-se atualizado com o melhor conteúdo técnico.',
};

const blogPosts = [
  {
    id: 1,
    title: 'O Futuro do Desenvolvimento Web: Tendências para 2024',
    excerpt: 'Descubra as principais tendências que estão moldando o desenvolvimento web em 2024, desde IA até WebAssembly.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Maria Silva',
    date: '2024-01-15',
    readTime: '8 min',
    views: 1250,
    category: 'Desenvolvimento',
    tags: ['Web', 'Tendências', '2024'],
    image: '/images/blog/web-trends.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Como Escolher a Stack Tecnológica Ideal para Seu Projeto',
    excerpt: 'Guia completo para escolher as tecnologias certas considerando performance, escalabilidade e manutenibilidade.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'João Santos',
    date: '2024-01-10',
    readTime: '12 min',
    views: 980,
    category: 'Arquitetura',
    tags: ['Stack', 'Tecnologia', 'Decisões'],
    image: '/images/blog/tech-stack.jpg',
    featured: false
  },
  {
    id: 3,
    title: 'Performance Web: Técnicas Avançadas de Otimização',
    excerpt: 'Aprenda técnicas avançadas para otimizar a performance de suas aplicações web e melhorar a experiência do usuário.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Ana Costa',
    date: '2024-01-05',
    readTime: '15 min',
    views: 2100,
    category: 'Performance',
    tags: ['Performance', 'Otimização', 'Web'],
    image: '/images/blog/performance.jpg',
    featured: true
  },
  {
    id: 4,
    title: 'Segurança em Aplicações Web: Melhores Práticas',
    excerpt: 'Proteja suas aplicações web com as melhores práticas de segurança e evite vulnerabilidades comuns.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Carlos Oliveira',
    date: '2024-01-01',
    readTime: '10 min',
    views: 1560,
    category: 'Segurança',
    tags: ['Segurança', 'Web', 'Práticas'],
    image: '/images/blog/security.jpg',
    featured: false
  },
  {
    id: 5,
    title: 'Microserviços vs Monolito: Quando Usar Cada Abordagem',
    excerpt: 'Entenda as vantagens e desvantagens de cada arquitetura e saiba quando escolher microserviços ou monolito.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Fernanda Lima',
    date: '2023-12-28',
    readTime: '14 min',
    views: 1890,
    category: 'Arquitetura',
    tags: ['Microserviços', 'Arquitetura', 'Escalabilidade'],
    image: '/images/blog/microservices.jpg',
    featured: false
  },
  {
    id: 6,
    title: 'Inteligência Artificial no Desenvolvimento: Ferramentas e Tendencias',
    excerpt: 'Explore como a IA está revolucionando o desenvolvimento de software e as ferramentas que você deve conhecer.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Roberto Alves',
    date: '2023-12-20',
    readTime: '11 min',
    views: 3200,
    category: 'IA',
    tags: ['IA', 'Desenvolvimento', 'Ferramentas'],
    image: '/images/blog/ai-dev.jpg',
    featured: true
  }
];

const categories = [
  'Todos',
  'Desenvolvimento',
  'Arquitetura',
  'Performance',
  'Segurança',
  'IA',
  'Mobile',
  'DevOps'
];

const featuredPost = blogPosts.find(post => post.featured);
const regularPosts = blogPosts.filter(post => !post.featured);

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper background="gradient" padding="xl">
        <div className="text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
              Nosso <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              Insights, tendências e dicas sobre tecnologia, desenvolvimento e inovação. 
              Mantenha-se atualizado com o melhor conteúdo técnico.
            </p>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Search and Filter */}
      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <Button variant="primary">
              Buscar
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300"
              >
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Post */}
      {featuredPost && (
        <SectionWrapper background="gray">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-dark-900 mb-8">Destaque da Semana</h2>
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="h-64 lg:h-full bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                      {featuredPost.title}
                    </h3>
                    <p className="text-dark-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-dark-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(featuredPost.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        <span>{featuredPost.views} visualizações</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Button variant="primary" className="group">
                      Ler Artigo
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </SectionWrapper>
      )}

      {/* Regular Posts */}
      <SectionWrapper background="white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-dark-900 mb-8">Últimos Artigos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <AnimatedSection key={post.id} direction="up" delay={index * 0.1}>
                <Card className="overflow-hidden group hover:scale-105 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-dark-900 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-dark-600 mb-4 leading-relaxed text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-dark-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-dark-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{post.readTime}</span>
                        <Eye className="w-3 h-3 ml-3 mr-1" />
                        <span>{post.views}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group">
                        Ler mais
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Newsletter CTA */}
      <SectionWrapper background="gradient">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4">
                Mantenha-se Atualizado
              </h3>
              <p className="text-lg text-dark-600 mb-8 max-w-2xl mx-auto">
                Receba nossos melhores artigos e insights sobre tecnologia diretamente no seu email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Button variant="primary">
                  Inscrever-se
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}



