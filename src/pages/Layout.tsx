import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { useParams } from "react-router-dom";
import { Menu } from "./../constant/index";
import HeroSection from "../components/ui/HeroSection";
import Card from "../components/ui/card";
import { LazyLoadImage } from "react-lazy-load-image-component";
// const HeroSection: React.FC = () => {
//   // Define the layers for the parallax effect
//   const { id } = useParams();
//   const user = Menu.find((u) => u.id === Number(id));

//   console.log(user);
//   const background: BannerLayer = {
//     image: user?.image,
//     translateY: [0, 50],
//     opacity: [1, 0.3],
//     scale: [1.05, 1, "easeOutCubic"],
//     shouldAlwaysCompleteAnimation: true,
//   };

//   const headline: BannerLayer = {
//     translateY: [0, 30],
//     scale: [1, 1.05, "easeOutCubic"],
//     shouldAlwaysCompleteAnimation: true,
//     expanded: false,
//     children: (
//       <div className="absolute inset-0 flex items-center justify-center">
//         <h1 className="text-6xl md:text-8xl text-white font-thin">
//           {user?.category1}
//         </h1>
//       </div>
//     ),
//   };

//   const gradientOverlay: BannerLayer = {
//     opacity: [0, 0.9],
//     shouldAlwaysCompleteAnimation: true,
//     expanded: false,
//     children: (
//       <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
//     ),
//   };

//   return (
//     <ParallaxBanner
//       layers={[background, headline, gradientOverlay]}
//       className="aspect-[2/1] bg-gray-900"
//     />
//   );
// };

function Layout(){


const { id } = useParams();
  const user = Menu.find((u) => u.id === Number(id));
  const gall = user?.gallery;
    console.log(gall);
  return (
    <div>
      <div className="w-full h-80 bg-black z-20  px-6 mx-auto" id="portflio">
        {/* <GalleryReact /> */}
        <ParallaxProvider>
          <HeroSection user={user} />
        </ParallaxProvider>
      </div>

      <div
        className={`grid mt-[900px] bg-black grid-cols-1 md:grid-cols-3 h-auto gap-4`}
      >
        {user?.gallery.map((item) => (
          
            <div className="flex justify-center">
              <div className="col-md-5">
                {/* Use LazyLoadImage for optimized image loading */}
                
                  <LazyLoadImage
                    src={item}
                    alt={item}
                    className="img-fluid rounded-2xl"
                  />
          
              </div>
            </div>
         
        ))}
      </div>
    </div>
  );
}
export default Layout;
