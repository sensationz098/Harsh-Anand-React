import { BackgroundBeams } from "./components/ui/background-beams";
import { TailwindcssButtons } from "./button";
import { ImagesSliderDemo } from "./image-slider";
import {FloatingDockDemo} from "./menu"
export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen z-40 w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      {/* <div className="max-w-2xl mx-auto p-4"></div> */}
      {/* <FloatingDockDemo /> */}
      <div className="flex flex-col md:flex-row justify-center h-4/6 px-28 z-10 w-full ">
        <div className="flex w-2/3 flex-col items-center justify-around">
          <h1 className="font-bold text-white w-5/6 text-[60px] font-sans">
            I am Harsh Anand
          </h1>
          <div className="flex flex-col w-5/6 gap-3">
            <p className="font-bold text-7xl text-[#B38E58]">
              A Film Director, <br></br>Producer & <br></br> Entrepreneur
            </p>

            <p className="text-3xl text-white">based in New Delhi, India.</p>
          </div>

          <div className="flex w-5/6 justify-start gap-40">
            <TailwindcssButtons />
            <TailwindcssButtons />
          </div>
        </div>
        <div className="flex justify-center w-3/5">
          <ImagesSliderDemo />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
