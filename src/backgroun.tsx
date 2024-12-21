import { BackgroundBeams } from "./components/ui/background-beams";
import { TailwindcssButtons } from "./button";
import { ImagesSliderDemo } from "./image-slider";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen z-40 w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      {/* Main content container */}
      <div className="flex flex-col md:flex-row justify-center h-auto px-8 md:px-28 w-full z-10">
        {/* Left section (text and buttons) */}
        <div className="flex w-full md:w-2/3 flex-col items-center justify-around gap-6">
          <h1 className="font-bold text-white w-5/6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans">
            I am Harsh Anand
          </h1>
          <div className="flex flex-col w-5/6 gap-3">
            <p className="font-bold text-4xl sm:text-5xl md:text-6xl text-[#B38E58]">
              A Film Director, <br />
              Producer & <br /> Entrepreneur
            </p>

            <p className="text-xl sm:text-2xl md:text-3xl text-white">
              based in New Delhi, India.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row w-5/6 justify-start gap-8 sm:gap-12 mt-4">
            <TailwindcssButtons />
            <TailwindcssButtons />
          </div>
        </div>

        {/* Right section (Image slider) */}
        <div className="flex justify-center w-full md:w-3/5 mt-8 md:mt-0">
          <ImagesSliderDemo />
        </div>
      </div>

      {/* Background beams component */}
      <BackgroundBeams />
    </div>
  );
}
