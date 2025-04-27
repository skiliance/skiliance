
import { Helmet } from 'react-helmet';
import { Star } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTASection } from '@/components/home/CTA';
import { ScrollToTop } from '@/components/animations/ScrollToTop';
import { AnimateInView } from '@/components/animations/AnimateInView';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    content: "AcctFinance transformed our financial management. Their team's expertise and attention to detail have saved us countless hours and improved our financial clarity. They're not just service providers, they're partners in our success.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    industry: "Technology"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Founder, GreenEats",
    content: "As a restaurant owner, accounting was always a challenge until we found AcctFinance. Their industry-specific knowledge and proactive approach have helped us optimize our finances and focus on what we do best - serving great food.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    industry: "Food & Beverage"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Director, Global Imports",
    content: "Their expertise in international accounting has been invaluable for our import/export business. The team at AcctFinance handles our complex financial needs with professionalism and precision. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    industry: "Import/Export"
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Owner, Wilson Construction",
    content: "AcctFinance's understanding of the construction industry has made them an essential part of our business. Their payroll and project accounting services have streamlined our operations and improved our bottom line.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    industry: "Construction"
  },
  {
    id: 5,
    name: "Olivia Martinez",
    position: "CFO, HealthPlus",
    content: "The healthcare industry has complex accounting needs, and AcctFinance has consistently delivered exceptional service. Their team's knowledge of healthcare regulations and reimbursement structures has been particularly valuable to us.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200",
    industry: "Healthcare"
  },
  {
    id: 6,
    name: "James Thompson",
    position: "Managing Director, Thompson Manufacturing",
    content: "We've been working with AcctFinance for over five years, and they've become an integral part of our financial operations. Their manufacturing accounting expertise has helped us optimize our production costs and improve profitability.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
    industry: "Manufacturing"
  },
  {
    id: 7,
    name: "Sophia Williams",
    position: "Founder, Eco Solutions",
    content: "As a startup, finding the right accounting partner was crucial. AcctFinance not only provided excellent accounting services but also offered valuable financial advice that helped us secure our first round of funding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=200",
    industry: "Environmental"
  },
  {
    id: 8,
    name: "Robert Kim",
    position: "Director, Premier Properties",
    content: "Real estate accounting requires specialized knowledge, and AcctFinance delivers. Their expertise in property management accounting has helped us maximize tax benefits and improve our property portfolio performance.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200",
    industry: "Real Estate"
  },
];

const industries = Array.from(new Set(testimonials.map(t => t.industry)));

const Testimonials = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <Helmet>
        <title>Client Testimonials | AcctFinance</title>
        <meta name="description" content="Read what our clients say about our accounting services. Testimonials from businesses across various industries showcasing our expertise and quality service." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen w-full">
        {/* Testimonials Hero */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden w-full">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom text-center px-4">
            <AnimateInView animation="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                Client Testimonials
              </h1>
            </AnimateInView>
            
            <AnimateInView animation="fade-up" delay="delay-100">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                See what our clients have to say about our services and how we've helped 
                their businesses succeed through professional accounting solutions.
              </p>
            </AnimateInView>
          </div>
        </section>
        
        {/* Industry Sections */}
        <section className="py-12 md:py-16 w-full">
          <div className="container mx-auto px-4 md:px-6 w-full max-w-[2000px]">
            {industries.map((industry, industryIndex) => (
              <div key={industry} className="mb-12 md:mb-16 last:mb-0 w-full">
                <AnimateInView animation="fade-up">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 md:mb-10 heading-with-line">
                    {industry} Industry
                  </h2>
                </AnimateInView>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 w-full">
                  {testimonials
                    .filter(t => t.industry === industry)
                    .map((testimonial, index) => (
                      <AnimateInView 
                        key={testimonial.id} 
                        animation="fade-up" 
                        delay={`delay-${(index % 4) + 1}00`}
                      >
                        <Card className="h-full flex flex-col p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
                          <div className="flex items-center gap-1 mb-4 md:mb-6">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={isMobile ? 16 : 18} 
                                className={i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"} 
                              />
                            ))}
                          </div>
                          
                          <blockquote className="text-base md:text-lg mb-4 md:mb-6 flex-grow">
                            "{testimonial.content}"
                          </blockquote>
                          
                          <div className="flex items-center gap-3 md:gap-4 mt-auto">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                            />
                            <div>
                              <div className="font-semibold text-sm md:text-base">{testimonial.name}</div>
                              <div className="text-xs md:text-sm text-muted-foreground">{testimonial.position}</div>
                            </div>
                          </div>
                        </Card>
                      </AnimateInView>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Testimonial Stats */}
        <section className="py-12 md:py-16 bg-secondary w-full">
          <div className="container-custom px-4">
            <AnimateInView animation="fade-up">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">
                  Client Satisfaction
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                  We're proud of the positive impact we've made for our clients across various industries.
                </p>
              </div>
            </AnimateInView>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <AnimateInView animation="fade-up" delay="delay-100">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 md:mb-2">100%</div>
                  <div className="text-sm md:text-base text-muted-foreground">Client Retention Rate</div>
                </div>
              </AnimateInView>
              
              <AnimateInView animation="fade-up" delay="delay-200">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 md:mb-2">15+</div>
                  <div className="text-sm md:text-base text-muted-foreground">Years of Experience</div>
                </div>
              </AnimateInView>
              
              <AnimateInView animation="fade-up" delay="delay-300">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 md:mb-2">200+</div>
                  <div className="text-sm md:text-base text-muted-foreground">Happy Clients</div>
                </div>
              </AnimateInView>
              
              <AnimateInView animation="fade-up" delay="delay-400">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 md:mb-2">8+</div>
                  <div className="text-sm md:text-base text-muted-foreground">Industries Served</div>
                </div>
              </AnimateInView>
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

export default Testimonials;
