import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FacebookIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-pink-200 text-foreground py-20 px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="space-y-6">
            <h3 className="text-xl font-headline font-bold text-foreground uppercase tracking-wide">
              Postres Artesanales
            </h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Delicias hechas con amor y los mejores ingredientes.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-body font-bold text-foreground uppercase tracking-widest">
              Navegación
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-body font-bold text-foreground uppercase tracking-widest">
              Contacto
            </h4>
            <div className="space-y-3">
              <p className="text-sm font-body text-muted-foreground">
                +57 310 4823248
              </p>
            </div>
            <div className="flex pt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61580819432444&rdid=qjYs9zetMYAHyVtR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FPWPsZKbt%2F#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-foreground text-white flex items-center justify-center hover:bg-foreground/80 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground/20 text-center">
          <p className="text-sm font-body text-muted-foreground">
            © 2025 MiPostre. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
