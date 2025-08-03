import { useState, useEffect } from 'react';
import { X } from "lucide-react";

const ResultsCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    // First row - 4 images
    { src: "/lovable-uploads/b7fe1636-39e8-483f-9b30-3317f217be08.png", alt: "Calls Booked Results" },
    { src: "/lovable-uploads/b6f889fe-229c-4ea4-87c9-bfacedf87414.png", alt: "Instagram Analytics 1" },
    { src: "/lovable-uploads/2f0c457c-2c67-40a2-932b-584e21a0b93b.png", alt: "Instagram Analytics 2" },
    { src: "/lovable-uploads/60ccd4b7-ea20-472d-8f69-d5e8626703a8.png", alt: "Instagram Analytics 3" },
    
    // Second row - 5 images
    { src: "/lovable-uploads/41ce6286-e556-43de-90f0-f0435c9109f2.png", alt: "YouTube Analytics 1" },
    { src: "/lovable-uploads/3f50505b-b170-4fe8-b5ed-6760bff96fe0.png", alt: "YouTube Analytics 2" },
    { src: "/lovable-uploads/4908240e-df8e-4f3a-957c-eb85588ccefd.png", alt: "YouTube Analytics 3" },
    { src: "/lovable-uploads/f67ca87c-6d9f-4e95-850b-e96fca326d2d.png", alt: "YouTube Analytics 4" },
    { src: "/lovable-uploads/074c7f1e-335c-415d-a9e4-3fc389ae4982.png", alt: "YouTube Analytics 5" },
  ];

  const firstRowImages = images.slice(0, 4);
  const secondRowImages = images.slice(4, 9);

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
        {/* First Row - 5 images scrolling left */}
        <ImageRow images={firstRowImages} direction="left" />
        
        {/* Second Row - 4 images scrolling right */}
        <ImageRow images={secondRowImages} direction="right" />
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