import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-light to-primary dark:from-primary dark:to-primary-dark">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
