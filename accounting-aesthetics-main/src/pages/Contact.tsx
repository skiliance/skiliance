
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Check,
  Loader2
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/animations/ScrollToTop';
import { AnimateInView } from '@/components/animations/AnimateInView';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      // Construct mailto URL with form data
      const subject = encodeURIComponent(`Website Inquiry: ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`
      );
      
      // Open default email client with pre-filled data
      window.location.href = `mailto:contact@acctfinance.com?subject=${subject}&body=${body}`;
      
      // Show success toast
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond to your inquiry shortly.",
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (234) 567-8900', '+1 (234) 567-8901'],
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['contact@acctfinance.com', 'support@acctfinance.com'],
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Finance Street, Suite 400', 'New York, NY 10001'],
      color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Friday: 9am - 5pm', 'Saturday: 10am - 2pm'],
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    },
  ];
  
  const services = [
    { value: '', label: 'Select a service' },
    { value: 'Bookkeeping', label: 'Bookkeeping' },
    { value: 'Tax Preparation', label: 'Tax Preparation' },
    { value: 'Payroll Services', label: 'Payroll Services' },
    { value: 'Financial Consulting', label: 'Financial Consulting' },
    { value: 'CFO Services', label: 'CFO Services' },
    { value: 'Compliance Services', label: 'Compliance Services' },
    { value: 'Other', label: 'Other' },
  ];
  
  return (
    <>
      <Helmet>
        <title>Contact Us | AcctFinance</title>
        <meta name="description" content="Get in touch with our accounting team for inquiries, quotes, or to schedule a consultation. We're here to help with all your accounting needs." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Contact Hero */}
        <section className="pt-32 pb-16 md:pb-24 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom text-center">
            <AnimateInView animation="fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Contact Us
              </h1>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay="delay-100">
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions or ready to get started? Reach out to our team of accounting professionals.
                We're here to help you with all your financial needs.
              </p>
            </AnimateInView>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <AnimateInView 
                  key={index} 
                  animation="fade-up" 
                  delay={`delay-${index + 1}00`}
                >
                  <div className="card-glass p-6 text-center h-full">
                    <div className={`mx-auto p-3 rounded-full w-fit mb-4 ${info.color}`}>
                      <info.icon size={24} />
                    </div>
                    <h3 className="text-lg font-semibold mb-4">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className={i === 0 ? "mb-1" : ""}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="py-16 bg-secondary">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimateInView animation="fade-up">
                <div>
                  <div className="heading-with-line">
                    <h2>Get In Touch</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8">
                    Fill out the form below to send us a message. Our team will get back to you within 
                    24 hours to discuss your accounting needs.
                  </p>
                  <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48371.15911986212!2d-74.01358333765856!3d40.71275503659586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sWall%20Street%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1647885588456!5m2!1sen!2sca" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      title="Office Location"
                    ></iframe>
                  </div>
                </div>
              </AnimateInView>
              
              <AnimateInView animation="fade-up" delay="delay-200">
                <div className="card-glass p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Service Interested In
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        >
                          {services.map((service) => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                        placeholder="Tell us about your accounting needs..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="btn-primary w-full flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Sending...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <Check size={20} />
                          Message Sent
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </AnimateInView>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container-custom">
            <AnimateInView animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Find answers to common questions about our accounting services.
                </p>
              </div>
            </AnimateInView>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AnimateInView animation="fade-up" delay="delay-100">
                <div className="card-glass p-6">
                  <h3 className="text-xl font-semibold mb-3">What industries do you serve?</h3>
                  <p className="text-muted-foreground">
                    We serve a wide range of industries including technology, healthcare, construction, manufacturing, 
                    real estate, food & beverage, retail, and professional services.
                  </p>
                </div>
              </AnimateInView>
              
              <AnimateInView animation="fade-up" delay="delay-200">
                <div className="card-glass p-6">
                  <h3 className="text-xl font-semibold mb-3">How quickly can you respond to inquiries?</h3>
                  <p className="text-muted-foreground">
                    We typically respond to all inquiries within 24 business hours. For urgent matters, 
                    please call our office directly for immediate assistance.
                  </p>
                </div>
              </AnimateInView>
              
              <AnimateInView animation="fade-up" delay="delay-300">
                <div className="card-glass p-6">
                  <h3 className="text-xl font-semibold mb-3">Do you offer virtual consultations?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer both in-person and virtual consultations to accommodate your preferences 
                    and schedule. Our virtual meetings are conducted securely via video conferencing.
                  </p>
                </div>
              </AnimateInView>
              
              <AnimateInView animation="fade-up" delay="delay-400">
                <div className="card-glass p-6">
                  <h3 className="text-xl font-semibold mb-3">How are your services priced?</h3>
                  <p className="text-muted-foreground">
                    Our pricing depends on the specific services you need and the complexity of your financial situation. 
                    We offer customized packages and will provide a detailed quote after an initial consultation.
                  </p>
                </div>
              </AnimateInView>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ContactPage;
