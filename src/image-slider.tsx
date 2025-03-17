"use client";
import { motion } from "framer-motion";
// import React from "react";
import { ImagesSlider } from "./components/ui/images-slider";

export function ImagesSliderDemo() {
  const images = ["pic-2.webp", "pic1-1.webp", "pic1.webp"];
  return (
    <ImagesSlider
      className="md:h-[400px] md:w-96 md:mt-0 mt-10 h-64 w-56 z-50"
      images={images}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      ></motion.div>
    </ImagesSlider>
  );
}
