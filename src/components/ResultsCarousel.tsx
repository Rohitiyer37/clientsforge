import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ResultsCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mobileCurrentIndex, setMobileCurrentIndex] = useState({ row1: 0, row2: 0, row3: 0 });

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

  const handleMobileNavigation = (rowKey: 'row1' | 'row2' | 'row3', direction: 'prev' | 'next') => {
    setMobileCurrentIndex(prev => {
      const currentIndex = prev[rowKey];
      const maxIndex = 2; // 3 images, so index 0-2
      
      let newIndex;
      if (direction === 'next') {
        newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
      }
      
      return { ...prev, [rowKey]: newIndex };
    });
  };

  const ImageRow = ({ images, direction = 'left', rowKey }: { 
    images: typeof firstRowImages, 
    direction?: 'left' | 'right',
    rowKey: 'row1' | 'row2' | 'row3'
  }) => (
    <div className="relative overflow-hidden">
      {/* Desktop auto-scrolling layout */}
      <div className={`hidden md:flex space-x-4 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
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

      {/* Mobile layout with navigation arrows */}
      <div className="md:hidden relative">
        {/* Left Arrow */}
        <button
          onClick={() => handleMobileNavigation(rowKey, 'prev')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-background/90 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4 w-4 text-foreground" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => handleMobileNavigation(rowKey, 'next')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-background/90 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-4 w-4 text-foreground" />
        </button>

        {/* Single image display */}
        <div className="flex justify-center">
          <div 
            className="cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(images[mobileCurrentIndex[rowKey]].src)}
          >
            <img 
              src={images[mobileCurrentIndex[rowKey]].src} 
              alt={images[mobileCurrentIndex[rowKey]].alt}
              className="h-80 w-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setMobileCurrentIndex(prev => ({ ...prev, [rowKey]: index }))}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === mobileCurrentIndex[rowKey] 
                  ? 'bg-primary' 
                  : 'bg-muted-foreground/30'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="w-full space-y-6">
        {/* Third Row - 3 images scrolling left (now first) */}
        <ImageRow images={thirdRowImages} direction="left" rowKey="row3" />
        
        {/* First Row - 3 images scrolling right */}
        <ImageRow images={firstRowImages} direction="right" rowKey="row1" />
        
        {/* Second Row - 3 images scrolling left */}
        <ImageRow images={secondRowImages} direction="left" rowKey="row2" />
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