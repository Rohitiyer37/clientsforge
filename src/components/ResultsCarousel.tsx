import { useState, useEffect } from 'react';
import { X } from "lucide-react";

const ResultsCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    // First row - 5 images
    { src: "/lovable-uploads/18e2fe42-ab54-46a7-850d-4c393d6f1feb.png", alt: "Calls Booked Results" },
    { src: "/lovable-uploads/b7bcf230-1750-45e2-b791-89d9340eb80d.png", alt: "Instagram Analytics 1" },
    { src: "/lovable-uploads/1384937a-175c-47d5-8923-4d239386af42.png", alt: "Instagram Analytics 2" },
    { src: "/lovable-uploads/85e827fe-7d05-429e-bc9c-fc154a7ddc82.png", alt: "YouTube Analytics 1" },
    { src: "/lovable-uploads/ef799771-ef68-401a-93b8-a1a8697a1184.png", alt: "YouTube Analytics 2" },
    
    // Second row - 4 images
    { src: "/lovable-uploads/b55d0fad-9e00-4df3-ba88-c9f64723ac29.png", alt: "YouTube Analytics 3" },
    { src: "/lovable-uploads/f10a2d4f-5566-466a-b89c-80db828ffbfe.png", alt: "YouTube Analytics 4" },
    { src: "/lovable-uploads/d91a1233-a9f7-466b-a66e-0e3aafef9597.png", alt: "YouTube Analytics 5" },
    { src: "/lovable-uploads/1d9d0e4d-7c31-404b-b830-8479658aff63.png", alt: "YouTube Analytics 6" },
  ];

  const firstRowImages = images.slice(0, 5);
  const secondRowImages = images.slice(5, 9);

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
              className="h-80 w-auto object-contain rounded shadow-lg"
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
              className="h-80 w-auto object-contain rounded shadow-lg"
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