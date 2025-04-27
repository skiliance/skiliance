
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { AnimateInView } from '@/components/animations/AnimateInView';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    content: "AcctFinance transformed our financial management. Their team's expertise and attention to detail have saved us countless hours and improved our financial clarity. They're not just service providers, they're partners in our success.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Founder, GreenEats",
    content: "As a restaurant owner, accounting was always a challenge until we found AcctFinance. Their industry-specific knowledge and proactive approach have helped us optimize our finances and focus on what we do best - serving great food.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Director, Global Imports",
    content: "Their expertise in international accounting has been invaluable for our import/export business. The team at AcctFinance handles our complex financial needs with professionalism and precision. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Owner, Wilson Construction",
    content: "AcctFinance's understanding of the construction industry has made them an essential part of our business. Their payroll and project accounting services have streamlined our operations and improved our bottom line.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
];

export function TestimonialsSection({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  
  const nextSlide = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className={cn("section relative overflow-hidden py-12 md:py-24", className)}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom px-4 w-full">
        <AnimateInView animation="fade-up">
          <div className="heading-with-line mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl">Client Testimonials</h2>
          </div>
        </AnimateInView>
        
        <AnimateInView animation="fade-up" delay="delay-100">
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-8 md:mb-12">
            Don't just take our word for it – hear what our clients have to say about 
            our accounting services and how we've helped their businesses thrive.
          </p>
        </AnimateInView>
        
        <div className="relative w-full">
          <div className="overflow-hidden relative w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full px-2 sm:px-4"
                >
                  <div className="card-glass p-6 md:p-8 lg:p-10 max-w-4xl mx-auto">
                    <div className="flex items-center gap-1 mb-4 md:mb-6">
                      {[...Array(5)].map((_, index) => (
                        <Star 
                          key={index} 
                          size={isMobile ? 16 : 18} 
                          className={index < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <blockquote className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 italic line-clamp-6 md:line-clamp-none">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center gap-3 md:gap-4">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center mt-6 md:mt-8 gap-3 md:gap-4">
            <button 
              onClick={prevSlide}
              className="p-1.5 md:p-2 rounded-full bg-secondary text-foreground hover:bg-primary/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={isMobile ? 18 : 20} />
            </button>
            
            <div className="flex gap-1.5 md:gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 md:h-2.5 rounded-full transition-all",
                    index === activeIndex ? "bg-primary w-6 md:w-8" : "bg-primary/30 w-2 md:w-2.5"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-1.5 md:p-2 rounded-full bg-secondary text-foreground hover:bg-primary/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={isMobile ? 18 : 20} />
            </button>
          </div>
        </div>
        
        <AnimateInView animation="fade-up" delay="delay-200">
          <div className="text-center mt-8 md:mt-12">
            <Link to="/testimonials" className="btn-outline text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
              View All Testimonials
            </Link>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
