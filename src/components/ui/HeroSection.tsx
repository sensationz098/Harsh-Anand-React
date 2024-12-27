

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
    translateY: [0, 0],
    opacity: [0.6, 0.8],
    scale: [0.99, 0.5, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: <div className="opacity-90 object-cover" />,
  };

  const headline: BannerLayer = {
    translateY: [0, 0],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-3xl md:text-8xl font-bold text-white z-50 w3-animate-zoom">
          {user.category1}
        </h1>
      </div>
    ),
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.9],
    translateY: [0, 0],
    // opacity: [1, 0.3],
    scale: [0.99, 0.5, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, gradientOverlay]}
      className="aspect-[2/1] bg-gray-900  "
    />
  );
};

export default HeroSection;
