import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TestimonialSectionProps {
  quote: string;
}

export function TestimonialSection({ quote }: TestimonialSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative py-32 px-8 bg-pink-50 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p
          ref={quoteRef}
          className="text-2xl sm:text-3xl md:text-4xl font-headline font-semibold text-foreground italic leading-relaxed"
        >
          "{quote}"
        </p>
      </div>
    </div>
  );
}
