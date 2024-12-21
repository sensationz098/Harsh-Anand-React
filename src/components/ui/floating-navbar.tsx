"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "./../../lib/utils";
import { Link } from "react-scroll";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Scroll visibility logic
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const handleClick = (index: number) => {
    setActiveIndex(index); // Update active item index
  };

  return (
    
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center md:items-center justify-center md:justify-center space-x-4 bg-black",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            to={navItem.link}
            smooth={true}
            offset={50}
            duration={1000}
            delay={300}
            className={cn(
              "font-medium relative text-white px-6 py-4 rounded-full",
              activeIndex === idx
                ? "border border-white/[0.2] rounded-full text-xl " // Active item styling
                : "text-neutral-300"
            )}
          >
            <a
              key={`link=${idx}`}
              href={navItem.link}
              onClick={() => handleClick(idx)} // Set active on click
            >
              {/* <Link
              activeClass="active"
              to="target"
              //spy={true}
              smooth={true}
              //hashSpy={true}
              offset={50}
              duration={500}
              delay={1000}
              //isDynamic={true}

              //ignoreCancelEvents={false}
              //spyThrottle={500}
            > */}
              <div className="flex gap-2">
                <span className="block ">{navItem.icon}</span>
                <span className="hidden sm:block text-xs">{navItem.name}</span>
              </div>

              {/* Conditionally render the active underline */}
              {activeIndex === idx && (
                <span className="absolute text-xs inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
              )}
              {/* </Link> */}
            </a>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
   
  );
};
