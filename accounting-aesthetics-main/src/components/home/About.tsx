
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimateInView } from '@/components/animations/AnimateInView';

const benefits = [
  "Specialized team of certified accountants",
  "Customized solutions for your business needs",
  "Cost-effective alternatives to in-house accounting",
  "Scalable services that grow with your business",
  "Dedicated account manager for personalized support",
  "Secure, state-of-the-art financial systems",
];

export function AboutSection() {
  return (
    <section className="section bg-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateInView animation="slide-in-left" className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" 
                  alt="Accounting professionals" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 md:p-6 rounded-xl shadow-lg">
                <div className="text-3xl md:text-4xl font-bold">15+</div>
                <div className="text-sm md:text-base">Years Experience</div>
              </div>
            </div>
          </AnimateInView>
          
          <div className="order-1 md:order-2 space-y-6">
            <AnimateInView animation="fade-up">
              <div className="heading-with-line">
                <h2>Why Choose Us</h2>
              </div>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay="delay-100">
              <p className="text-lg text-muted-foreground">
                We're not just accountants – we're your financial partners. Our team combines expertise with a 
                personalized approach to deliver accounting services that truly make a difference for your business.
              </p>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay="delay-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay="delay-300">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 mt-4">
                Contact Us <ArrowRight size={18} />
              </Link>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  );
}
