import { useState, useEffect } from 'react';
import { X } from "lucide-react";

const ResultsCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    // First row - 3 images
    { src: "/lovable-uploads/d8d83592-ab7e-4e04-9539-fa206a105911.png", alt: "YouTube Analytics 1" },
    { src: "/lovable-uploads/09083f1f-22fc-4e77-96ca-e48d72d101f4.png", alt: "YouTube Analytics 2" },
    { src: "/lovable-uploads/7555b7e1-1a62-4e47-a205-3fbcac16174c.png", alt: "Subscriber Growth" },
    
    // Second row - 3 images
    { src: "/lovable-uploads/7c89aa33-fddb-42d2-a780-3c564b13a8bd.png", alt: "Views Growth" },
    { src: "/lovable-uploads/ccc8f258-ae0b-4698-a236-6b94634dd4d3.png", alt: "YouTube Analytics 3" },
    { src: "/lovable-uploads/35681698-c182-43c1-af55-177e64e79f97.png", alt: "YouTube Analytics 4" },
    
    // Third row - 3 images
    { src: "/lovable-uploads/7479291b-a575-498a-9c61-abf958680c7b.png", alt: "Instagram Analytics 1" },
    { src: "/lovable-uploads/090837b4-59d2-4e11-bc82-cfb9f05f6ab2.png", alt: "Instagram Analytics 2" },
    { src: "/lovable-uploads/624e5383-eb53-4631-966f-0839e3cea563.png", alt: "Calls Booked Results" },
  ];

  const firstRowImages = images.slice(0, 3);
  const secondRowImages = images.slice(3, 6);
  const thirdRowImages = images.slice(6, 9);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const ImageRow = ({ images, direction = 'left' }: { images: typeof firstRowImages, direction?: 'left' | 'right' }) => (
    <div className="relative overflow-hidden">
      <div className={`flex space-x-4 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
        {/* Original images */}
        {images.map((image, index) => (
          <div 
            key={`original-${index}`}
            className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(image.src)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="h-80 w-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        ))}
        {/* Duplicate images for seamless loop */}
        {images.map((image, index) => (
          <div 
            key={`duplicate-${index}`}
            className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(image.src)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="h-80 w-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="w-full space-y-6">
        {/* First Row - 3 images scrolling left */}
        <ImageRow images={firstRowImages} direction="left" />
        
        {/* Second Row - 3 images scrolling right */}
        <ImageRow images={secondRowImages} direction="right" />
        
        {/* Third Row - 3 images scrolling left */}
        <ImageRow images={thirdRowImages} direction="left" />
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
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default ResultsCarousel;