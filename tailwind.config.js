/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
          background: "#0A0A0A",
          foreground: "#FFFFFF",
          // Solid Tech Premium Dark Theme
          background: {
            primary: '#0A0A0A',      // Preto absoluto
            secondary: '#121212',    // Cinza grafite
            tertiary: '#1A1A1A',     // Superfície elevada
            surface: '#121212',      // Cards e elementos
            glass: 'rgba(255, 255, 255, 0.05)', // Glass effect
          },
          text: {
            primary: '#FFFFFF',       // Branco puro
            secondary: '#E6E6E6',     // Cinza claro
            muted: '#B3B3B3',         // Cinza médio
            disabled: '#666666',      // Cinza escuro
          },
          accent: {
            primary: '#FDB927',       // Dourado vibrante
            secondary: '#FFD14F',      // Amarelo claro (hover)
            tertiary: '#FFB600',      // Para gradientes
            success: '#10B981',       // Verde success
          },
          blue: {
            contrast: '#1B2A40',      // Azul petróleo escuro
          },
          border: {
            primary: '#2A2A2A',       // Bordas sutis
            secondary: '#1A1A1A',     // Bordas secundárias
            accent: '#FDB927',        // Borda dourada
          },
          hover: {
            glow: '#FDB927',          // Glow dourado
          },
          shadow: {
            primary: 'rgba(253, 185, 39, 0.4)', // Sombra dourada
            secondary: 'rgba(253, 185, 39, 0.2)', // Sombra suave
          }
        },
      fontFamily: {
        neue: ['PP Neue Montreal', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        sans: ['PP Neue Montreal', 'Satoshi', 'sans-serif'],
        display: ['PP Neue Montreal', 'Satoshi', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-pattern.svg')",
      },
    },
  },
  plugins: [],
}
