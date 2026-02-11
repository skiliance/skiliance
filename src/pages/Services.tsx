
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
  Shield,
  Code
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTASection } from '@/components/home/CTA';
import { ScrollToTop } from '@/components/animations/ScrollToTop';
import { AnimateInView } from '@/components/animations/AnimateInView';

const serviceImages = [
  '/images/services/pexels-artempodrez-6779567.jpg',
  '/images/services/pexels-cottonbro-6862457.jpg',
  '/images/services/pexels-kunitsky-210990.jpg',
  '/images/services/pexels-leeloothefirst-8962520.jpg',
  '/images/services/pexels-leeloothefirst-8962521.jpg',
  '/images/services/pexels-mikhail-nilov-8297053.jpg',
  '/images/services/pexels-pixabay-164686.jpg',
  '/images/services/pexels-tara-winstead-7111561.jpg',
  '/images/services/rear-view-programmer-working-all-night-long.jpg'
];

const services = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & Accounting',
    description: 'We provide comprehensive accounting support to businesses across Australia, UAE, UK, and the US, ensuring accuracy, compliance, and timely financial reporting.',
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
    id: 'taxation',
    title: 'Tax Preparation',
    description: 'Our taxation services are designed to ensure full regulatory compliance while minimizing risk and maintaining accurate reporting standards',
    icon: Calculator,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    features: [
      'Individual and business tax return preparation',
      'BAS & GST preparation (Australia)',
      'VAT return preparation (UAE)',
      'Corporate tax support',
      'Tax documentation review',
      'Regulatory correspondence assistance'
    ]
  },
  {
    id: 'tax',
    title: 'Back-Office Support',
    description: 'We deliver structured operational support that improves efficiency and allows businesses to focus on growth and client service.',
    icon: Calculator,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    features: [
      'Administrative process support',
      'Invoice and billing management',
      'CRM administration',
      'Documentation management',
      'Reporting and data organization',
      'Virtual executive assistance'
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
    title: 'Sales & Customer Support Services',
    description: 'Our customer engagement team helps businesses enhance client relationships and drive revenue growth through structured communication support.',
    icon: BarChart3,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    features: [
      'Inbound and outbound customer communication',
      'Lead qualification and follow-ups',
      'Appointment scheduling',
      'Client relationship management support',
      'Sales coordination assistance',
      'Customer service operations'
    ]
  },
  {
    id: 'cfos',
    title: 'Insurance Back-Office Support',
    description: 'We provide specialized operational support services for insurance agencies and brokers in the US market. Our team helps streamline administrative tasks, improve efficiency, and enhance client service for insurance professionals.',
    icon: Briefcase,
    color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    features: [
      'Policy processing support',
      'Claims documentation assistance',
      'Underwriting support coordination',
      'Compliance documentation review',
      'CRM and policy management updates',
      'Client onboarding assistance'
    ]
  },
  {
    id: 'compliance',
    title: 'Business Process Outsourcing (BPO) Solutions',
    description: 'End-to-end remote staffing solutions tailored to your business requirements.',
    icon: FileCheck,
    color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    features: [
      'Dedicated offshore staff model',
      'Process outsourcing support',
      'Operational workflow management',
      'Data management and reporting',
      'Business support services',
      'Customized outsourcing solutions'
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
  },
  {
    id: 'development',
    title: 'Software Development Services',
    description: 'Custom software development and engineering solutions designed to build robust, scalable applications tailored to your business needs. built by ronrevv',
    icon: Code,
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    features: [
      'Full-stack web application development',
      'Mobile app development (iOS & Android)',
      'API design and integration',
      'Database architecture and optimization',
      'Cloud infrastructure setup',
      'Ongoing maintenance and technical support'
    ]
  },
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
        <title>Our Services | skiliance</title>
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
                        <div className="card-glass aspect-[4/3] flex items-center justify-center overflow-hidden">
                          <img
                            src={serviceImages[index]}
                            alt={`${service.title} service illustration`}
                            className="w-full h-full object-cover"
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
