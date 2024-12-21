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
// import {Footer} from "./components/ui/footer";
// import { LinkPreview } from "./components/ui/link-preview";

function App() {
  return (
    <div className="container mx-auto p-2 bg-purple-700">
      <Element name="home">
        <BackgroundBeamsDemo />
      </Element>

      <RootLayout>
        <div className="w-full h-auto flex justify-center items-center  bg-green-900">
          <FloatingNav navItems={navItems} />
        </div>
      </RootLayout>

      <div className="w-full h-auto py-32 px-20 mx-auto bg-black" id="home">
        <Element name="about">
          <FocusCardsDemo></FocusCardsDemo>
        </Element>
      </div>

      {/* <div className="w-full h-auto bg-black z-20" id="experience">
        <Element name="experience">
          <TimelineDemo />
        </Element>
      </div> */}

      <RootLayout>
        <Element name="portfolio">
          <div
            className="w-full h-auto bg-black z-20"
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
        <TextHoverEffect text=" BRAND" />
        <RootLayout>
          <div className="flex md:flex-row flex-col gap-4">
            {data.map((elem) => {
              return (
                <div className="col-sm-4" key={elem.id}>
                  <div className="card mb-3">
                    <div className="flex">
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

        {/* <GalleryReact /> */}
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
