import { BackgroundBeamsDemo } from "./backgroun";
import { FocusCardsDemo } from "./gallery";
import { TimelineDemo } from "./tracking-ball-section";
import { TabsDemo } from "./tabs";
import Card from "./components/ui/card";
import { TextHoverEffect } from "./components/ui/text-hover-effect";

import { FloatingNav } from "./components/ui/floating-navbar";
import { data, navItems } from "./constant";
import { Element } from "react-scroll";
import { MainFooter } from "./components/ui/MainFooter";

import { AnimatedTestimonialsDemo } from "./components/animated-about-us";
import { useEffect } from "react";
import RootLayout from "./components/Root-Layout";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, []);
  return (
    <div className="w-full">
      <RootLayout>
        <Element name="home">
          <BackgroundBeamsDemo />
        </Element>

        <div className="w-full h-auto flex justify-center items-center bg-green-900">
          <FloatingNav navItems={navItems} />
        </div>

        <Element name="about">
          <div className="w-full h-auto py-32 px-6 mx-auto bg-black">
            <AnimatedTestimonialsDemo />
            <FocusCardsDemo />
          </div>
        </Element>

        <Element name="experience">
          <div className="w-full h-auto bg-black z-20">
            <TimelineDemo />
          </div>
        </Element>
        <Element name="portfolio">
          <div className="w-full h-auto bg-black z-20 px-6 mx-auto">
            <TabsDemo />
          </div>
        </Element>

        <Element name="contact">
          <div className="w-full h-auto bg-[#0A0A0A] flex flex-col z-20">
            <div className="h-full w-full hidden md:block">
              <TextHoverEffect text="BRAND" />
            </div>
            <div className="h-full w-full text-white text-center my-10 block md:hidden">
              <h3 className="font-[helvetica] font-bold stroke-neutral-800 fill-transparent text-7xl md:text-5xl">
                BRAND
              </h3>
            </div>

            <div className="flex justify-center md:flex-row flex-col gap-4 w-full h-auto px-6 mx-auto">
              {data.map((elem) => (
                <div className="col-sm-4" key={elem.id}>
                  <div className="card mb-3">
                    <div className="flex justify-center">
                      <div className="col-md-5">
                        <Card data={elem} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Element>

        <Element name="footer">
          <div className="h-96 w-full bg-red-700">
            <MainFooter />
          </div>
        </Element>
      </RootLayout>
    </div>
  );
}

export default App;
