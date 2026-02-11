
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link 
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold text-foreground"
            >
              <span className="text-primary">Skiliance</span>
              {/* <span>Finance</span> */}
            </Link>
            <p className="text-muted-foreground">
              Professional accounting services tailored to your business needs. We handle the numbers so you can focus on growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/919468795191?text=Hello%20I%20want%20to%20contact%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16.2 13.8c-.2.5-.8 1-1.2 1.2-.4.2-.7.2-1.1 0-.4-.2-1-.5-1.6-.9-.6-.4-1.3-.9-1.6-1.2-.2-.2-.4-.4-.3-.8.1-.4.4-.8.6-1 .2-.2.3-.4.5-.6.1-.2.1-.4 0-.6-.1-.2-.6-1-1-1.4-.3-.4-.6-.3-.9-.3-.3 0-.6 0-.9 0-.3 0-.7.1-1 .5-.3.4-1 1.4-1 2.8 0 1.3 1 3.2 2.3 4.8 1.3 1.6 3 2.7 4.4 3 1.2.3 2.1.3 2.8.1.7-.2 1.9-.8 2.3-1.4.4-.6.4-1.1.3-1.4-.1-.3-.4-.5-.6-.6z" />
                </svg>
              </a>
              <a
                href="https://x.com/Skiliance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="X"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/skiliance?igsh=MTI5a3ZsdG9pMXByZw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/skiliance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#bookkeeping" className="text-muted-foreground hover:text-primary transition-colors">
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link to="/services#tax" className="text-muted-foreground hover:text-primary transition-colors">
                  Tax Preparation
                </Link>
              </li>
              <li>
                <Link to="/services#payroll" className="text-muted-foreground hover:text-primary transition-colors">
                  Payroll Services
                </Link>
              </li>
              <li>
                <Link to="/services#consulting" className="text-muted-foreground hover:text-primary transition-colors">
                  Financial Consulting
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">India, Rajasthan<br />Udaipur 313002</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a href="tel:+919468795191" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 9468795191
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:contact@skiliance.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@skiliance.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} skiliance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
