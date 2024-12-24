import { BackgroundBeamsDemo } from "./backgroun";
import { FocusCardsDemo } from "./gallery";
import { TimelineDemo } from "./tracking-ball-section";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {ParallaxProvider} from "react-scroll-parallax"; 
import { TabsDemo } from "./tabs";
import RootLayout from "./components/Root-Layout";
import Card from "./components/ui/card";
import { TextHoverEffect } from "./components/ui/text-hover-effect";

import { FloatingNav } from "./components/ui/floating-navbar";
import { data, navItems } from "./constant";
import { Element } from "react-scroll";
import HeroSection from "./components/ui/HeroSection";
// import {Footer} from "./components/ui/footer";
// import { LinkPreview } from "./components/ui/link-preview";

function App() {
  return (
    <div className="w-full">
      <Element name="home">
        <BackgroundBeamsDemo />
      </Element>

      <RootLayout>
        <div className="w-full h-auto flex justify-center items-center  bg-green-900">
          <FloatingNav navItems={navItems} />
        </div>
      </RootLayout>

      <div className="w-full h-auto py-32 px-6 mx-auto bg-black" id="home">
        <Element name="about">
          <FocusCardsDemo />
        </Element>
      </div>

      <div className="w-full h-auto bg-black z-20" id="experience">
        <Element name="experience">
          <TimelineDemo />
        </Element>
      </div>

      <RootLayout>
        <Element name="portfolio">
          <div
            className="w-full h-auto bg-black z-20  px-6 mx-auto"
            id="portflio"
          >
            {/* <GalleryReact /> */}
            <TabsDemo />
          </div>
        </Element>
      </RootLayout>

      <div
        className="w-full h-auto bg-[#0A0A0A] flex flex-col  z-20"
        id="portfolio"
      >
        <div className="h-full w-full hidden md:block">
          <TextHoverEffect text=" BRAND" />
        </div>
        <div className="h-full w-full block md:hidden">
          <TextHoverEffect text=" BRAND" />
        </div>
        <RootLayout>
          <div className="flex justify-center md:flex-row flex-col gap-4 w-full h-auto px-6 mx-auto">
            {data.map((elem) => {
              return (
                <div className="col-sm-4" key={elem.id}>
                  <div className="card mb-3">
                    <div className="flex justify-center">
                      <div className="col-md-5">
                        <Card data={elem} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </RootLayout>

      

      </div>
    </div>
  );
}

export default App;
