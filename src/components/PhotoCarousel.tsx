import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import foto1 from "@/assets/carousel/foto1.png";
import foto2 from "@/assets/carousel/foto2.png";
import foto3 from "@/assets/carousel/foto3.png";
import foto4 from "@/assets/carousel/foto4.png";

const PhotoCarousel = () => {
  const images = [
    { src: foto1, alt: "GlowBuddy foto 1" },
    { src: foto2, alt: "GlowBuddy foto 2" },
    { src: foto3, alt: "GlowBuddy foto 3" },
    { src: foto4, alt: "GlowBuddy foto 4" },
  ];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <Carousel
            className="w-full"
            opts={{ loop: true }}
            setApi={(api: CarouselApi) => {
              // Basic autoplay without external plugin
              // Recreate interval on reInit
              const setupAutoplay = () => {
                // Clear any previous interval stored on api as a property
                // @ts-expect-error - augmenting instance with a private field
                if (api && api.__autoplayInterval) clearInterval(api.__autoplayInterval);
                // @ts-expect-error - augmenting instance with a private field
                api.__autoplayInterval = setInterval(() => {
                  api.scrollNext();
                }, 5000);
              };

              setupAutoplay();
              api.on("reInit", setupAutoplay);
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="w-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[520px] md:h-[900px] object-cover rounded-xl shadow-xl"
                      loading="lazy"
                      width={1000}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 md:-left-6" />
            <CarouselNext className="-right-3 md:-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;


