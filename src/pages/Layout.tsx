import { ParallaxProvider } from "react-scroll-parallax";
import { useParams } from "react-router-dom";
import { Menu } from "./../constant/index";
import HeroSection from "../components/ui/HeroSection";
import { LazyLoadImage } from "react-lazy-load-image-component";
import RootLayout from "../components/Root-Layout";

function Layout() {
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
      <div className="w-full h-6 bg-black z-20 px-6 mx-auto" id="portfolio">
        <ParallaxProvider>
          <HeroSection user={user} />
        </ParallaxProvider>
      </div>

      <RootLayout>
        <div className="mt-[200px] md:mt-[800px] mx-auto px-7 w-full h-auto gap-4">
          <div className="flex justify-center">
            <div className="h-52 w-96 my-auto object-cover md:block hidden">
              <img src="Face.png" alt="Profile" />
            </div>

            <div className="flex flex-col justify-around items-center">
              <h2 className="font-bold text-white md:text-4xl text-center text-2xl">
                {heading}
              </h2>

              <div className="my-auto object-cover md:hidden block">
                <img className="h-36 w-full" src="Face.png" alt="Profile" />
              </div>

              <p className="text-center text-xs md:text-xl font-medium text-white">
                {content}
              </p>
            </div>

            <div className="h-52 w-96 my-auto object-cover md:block hidden">
              <img src="Face.png" alt="Profile" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:mt-4 mt-10 grid-rows-2 gap-10 w-full">
            {filteredGallery.map((item, index) => (
              <div className="flex justify-center" key={index}>
                {category1 === "Media" ? (
                  <div className="flex w-[2000px] gap-20 ml-40  ">
                    <LazyLoadImage
                      src={item}
                      alt={item}
                      className="img-fluid h-60 w-[500px] object-cover rounded-2xl"
                    />
                    <div className="h-60 w-[500px] object-cover rounded-2xl">
                      <iframe
                        src="https://www.youtube.com/embed/UgRdCkddDc8?si=EXO9LBCLMmW7kHfg"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="img-fluid h-60 w-[500px] object-cover rounded-2xl"
                      ></iframe>
                    </div>
                  </div>
                ) : (
                  <LazyLoadImage
                    src={item}
                    alt={item}
                    className="img-fluid h-60 w-[500px] object-cover rounded-2xl"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </RootLayout>
    </div>
  );
}

export default Layout;
