import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Menu, MenuItem } from "../../constant";
import { Link as ReactLink} from "react-router-dom";


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
            <ReactLink to={`/${item.id}`}>

                <LazyLoadImage
                  src={item.image}
                  alt={item.category1}
                  className="img-fluid rounded-2xl"
                  />
                  </ReactLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryReact;
