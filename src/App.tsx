import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroVideo } from '@/components/HeroVideo';
import { SectionWrapper } from '@/components/SectionWrapper';
import { TextImageSection } from '@/components/TextImageSection';
import { ProductCard } from '@/components/ProductCard';
import { PromoBanner } from '@/components/PromoBanner';
import { Footer } from '@/components/Footer';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOrderClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const products = [
    {
      title: 'DELICIA DE MARACUYÁ',
      description:
        'Delicioso postre con el sabor tropical y refrescante de la maracuyá. ¡El equilibrio perfecto entre dulce y cítrico!',
      imageSrc: 'https://c.animaapp.com/mgkabcqm63FPzV/img/imagen-de-whatsapp-2025-10-09-a-las-16-06-20_0e5bd806.jpg',
      imageAlt: 'postre maracuya',
      price: '7.000 cop',
    },
    {
      title: 'SUEÑO DE OREO',
      description:
        'Postre cremoso con trozos de la galleta favorita de todos. Una combinación irresistible para los amantes del chocolate.',
      imageSrc: 'https://c.animaapp.com/mgkw91tcxAEJpQ/img/imagen-de-whatsapp-2025-10-09-a-las-16-06-21_0ef4c60d.jpg',
      imageAlt: 'postre oreo',
      price: '7.000 cop',
    },
    {
      title: 'FRESCURA CÍTRICA',
      description:
        'Un postre refrescante y vibrante con capas de galleta, crema de limón y un toque cítrico que deleitará tu paladar.',
      imageSrc: 'https://c.animaapp.com/mgkxzd9x3VEmpJ/img/imagen-de-whatsapp-2025-10-09-a-las-16-06-20_59b8350e.jpg',
      imageAlt: 'postre de limón',
      price: '7.000 cop',
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />

      <main>
        <div id="hero">
          <HeroVideo
            videoSrc="https://c.animaapp.com/mgiuas7c5KZqRW/img/ai_1.mp4"
            posterImageUrl="https://c.animaapp.com/mgiuas7c5KZqRW/img/ai_1-poster.png"
            altTag="video postres maracuya oreo"
            headline="Un Bocado de Felicidad."
            subText="Delicias artesanales de maracuyá y oreo."
            ctaText="Pide Ahora"
            onCtaClick={handleOrderClick}
          />
        </div>

        <SectionWrapper id="about" className="bg-cream-100">
          <TextImageSection
            title="Nuestras Creaciones"
            description="Cada postre de MiPostre es una obra de arte, elaborado artesanalmente con pasión y dedicación. Seleccionamos cuidadosamente los ingredientes más frescos y de la más alta calidad para garantizarte no solo un sabor excepcional, sino también una experiencia inolvidable en cada bocado."
            imageSrc="https://c.animaapp.com/mgiuas7c5KZqRW/img/imagen-de-whatsapp-2025-10-09-a-las-16-06-20_59b8350e.jpg"
            imageAlt="Postre artesanal de limón"
            imagePosition="right"
          />
        </SectionWrapper>


        <SectionWrapper id="products" className="bg-white">
          <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground uppercase tracking-wide">
              Nuestros Postres Estrella
            </h2>
            <p className="text-sm md:text-base font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cada postre es elaborado artesanalmente con ingredientes frescos y de la más alta calidad para ofrecerte una experiencia inolvidable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                price={product.price}
                index={index}
              />
            ))}
          </div>
        </SectionWrapper>

        <div id="promo">
          <PromoBanner
            text="NUESTROS SABORES ESTRELLA"
            ctaText="REALIZA TU PEDIDO"
            onCtaClick={handleOrderClick}
            imageSrc="https://c.animaapp.com/mgkxzd9x3VEmpJ/img/gemini_generated_image_z8wmhzz8wmhzz8wm.png"
          />
        </div>

        <SectionWrapper id="contact" className="bg-cream-50">
          <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground uppercase tracking-wide">
              ¿Listo para probar?
            </h2>
            <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed">
              Contáctanos para hacer tu pedido o visítanos en nuestras redes sociales.
            </p>
            <div className="space-y-4 md:space-y-6 pt-6 md:pt-8">
              <p className="text-sm md:text-base font-body text-foreground">
                <strong>Teléfono:</strong> +57 310 4823248
              </p>
              <a
                href="https://wa.me/573104823248?text=Hola%2C%20quiero%20ordenar%20un%20postre%20por%20favor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-body font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base uppercase tracking-wider"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                ¡PIDE EL TUYO!
              </a>
            </div>
          </div>
        </SectionWrapper>


        <Footer />
      </main>
    </div>
  );
}

export default App;
