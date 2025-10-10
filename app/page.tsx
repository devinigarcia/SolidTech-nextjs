import Hero from "./components/Hero";
import Features from "./components/Features";
import Cases from "./components/Cases";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Cases />
      <Testimonials />
      <Pricing />
      <ContactForm />
    </>
  );
}