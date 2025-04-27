
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimateInView } from '@/components/animations/AnimateInView';

export function CTASection() {
  return (
    <section className="section bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateInView animation="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Financial Management?
            </h2>
          </AnimateInView>
          
          <AnimateInView animation="fade-up" delay="delay-100">
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Partner with us to streamline your accounting processes, ensure compliance, 
              and unlock valuable financial insights for your business.
            </p>
          </AnimateInView>
          
          <AnimateInView animation="fade-up" delay="delay-200">
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 rounded-full bg-white text-primary font-medium hover:bg-opacity-90 transition-colors flex items-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-3 rounded-full bg-transparent border border-white font-medium hover:bg-white/10 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
