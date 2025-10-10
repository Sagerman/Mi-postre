import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

interface PromoBannerProps {
  text: string;
  ctaText: string;
  onCtaClick: () => void;
  imageSrc: string;
}

export function PromoBanner({ text, ctaText, onCtaClick, imageSrc }: PromoBannerProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current && imageRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
      );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 0.2 }
      );
    }
  }, []);

  return (
    <div className="relative overflow-hidden bg-pink-200 py-0">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
        <div className="px-6 md:px-16 lg:px-24 py-16 md:py-24 space-y-6 md:space-y-8">
          <p
            ref={textRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground uppercase tracking-wide leading-tight"
          >
            {text}
          </p>
          <div className="space-y-3 md:space-y-4">
            <p className="text-xs md:text-sm font-body text-foreground uppercase tracking-widest">
              LOS FAVORITOS DE LA CASA
            </p>
            <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed max-w-md">
              Descubre la combinación perfecta de texturas y sabores en nuestros postres más pedidos. Hechos cada día con los ingredientes más frescos para ti.
            </p>
          </div>
          <Button
            size="lg"
            onClick={onCtaClick}
            className="bg-beige-400 text-foreground hover:bg-beige-500 transition-all duration-300 ease-in-out px-8 md:px-10 py-6 md:py-7 text-xs md:text-sm font-body font-medium uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl"
          >
            {ctaText}
          </Button>
        </div>
        <div ref={imageRef} className="relative h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          <img
            src={imageSrc}
            alt="Special desserts"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );

}
