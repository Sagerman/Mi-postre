import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextImageSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
}

export function TextImageSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
}: TextImageSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current && imageRef.current) {
      gsap.fromTo(
        [textRef.current, imageRef.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
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
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center ${
        imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div
        ref={textRef}
        className={`${imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'} space-y-4 md:space-y-6`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground uppercase tracking-wide leading-tight">
          {title}
        </h2>
        <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div
        ref={imageRef}
        className={`${imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="w-full h-auto rounded-2xl md:rounded-3xl object-cover shadow-xl"
        />
      </div>
    </div>

  );
}
