import { BackgroundBeams } from "./components/ui/background-beams";
import { TailwindcssButtons } from "./button";
import { ImagesSliderDemo } from "./image-slider";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen z-40 w-full  rounded-md bg-neutral-950 relative flex md:flex-col flex-row items-center justify-center antialiased">
      {/* Main content container */}
      <div className="flex flex-col-reverse   gap-8 md:flex-row justify-center h-auto px-8 md:px-28 w-full z-10 ">
        <div className="flex w-full md:w-full  flex-col items-center justify-around md:gap-1 gap-1">
          <h1 className="font-bold text-white w-5/6 text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-7xl  font-sans">
            I am Harsh Anand
          </h1>
          <div className="flex flex-col w-5/6 gap-3">
            <p className="font-bold text-2xl text-center md:text-left w-full md:text-6xl text-[#B38E58]">
              A Film Director, Producer <br /> & Entrepreneur
            </p>

            <p className="text-xl sm:text-2xl md:text-3xl text-white text-center md:text-left ">
              based in New Delhi, India.
            </p>
          </div>

          <div className="flex flex-row w-5/6 justify-center md:justify-start gap-8 sm:gap-12 mt-4">
            <TailwindcssButtons link="about" name="About us" />
            <TailwindcssButtons link="contact" name="Contact us" />
          </div>
        </div>
        {/* Right section (Image slider) */}
        <div className="flex justify-center w-full mt-0 z-10 md:w-3/5 md:mt-0">
          <ImagesSliderDemo />
        </div>
      </div>

      {/* Background beams component */}
      <BackgroundBeams />
    </div>
  );
}
