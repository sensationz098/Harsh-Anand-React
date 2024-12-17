// import React, { useState, useCallback } from "react";
import { cn } from "./../../lib/utils";
// import { Modal, ModalGateway } from "react-images";
// import Carousel from "react-images";

// // Card Component
// export const Card = React.memo(
//   ({
//     card,
//     index=null,
//     hovered = null,
//     setHovered,
//   }: {
//     card: any;
//     index: number;
//     hovered: number | null;
//     setHovered: React.Dispatch<React.SetStateAction<number | null>>;
//   }) => (
//     <div
//       onMouseEnter={() => setHovered(index)}
//       onMouseLeave={() => setHovered(null)}
//       className={cn(
//         "rounded-lg relative dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
//         hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
//       )}
//     >
//       <img
//         src={card.src}
//         alt={card.title}
//         className="object-cover absolute inset-0"
//       />
//       <div
//         className={cn(
//           "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
//           hovered === index ? "opacity-100" : "opacity-0"
//         )}
//       >
//         {/* Add title or any other content */}
//       </div>
//     </div>
//   )
// );

// Card.displayName = "Card";

// // Main FocusCards Component
// export function FocusCards({ cards }: { cards: Card[] }) {
//   const [hovered, setHovered] = useState<number | null>(null);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState(0);

//   const openLightbox = useCallback((index: number) => {
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setViewerIsOpen(false);
//   };

//   return (
//     <div>
//       {/* Gallery Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 cursor-pointer gap-10 max-w-5xl mx-auto md:px-8 w-full">
//         {cards.map((card, index) => (
//           <button
//             type="button"
//             key={card.title}
//             onClick={() => openLightbox(index)} // Open Lightbox with the clicked image index
//           >
//             <Card
//               card={card}
//               index={index}
//               hovered={hovered ?? 0}
//               setHovered={setHovered}
//             />
//           </button>
//         ))}
//       </div>

//       {/* Modal for Lightbox with Carousel */}
//       <ModalGateway>
//         {viewerIsOpen ? (
//           <Modal onClose={closeLightbox}>
//             <Carousel
//               currentIndex={currentImage}
//               views={cards.map((x) => ({
//                 src: x.src,
//                 srcset: x.src, // Add srcset if needed
//                 caption: x.title, // Optional caption
//               }))}
//             />
//           </Modal>
//         ) : null}
//       </ModalGateway>
//     </div>
//   );
// }




// import React, { useState, useCallback } from "react";
// import { cn } from "./../../lib/utils";
// import Lightbox from "react-image-lightbox";
// import { render } from "react-dom";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";

// export const Card = React.memo(
//   ({
//     card,
//     index,
//     hovered = 0,
//     setHovered,
//   }: {
//     card: any;
//     index: number;
//     hovered: number;
//     setHovered: React.Dispatch<React.SetStateAction<number | null>>;
//   }) => (
//     <div
//       onMouseEnter={() => setHovered(index)}
//       onMouseLeave={() => setHovered(null)}
//       className={cn(
//         "rounded-lg relative dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
//         hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
//       )}
//     >
//       <img
//         src={card.src}
//         alt={card.title}
//         className="object-cover absolute inset-0"
//       />
//       <div
//         className={cn(
//           "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
//           hovered === index ? "opacity-100" : "opacity-0"
//         )}
//       >
//         {/* Add title or any other content */}
//       </div>
//     </div>
//   )
// );

// Card.displayName = "Card";

// type Card = {
//   title: string;
//   src: string;
// };

// export function FocusCards({ cards }: { cards: Card[] }) {
//   const [hovered, setHovered] = useState<number | null>(null);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-3 cursor-pointer gap-10 max-w-5xl mx-auto md:px-8 w-full">
//         {cards.map((card, index) => (
//           <button
//             type="button"
//             key={card.title}
//             onClick={() => setIsOpen(true)}
//           >
//             <Card
//               card={card}
//               index={index}
//               hovered={hovered ?? 0}
//               setHovered={setHovered}
//             />
//           </button>
//         ))}
//       </div>

//       {isOpen && hovered !== null && (
//         <Lightbox
//           mainSrc={cards[hovered].src} // Pass the src of the selected card
//           nextSrc={cards[(hovered + 1) % cards.length].src} // Pass the src of the next card
//           prevSrc={cards[(hovered + cards.length - 1) % cards.length].src} // Pass the src of the previous card
//           onCloseRequest={() => setIsOpen(false)}
//         />
//       )}
//     </div>
//   );
// }






import React, { useState, useCallback} from "react";
// import { cn } from "./../../lib/utils";
// import Lightbox from "react-image-lightbox";
// import { render } from "react-dom";
// import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// import React, { useState, useCallback } from "react";
export const Card = React.memo(
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
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-100"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
       
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-0": "opacity-0"
        )}
      >
        {/* <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div> */}
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  // const [isOpen, setIsOpen] = useState(false);

  // const [hovered, setHovered] = useState<number | null>(null);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const openLightbox = useCallback((index: number) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
      setViewerIsOpen(false);
    };



  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <button
            onClick={() => {
              openLightbox(index);
            }}
          >
            <Card
              key={card.title}
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          </button>
        ))}
      </div>

      
       <ModalGateway>
        {viewerIsOpen ? (
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
        ) : null}
      </ModalGateway>
    </div>
  );
}
