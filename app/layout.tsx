import { ReactNode } from "react";
import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Solid Tech - Soluções Tecnológicas Inovadoras",
  description: "Transformamos ideias em soluções tecnológicas inovadoras. Desenvolvimento web, mobile, e-commerce e SaaS com performance excepcional e escalabilidade total.",
  keywords: [
    "desenvolvimento web",
    "aplicativos mobile",
    "e-commerce",
    "SaaS",
    "tecnologia",
    "inovação",
    "performance",
    "escalabilidade"
  ],
  authors: [{ name: "Solid Tech" }],
  creator: "Solid Tech",
  publisher: "Solid Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://solidtech.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Solid Tech - Soluções Tecnológicas Inovadoras",
    description: "Transformamos ideias em soluções tecnológicas inovadoras. Desenvolvimento web, mobile, e-commerce e SaaS com performance excepcional.",
    url: "https://solidtech.com.br",
    siteName: "Solid Tech",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solid Tech - Soluções Tecnológicas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solid Tech - Soluções Tecnológicas Inovadoras",
    description: "Transformamos ideias em soluções tecnológicas inovadoras. Desenvolvimento web, mobile, e-commerce e SaaS.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <Header />
        <MobileHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}