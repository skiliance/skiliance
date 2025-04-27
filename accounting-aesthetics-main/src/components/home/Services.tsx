
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Calculator, DollarSign, BarChart3 } from 'lucide-react';
import { AnimateInView } from '@/components/animations/AnimateInView';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping',
    description: 'Accurate and timely recording of financial transactions, ensuring your books are always up-to-date.',
    icon: FileText,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  },
  {
    id: 'tax',
    title: 'Tax Preparation',
    description: 'Comprehensive tax services to ensure compliance while maximizing deductions and minimizing liabilities.',
    icon: Calculator,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  },
  {
    id: 'payroll',
    title: 'Payroll Services',
    description: 'Hassle-free payroll processing, tax filing, and compliance management for businesses of all sizes.',
    icon: DollarSign,
    color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
  },
  {
    id: 'consulting',
    title: 'Financial Consulting',
    description: 'Strategic financial advice and planning to help you make informed decisions and achieve your goals.',
    icon: BarChart3,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  },
];

export function ServicesSection({ className }: { className?: string }) {
  return (
    <section id="services" className={cn("section", className)}>
      <div className="container-custom">
        <AnimateInView animation="fade-up">
          <div className="heading-with-line">
            <h2>Our Services</h2>
          </div>
        </AnimateInView>
        
        <AnimateInView animation="fade-up" delay="delay-100">
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            We offer a comprehensive range of accounting services to help your business thrive. 
            From basic bookkeeping to strategic financial consulting, our team has you covered.
          </p>
        </AnimateInView>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimateInView 
              key={service.id} 
              animation="fade-up" 
              delay={`delay-${index + 2}00`}
            >
              <div className="card-glass p-6 md:p-8 h-full flex flex-col">
                <div className={cn("p-3 rounded-full w-fit mb-6", service.color)}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <Link 
                  to={`/services#${service.id}`} 
                  className="group inline-flex items-center text-primary font-medium"
                >
                  Learn More 
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimateInView>
          ))}
        </div>
        
        <AnimateInView animation="fade-up" delay="delay-600">
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
