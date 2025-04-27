
import { Helmet } from 'react-helmet';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ServicesSection } from '@/components/home/Services';
import { AboutSection } from '@/components/home/About';
import { TestimonialsSection } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTA';
import { ScrollToTop } from '@/components/animations/ScrollToTop';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AcctFinance | Professional Accounting Services</title>
        <meta name="description" content="AcctFinance provides professional accounting services including bookkeeping, tax preparation, payroll, and financial consulting for businesses of all sizes." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
