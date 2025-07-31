import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

const ResultsCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/lovable-uploads/9ee4174e-ae21-4411-9484-f1bf5200f51a.png", alt: "200+ Calls Booked Results" },
    { src: "/lovable-uploads/3e209ade-6f80-4602-9c3e-6ffd443260a4.png", alt: "Instagram Analytics 1" },
    { src: "/lovable-uploads/979356f6-1da8-42f1-bcd1-66b585163174.png", alt: "Instagram Analytics 2" },
    { src: "/lovable-uploads/ddc3013b-b0e8-46c8-851e-566727400b35.png", alt: "YouTube Analytics 1" },
    { src: "/lovable-uploads/4dd367c3-bfdc-40db-94c4-12e97db07edc.png", alt: "YouTube Analytics 2" },
    { src: "/lovable-uploads/98ef5a7e-efba-413e-b821-8c1c7e3560c8.png", alt: "YouTube Analytics 3" },
    { src: "/lovable-uploads/57c79ba0-4e97-4ddb-868f-bd1ce97ea211.png", alt: "YouTube Analytics 4" },
    { src: "/lovable-uploads/3e9fc74a-1d3e-47ac-a88d-f4a8cb90e580.png", alt: "YouTube Analytics 5" },
    { src: "/lovable-uploads/4827a4f1-03d2-45d6-8d8f-821eaa48ea7b.png", alt: "YouTube Analytics 6" },
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
                    className="w-full h-48 object-cover rounded shadow-lg"
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