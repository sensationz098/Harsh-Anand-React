import {BackgroundBeamsDemo} from "./backgroun";
import { FocusCardsDemo } from "./gallery";
import {TimelineDemo} from "./tracking-ball-section";
import GalleryReact from "./components/ui/galleryfilter"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {TabsDemo} from "./tabs"

function App() {
  return (
    <div>
      <BackgroundBeamsDemo></BackgroundBeamsDemo>
      <div className="w-full h-auto py-32 bg-black">
        <FocusCardsDemo></FocusCardsDemo>
      </div>
      <div className="w-full h-auto py-32 bg-black z-20">
        <TimelineDemo />
      </div>
      <div className="w-full h-auto py-32 bg-black z-20">
        <GalleryReact />
      </div>

      <div className="w-full h-auto py-32 bg-black z-20">
        {/* <GalleryReact /> */}
      <TabsDemo />
      </div>
    </div>
  );
}

export default App;
