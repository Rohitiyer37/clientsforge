import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

const ResultsCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/lovable-uploads/0b35a267-7579-4049-bde7-bcbb8a2395d7.png", alt: "Calls Booked Results" },
    { src: "/lovable-uploads/e6569732-c0a6-46c2-b347-bb352c3a2e4a.png", alt: "Instagram Analytics 1" },
    { src: "/lovable-uploads/51dd9a2b-7669-4c8f-b5da-b07b7f299dc3.png", alt: "Instagram Analytics 2" },
    { src: "/lovable-uploads/5f50fe35-9cba-4a96-ab31-976564b47edd.png", alt: "YouTube Analytics 1" },
    { src: "/lovable-uploads/74314ac1-eceb-41f0-ae27-fee4ba21ea0d.png", alt: "YouTube Analytics 2" },
    { src: "/lovable-uploads/452d6a45-355c-454e-bc61-4a1abeb1b7e3.png", alt: "YouTube Analytics 3" },
    { src: "/lovable-uploads/1d753d58-5480-4a40-a24a-6f4feb940321.png", alt: "YouTube Analytics 4" },
    { src: "/lovable-uploads/55dfa06f-b924-43b8-adb5-f6f19243378d.png", alt: "YouTube Analytics 5" },
    { src: "/lovable-uploads/ab98ef21-ad07-4633-a7cf-c51169342d29.png", alt: "YouTube Analytics 6" },
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4 animate-scroll">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div 
                  className="cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-contain rounded shadow-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <img 
              src={selectedImage} 
              alt="Result preview"
              className="w-full h-full object-contain rounded"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default ResultsCarousel;