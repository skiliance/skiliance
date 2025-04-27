
import { Helmet } from 'react-helmet';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  FileText, 
  Calculator, 
  DollarSign, 
  BarChart3,
  Briefcase,
  FileCheck,
  TrendingUp,
  Shield
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTASection } from '@/components/home/CTA';
import { ScrollToTop } from '@/components/animations/ScrollToTop';
import { AnimateInView } from '@/components/animations/AnimateInView';

const services = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping',
    description: 'Our comprehensive bookkeeping services ensure your financial records are accurate, organized, and up-to-date.',
    icon: FileText,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    features: [
      'Transaction recording and categorization',
      'Bank and credit card reconciliation',
      'Accounts receivable and payable management',
      'Monthly financial statement preparation',
      'Year-end closing and reporting',
      'Cloud-based accounting system setup'
    ]
  },
  {
    id: 'tax',
    title: 'Tax Preparation',
    description: 'Stay compliant and minimize your tax burden with our expert tax preparation and planning services.',
    icon: Calculator,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    features: [
      'Business and individual tax return preparation',
      'Quarterly estimated tax payments',
      'Tax planning and strategy',
      'IRS representation',
      'Sales tax compliance',
      'International tax considerations'
    ]
  },
  {
    id: 'payroll',
    title: 'Payroll Services',
    description: 'Simplify your payroll process with our accurate, timely, and compliant payroll management services.',
    icon: DollarSign,
    color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    features: [
      'Payroll processing and direct deposit',
      'Tax withholding and filing',
      'Year-end W-2 and 1099 preparation',
      'Employee self-service portal',
      'Time and attendance tracking',
      'Benefits administration'
    ]
  },
  {
    id: 'consulting',
    title: 'Financial Consulting',
    description: 'Gain valuable insights and strategic guidance to improve your financial performance and achieve your goals.',
    icon: BarChart3,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    features: [
      'Financial analysis and forecasting',
      'Cash flow management',
      'Budget development and monitoring',
      'Profit improvement strategies',
      'Business plan development',
      'Financial software selection and implementation'
    ]
  },
  {
    id: 'cfos',
    title: 'CFO Services',
    description: 'Get the expertise of a Chief Financial Officer without the full-time expense, tailored to your business needs.',
    icon: Briefcase,
    color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    features: [
      'Strategic financial planning',
      'Financial risk assessment',
      'Investment analysis',
      'Board and investor reporting',
      'Mergers and acquisitions support',
      'Debt and equity financing assistance'
    ]
  },
  {
    id: 'compliance',
    title: 'Compliance Services',
    description: 'Ensure your business meets all financial regulations and requirements with our compliance services.',
    icon: FileCheck,
    color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    features: [
      'Regulatory compliance reviews',
      'Internal controls assessment',
      'Financial statement audits',
      'Industry-specific compliance',
      'Policy and procedure development',
      'Compliance training'
    ]
  },
  {
    id: 'startup',
    title: 'Startup Services',
    description: 'Special accounting and financial services designed to help startups establish solid financial foundations.',
    icon: TrendingUp,
    color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
    features: [
      'Entity structure selection',
      'Initial accounting setup',
      'Funding preparation',
      'Burn rate analysis',
      'Investor financial reporting',
      'Growth planning and scaling'
    ]
  },
  {
    id: 'audit',
    title: 'Audit & Assurance',
    description: 'Independent verification of financial information to enhance credibility and identify areas for improvement.',
    icon: Shield,
    color: 'bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400',
    features: [
      'Financial statement audits',
      'Internal audit services',
      'Fraud investigation',
      'Agreed-upon procedures',
      'Due diligence reviews',
      'Compliance audits'
    ]
  }
];

const Services = () => {
  const location = useLocation();
  const refs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  useEffect(() => {
    // Scroll to the section if there's a hash in the URL
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = refs.current[id];
      if (element) {
        const navbarHeight = 80; // Approximate navbar height
        const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location]);
  
  return (
    <>
      <Helmet>
        <title>Our Services | AcctFinance</title>
        <meta name="description" content="Explore our comprehensive accounting services including bookkeeping, tax preparation, payroll management, and financial consulting." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Services Hero */}
        <section className="pt-32 pb-16 md:pb-24 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom text-center">
            <AnimateInView animation="fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Services
              </h1>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay="delay-100">
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                We offer comprehensive accounting solutions to businesses of all sizes.
                Our services are designed to help you focus on growth while we take care of your financial management.
              </p>
            </AnimateInView>
          </div>
        </section>
        
        {/* Services List */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-16 md:gap-24">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id} 
                  ref={(el) => (refs.current[service.id] = el)}
                  className="scroll-mt-24"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <AnimateInView animation="fade-up">
                      <div>
                        <div className={`p-3 rounded-full w-fit mb-6 ${service.color}`}>
                          <service.icon size={24} />
                        </div>
                        <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                          {service.description}
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AnimateInView>
                    
                    <AnimateInView animation="fade-up" delay="delay-100">
                      <div className="relative">
                        <div className="absolute inset-0 -z-10">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl" />
                        </div>
                        <div className="card-glass p-6 md:p-8 aspect-[4/3] flex items-center justify-center">
                          <img 
                            src={`https://images.unsplash.com/photo-${1550565118 + index * 50000}?auto=format&fit=crop&q=80&w=800`}
                            alt={`${service.title} service illustration`}
                            className="rounded-lg max-w-full max-h-full object-cover"
                          />
                        </div>
                      </div>
                    </AnimateInView>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Services;
