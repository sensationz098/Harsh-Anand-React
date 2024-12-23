import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type MenuItem = {
  id: number;
  image: string;
  category1: string;
};

// Static data outside of component to avoid unnecessary re-creation on each render
const Menu: MenuItem[] = [
  { id: 1, image: "1.png", category1: "ad-films" },
  { id: 2, image: "music1.jpg", category1: "music-videos" },
  { id: 3, image: "7.png", category1: "short-films" },
  { id: 4, image: "web2.jpg", category1: "web-shows" },
  { id: 5, image: "talk1.jpg", category1: "talk-shows" },
  { id: 6, image: "docs-1.png", category1: "Documentaries" },
  { id: 7, image: "movie1.jpg", category1: "movies" },
];

interface GalleryReactProps {
  category1: string;
}

const GalleryReact: React.FC<GalleryReactProps> = ({ category1 }) => {
  const [items, setItems] = useState<MenuItem[]>(Menu);

  useEffect(() => {
    if (category1 === "all") {
      setItems(Menu);
    } else {
      setItems(Menu.filter((item) => item.category1 === category1));
    }
  }, [category1]);

  // Dynamically determine the grid layout based on the category
  const gridClass = category1 === "all" ? "grid-rows-3" : "grid-rows-1";

  return (
    <div className="container-fluid w-full  mt-4 md:mx-auto bg-fuchsia-600 h-auto text-white">
      <div
        className={`grid ${gridClass} bg-black grid-cols-1 md:grid-cols-3 h-auto gap-4`}
      >
        {items.map((item) => (
          <div key={item.id} className="card mb-3">
            <div className="flex justify-center">
              <div className="col-md-5">
                {/* Use LazyLoadImage for optimized image loading */}
                <LazyLoadImage
                  src={item.image}
                  alt={item.category1}
                  className="img-fluid rounded-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryReact;
