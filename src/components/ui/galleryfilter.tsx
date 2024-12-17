import React, { useState } from "react";

// Define the type for menu items
type MenuItem = {
  id: number;
  image: string;
  category: string;
};

const Menu: MenuItem[] = [
  { id: 1, image: "1.png", category: "ad-films" },
  { id: 2, image: "music1.jpg", category: "music-videos" },
  { id: 3, image: "7.png", category: "short-films" },
  { id: 4, image: "web2.jpg", category: "web-shows" },
  { id: 5, image: "talk1.jpg", category: "talk-shows" },
  { id: 6, image: "docs-1.png", category: "Documentaries" },
  { id: 7, image: "movie1.jpg", category: "movies" },
];

interface GalleryReactProps {
  category: string;
}

const GalleryReact: React.FC<GalleryReactProps> = ({ category }) => {
  const [items, setItems] = useState<MenuItem[]>(Menu); // Array of MenuItem

  const filterItem = (categItem: string) => {
    const updateItems = Menu.filter(
      (curElem) => curElem.category === categItem
    );
    setItems(updateItems);
  };

  return (
    <>
      {/* Navigation for category filters */}
      <div className="w-full bg-red-600">
        <ul className="text-white z-50 flex justify-around">
          <li className="nav-item">
            <a
              className={
                category === "ad-films" ? "nav-link active" : "nav-link"
              }
              href="javascript:void(0);"
              onClick={() => filterItem("ad-films")}
            >
              Ad Films
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                category === "Documentaries" ? "nav-link active" : "nav-link"
              }
              href="javascript:void(0);"
              onClick={() => filterItem("Documentaries")}
            >
              Documentaries
            </a>
          </li>
          <li className="nav-item">
            <a
              className={category === "movies" ? "nav-link active" : "nav-link"}
              href="javascript:void(0);"
              onClick={() => filterItem("movies")}
            >
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                category === "music-videos" ? "nav-link active" : "nav-link"
              }
              href="javascript:void(0);"
              onClick={() => filterItem("music-videos")}
            >
              Music Videos
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                category === "short-films" ? "nav-link active" : "nav-link"
              }
              href="javascript:void(0);"
              onClick={() => filterItem("short-films")}
            >
              Short Films
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                category === "talk-shows" ? "nav-link active" : "nav-link"
              }
              href="javascript:void(0);"
              onClick={() => filterItem("talk-shows")}
            >
              Talk Shows
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                category === "web-shows" ? "nav-link active" : "nav-link"
              }
              href="javascript:void(0);"
              onClick={() => filterItem("web-shows")}
            >
              Web Shows
            </a>
          </li>
          <li className="nav-item">
            <a
              className={category === "all" ? "nav-link active" : "nav-link"}
              href="javascript:void(0);"
              onClick={() => setItems(Menu)} // Show all items
            >
              All
            </a>
          </li>
        </ul>
      </div>

      {/* Display items based on category */}
      <div className="container-fluid mt-4 text-white">
        <div className="grid grid-rows-4 grid-cols-2 gap-4">
          {items.map((elem) => {
            const { id, image } = elem;

            return (
              <div className="col-sm-4" key={id}>
                <div className="card mb-3">
                  <div className="flex ">
                    <div className="col-md-5">
                      <img
                        className="img-fluid"
                        src={image}
                        alt={elem.category}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GalleryReact;
