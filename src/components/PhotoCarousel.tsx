import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import foto1 from "@/assets/carousel/foto1.png";
import foto2 from "@/assets/carousel/foto2.png";
import foto3 from "@/assets/carousel/foto3.png";

const PhotoCarousel = () => {
  const images = [
    { src: foto1, alt: "GlowBuddy foto 1" },
    { src: foto2, alt: "GlowBuddy foto 2" },
    { src: foto3, alt: "GlowBuddy foto 3" },
  ];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <Carousel
            className="w-full"
            opts={{ loop: true }}
            setApi={(api: CarouselApi) => {
              let intervalId: number | undefined;

              const start = () => {
                if (intervalId) window.clearInterval(intervalId);
                intervalId = window.setInterval(() => {
                  api.scrollNext();
                }, 5000);
              };

              const stop = () => {
                if (intervalId) window.clearInterval(intervalId);
                intervalId = undefined;
              };

              start();
              api.on("pointerDown", stop);
              api.on("pointerUp", start);
              api.on("reInit", start);
              api.on("destroy", stop);
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="w-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[540px] md:h-[940px] object-cover rounded-xl shadow-xl"
                      loading="lazy"
                      width={1000}
                      
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 md:-left-6 bg-glow-green text-night-blue hover:bg-glow-pink hover:text-night-blue" />
            <CarouselNext className="-right-3 md:-right-6 bg-glow-green text-night-blue hover:bg-glow-pink hover:text-night-blue" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;


