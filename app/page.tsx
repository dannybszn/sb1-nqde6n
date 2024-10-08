import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}