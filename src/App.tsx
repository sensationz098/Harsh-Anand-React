import { BackgroundBeamsDemo } from "./backgroun";
import { FocusCardsDemo } from "./gallery";
import { TimelineDemo } from "./tracking-ball-section";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { TabsDemo } from "./tabs";
import RootLayout from "./components/Root-Layout";
import Card from "./components/ui/card";
import { TextHoverEffect } from "./components/ui/text-hover-effect";

import { FloatingNav } from "./components/ui/floating-navbar";
import { data, navItems } from "./constant";
import { Element } from "react-scroll";
import { MainFooter } from "./components/ui/MainFooter";
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp";
import { AnimatedTestimonialsDemo } from "./components/animated-about-us";
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
          <AnimatedTestimonialsDemo />
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
        id="contact"
      >
        <div className="h-full w-full hidden md:block">
          <TextHoverEffect text=" BRAND" />
        </div>
        <div className="h-full w-full text-white text-center my-10 block md:hidden">
          {/* <TextHoverEffect text=" BRAND" /> */}
          <h3 className="font-[helvetica] font-bold stroke-neutral-800 fill-transparent text-7xl md:text-5xl ">
            BRAND
          </h3>
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
        <div className="h-96 w-full bg-red-700">
          <Element name="contact">
            <MainFooter />
          </Element>
        </div>
      </div>
      <FloatingWhatsApp
        phoneNumber="9871303310"
        accountName="Harsh"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}

export default App;
