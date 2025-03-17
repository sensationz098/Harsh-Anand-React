import { ParallaxProvider } from "react-scroll-parallax";
import { useParams } from "react-router-dom";
import { Menu } from "../constant/index";
import HeroSection from "../components/ui/HeroSection";
import Carousel, { Modal, ModalGateway } from "react-images";
import RootLayout from "../components/Root-Layout";
import { useCallback, useEffect, useState } from "react";

function HeroSectio() {
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, []);
  const openLightbox = useCallback((index: number) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  const { id } = useParams();
  const user = Menu.find((u) => u.id === Number(id)); // Find the user by ID

  if (!user) {
    return <div>User not found</div>; // Display a fallback if user is not found
  }

  const { gallery, category1, heading, content } = user;

  // Filter out empty strings from the gallery
  const filteredGallery = gallery.filter((item) => item !== "");

  return (
    <div className="w-full h-full">
      <div className="w-full h-6 bg-black z-20 mx-auto">
        <ParallaxProvider>
          <HeroSection user={user} />
        </ParallaxProvider>
      </div>

      <div className="w-10/12 mx-auto">
        {/* Use conditional rendering properly */}
        <ModalGateway>
          {viewerIsOpen && (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={filteredGallery.map((x) => ({
                  source: x, // Corrected 'src' to 'source'
                }))}
              />
            </Modal>
          )}
        </ModalGateway>
      </div>
      <div className="mt-[200px] md:mt-[800px] mx-auto px-7 w-full h-auto gap-4">
        <div className="flex justify-center  mx-auto ">
          <div className="h-52 mx-auto w-96 my-auto object-cover md:block hidden">
            <img src="Face.webp" alt="Profile" className="mx-auto" />
          </div>

          <div className="flex flex-col justify-around items-center">
            <h2 className="font-bold text-white md:text-4xl text-center text-2xl">
              {heading}
            </h2>

            <div className="my-auto object-cover md:hidden block">
              <img className="h-36 w-full" src="Face.webp" alt="Profile" />
            </div>

            <p className="text-center text-xs md:text-xl font-medium text-white">
              {content}
            </p>
          </div>

          <div className="h-52 w-96 my-auto object-cover md:block hidden">
            <img src="Face.webp" alt="Profile" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center content-stretch mx-auto md:mt-4 mt-10 grid-rows-2 gap-10 w-full">
          {filteredGallery.map((item, index) => (
            <div
              className="flex justify-center items-center w-full mx-auto "
              key={index}
            >
              {category1 === "Media" ? (
                <div className="flex flex-col md:flex-row w-full mx-auto justify-center items-center  gap-20   ">
                  <img
                    src={item}
                    alt={item}
                    className="img-fluid h-60 w-[500px] object-cover rounded-2xl  mx-auto "
                    loading="lazy"
                  />

                  {/* <div className="h-60 w-[250px] md:w-[500px] object-cover rounded-2xl"> */}
                  <iframe
                    src="https://www.youtube.com/embed/UgRdCkddDc8?si=EXO9LBCLMmW7kHfg"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="img-fluid h-60 w-[370px] md:w-[500px] object-cover rounded-2xl"
                  ></iframe>
                  {/* </div> */}
                </div>
              ) : (
                <button
                  onClick={() => openLightbox(index)}
                  className="w-full cursor-pointer mx-auto" // Ensure button takes full width for easy interaction
                >
                  <img
                    src={item}
                    alt={item}
                    className="img-fluid h-60 w-[500px] object-cover mx-auto rounded-2xl"
                    loading="lazy"
                  />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSectio;
