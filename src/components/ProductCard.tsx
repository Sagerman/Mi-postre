import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  index: number;
}

export function ProductCard({
  title,
  description,
  imageSrc,
  imageAlt,
  price,
  index,
}: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, [index]);

  return (
    <div ref={cardRef} className="mb-6 md:mb-8">
      <Card className="overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:-translate-y-2 bg-white border-0 shadow-md hover:shadow-2xl rounded-2xl md:rounded-3xl">
        <div className="bg-beige-100 flex items-center justify-center p-6 md:p-12">
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="w-full h-56 md:h-72 object-cover rounded-xl md:rounded-2xl transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
        <div className="p-6 md:p-8 text-center space-y-3 md:space-y-4">
          <h3 className="text-sm md:text-base font-body font-semibold text-foreground uppercase tracking-widest">
            {title}
          </h3>
          <p className="text-xs md:text-sm font-body text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="text-2xl md:text-3xl font-headline font-bold text-foreground pt-2">
            {price} <span className="text-xs md:text-sm font-body font-normal text-muted-foreground">/Unidad</span>
          </div>
        </div>
      </Card>
    </div>
  );

}
