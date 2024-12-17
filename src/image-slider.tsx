"use client";
import { motion } from "framer-motion";
// import React from "react";
import { ImagesSlider } from "./components/ui/images-slider";

export function ImagesSliderDemo() {
  const images = ["pic-2.png", "pic1-1.png", "pic1.png"];
  return (
    <ImagesSlider className="h-full w-96" images={images}>
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
      >
        
        {/* <img src="pic-2.png" alt="pic" /> */}
        {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p> */}
        
      </motion.div>
    </ImagesSlider>
  );
}
