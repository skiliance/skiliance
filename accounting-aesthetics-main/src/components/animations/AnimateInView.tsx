
import { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateInViewProps {
  children: ReactNode;
  animation: 'fade-in' | 'fade-up' | 'slide-in-right' | 'slide-in-left' | 'zoom-in' | 'blur-in';
  threshold?: number;
  delay?: string;
  className?: string;
  once?: boolean;
}

export function AnimateInView({ 
  children, 
  animation, 
  threshold = 0.1, 
  delay = '', 
  className = '',
  once = true
}: AnimateInViewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  return (
    <div 
      ref={ref} 
      className={cn(
        isVisible ? `animate-${animation} ${delay}` : 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
}
