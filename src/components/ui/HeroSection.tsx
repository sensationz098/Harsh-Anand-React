// import React from "react";

// const HeroSection: React.FC = () => {
//   return (
//     <div className="h-full">
//       {/* The hero image */}
//       <div
//         className="relative h-1/2 bg-cover bg-center bg-no-repeat"
        
//       >

//         <img src="1-1.jpg" alt="" />        {/* Hero text */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//           <h1 className="text-4xl font-bold">I am John Doe</h1>
//           <p className="text-xl mt-2">And I'm a Photographer</p>
//           <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
//             Hire me
//           </button>
//         </div>
//       </div>
//     </div>


    
//   );
// };

// export default HeroSection;

import React from "react";
import { ParallaxBanner, BannerLayer } from "react-scroll-parallax";

interface HeroSectionProps {
  user: {
    category1: string;
    image: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ user }) => {
  // Define the layers for the parallax effect
  const background: BannerLayer = {
    image: user.image,
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl text-white font-thin">
          {user.category1}
        </h1>
      </div>
    ),
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, gradientOverlay]}
      className="aspect-[2/1] bg-gray-900"
    />
  );
};

export default HeroSection;
