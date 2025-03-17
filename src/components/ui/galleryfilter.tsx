import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "../../constant";
import { Link } from "react-router-dom";

interface GalleryReactProps {
  category1: string;
}

const GalleryReact: React.FC<GalleryReactProps> = ({ category1 }) => {
  const [items, setItems] = useState<MenuItem[]>(Menu);

  useEffect(() => {
    // Handle "All" category separately, and make sure category is case-insensitive
    if (category1.toLowerCase() === "all") {
      const ab = Menu.slice(1, 9); // Adjust the slice logic if necessary
      console.log(ab);
      setItems(ab);
    } else {
      setItems(
        Menu.filter(
          (item) => item.category1.toLowerCase() === category1.toLowerCase()
        )
      );
    }
  }, [category1]);

  // Dynamically determine the grid layout based on the category
  const gridClass =
    category1.toLowerCase() === "all" ? "grid-rows-3" : "grid-rows-1";

  return (
    <div className="container-fluid w-full mt-4 md:mx-auto bg-fuchsia-600 h-auto text-white">
      <div
        className={`grid ${gridClass} bg-black grid-cols-1 md:grid-cols-3 h-auto gap-4`}
      >
        {items.map((item) => (
          <div key={item.id} className="card mb-3">
            <div className="flex justify-center">
              <div className="col-md-5">
                <Link to={`/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.category1}
                    loading="lazy"
                    className="img-fluid rounded-2xl object-cover w-80 h-52"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryReact;
