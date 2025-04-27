
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimateInView } from '@/components/animations/AnimateInView';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          <AnimateInView animation="fade-up">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Professional Accounting Services
            </div>
          </AnimateInView>
          
          <AnimateInView animation="fade-up" delay="delay-100">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Your Financial <span className="text-primary">Success</span> Is Our Priority
            </h1>
          </AnimateInView>
          
          <AnimateInView animation="fade-up" delay="delay-200">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              We provide comprehensive accounting solutions tailored to your business needs. 
              Let us handle the numbers while you focus on what matters most - growing your business.
            </p>
          </AnimateInView>
          
          <AnimateInView animation="fade-up" delay="delay-300">
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>
          </AnimateInView>
        </div>
        
        <AnimateInView animation="fade-in" delay="delay-400" className="relative">
          <div className="relative mx-auto lg:ml-auto w-full max-w-lg aspect-square">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 blur-xl" />
            <div className="card-glass p-8 md:p-10 w-full h-full flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600" 
                alt="Financial analytics dashboard" 
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
