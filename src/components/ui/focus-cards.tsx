import React, { useState, useCallback } from "react";
import { cn } from "./../../lib/utils"; // Utility class names handler
import ReactLazyLoader from "../ReactLazyLoader"; // Assuming this is a custom lazy load component
import Carousel, { Modal, ModalGateway } from "react-images";

// Card Component - Memoized for performance
const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
          hovered !== null &&
            hovered !== index &&
            "blur-sm scale-[0.98] opacity-100"
        )}
      >
        <img src={card.src} alt="" loading="lazy" />
        {/* <ReactLazyLoader image={card.src} /> */}
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Optionally, you can add card titles or other content here */}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Open lightbox with the selected image
  const openLightbox = useCallback((index: number) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  // Close lightbox
  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  return (
    <div>
      {/* Grid Layout for cards - responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-full mx-auto md:px-3 w-full">
        {cards.map((card, index) => (
          <div key={card.title} className="cursor-pointer">
            <button
              onClick={() => openLightbox(index)}
              className="w-full" // Ensure button takes full width for easy interaction
            >
              <Card
                card={card}
                index={index}
                hovered={hovered}
                setHovered={setHovered}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Modal with carousel for lightbox */}
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={cards.map((x) => ({
                src: x.src,
                // srcset: x.src, // Add srcset if needed
                // caption: x.title, // Optional caption
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </div>
  );
}
