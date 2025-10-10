import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

interface HeroVideoProps {
  videoSrc: string;
  posterImageUrl: string;
  altTag: string;
  headline: string;
  subText: string;
  ctaText: string;
  onCtaClick: () => void;
}

export function HeroVideo({
  videoSrc,
  posterImageUrl,
  altTag,
  headline,
  subText,
  ctaText,
  onCtaClick,
}: HeroVideoProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (headlineRef.current && ctaRef.current && imageRef.current) {
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        0.3
      )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          0.8
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' },
          0.5
        );
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-pink pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      <div className="w-full h-full flex items-center justify-center min-h-screen">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-20 items-center py-8 sm:py-12 md:py-12 lg:py-16">
            <div ref={contentRef} className="relative z-20 text-center md:text-center lg:text-left space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-10 md:pl-0 lg:pl-8 flex flex-col items-center lg:items-start lg:col-span-1 md:col-span-1">
              <h1
                ref={headlineRef}
                className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl font-headline font-bold text-foreground tracking-tight leading-[1.1]"
              >
                Un Bocado de<br />
                <span className="italic font-normal">Felicidad.</span>
              </h1>

              <div ref={ctaRef} className="pt-2 md:pt-3 lg:pt-4">
                <Button
                  size="lg"
                  onClick={onCtaClick}
                  className="bg-white text-foreground hover:bg-white/90 hover:scale-105 transition-all duration-300 ease-in-out px-8 sm:px-10 md:px-10 lg:px-12 py-6 sm:py-7 md:py-6 lg:py-8 text-sm sm:text-base font-body font-semibold uppercase tracking-widest rounded-full border-2 border-foreground shadow-2xl hover:shadow-3xl"
                >
                  Pide Ahora
                </Button>
              </div>

              <div ref={imageRef} className="relative z-20 flex items-center justify-center mt-8 md:mt-12 lg:hidden w-full">
                <div className="relative w-full max-w-xs sm:max-w-md">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://c.animaapp.com/mgiuas7c5KZqRW/img/imagen-de-whatsapp-2025-10-09-a-las-16-06-19_8cc8e87f.jpg"
                      alt="Tarta de maracuyá"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-20 hidden lg:flex items-center justify-center md:pr-8">
              <div className="relative w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-lg xl:max-w-xl md:ml-4">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://c.animaapp.com/mgiuas7c5KZqRW/img/imagen-de-whatsapp-2025-10-09-a-las-16-06-19_8cc8e87f.jpg"
                    alt="Tarta de maracuyá"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}
