import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "./../../lib/utils";
import GalleryReact from "./galleryfilter";

// Fixing the typo here, should be 'category' and include it as part of the Tab type
type Tab = {
  title: string;
  value: string;
  image: string;
  // category: string; // Add category property to the Tab type
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto my-28 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-6xl mb-4 text-white max-w-full text-center">
          Some of My Work
        </h2>
        <p className="text-neutral-300 text-1xl text-center md:text-base max-w-full">
          Maids table how learn drift but purse stand yet set. Music me house
          could among oh as their.
        </p>
      </div>
      <div
        className={cn(
          "md:flex md:flex-row grid grid-rows-3 grid-cols-3 items-center justify-center text-purple-800 [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-4 py-2 rounded-full text-sky-950",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "inset-0  text-red-700 absolute  bg-gray-200 dark:bg-zinc-800 rounded-full",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative justify-center items-center text-[#B38E58] md:flex font-semibold text-sm md:text-xl  ">
              {tab.title}
            </span>
          </button>
          
        ))}
      </div>
      
      {/* Pass the correct category prop to GalleryReact */}
      <GalleryReact category1={active.value} />
      <FadeInDiv
        tabs={tabs}
        active={active}
        hovering={hovering}
        className={cn("mt-32 text-cyan-800", contentClassName)}
      />
      
    </>
    
  );
 
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          
        </motion.div>
      ))}
    </div>
  );
};
