// import Image from "next/image";
// import React from "react";
// import { small } from "framer-motion/client";
import { Timeline } from "./components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Sep 2003 - Sep 2004 ",
      smallTitle: "Video Director",
      content: (
        <div>
          {/* <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-2 w-full gap-4">
            <div className="bg-[#222121] flex flex-col justify-center items-center md:gap-7 gap-3 md:w-[500px] w-[250px] rounded-lg md:h-64 py-5 md:py-0">
              <h3 className="text-[#e9a847] font-semibold md:text-4xl  text-xl text-center">
                Venus Records & Tapes Pvt. Ltd.
              </h3>
              <p className="text-neutral-200  text-xs text-center">
                Worked as Director in various Music videos of singers like Altaf
                Raja & Udit Narayan
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Year 2004 - 2005 ",
      smallTitle: "Television Director",
      content: (
        <div>
          {/* <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#222121] flex flex-col justify-center items-center md:gap-7 gap-3 md:w-[500px] w-[250px] rounded-lg md:h-64 py-5 md:py-0">
              <h3 className="text-[#e9a847] font-semibold md:text-4xl  text-xl text-center">
                Balaji Telefilms Pvt. Ltd.
              </h3>
              <p className="text-neutral-200  text-xs text-center">
                Worked as Director in various Music videos of singers like Altaf
                Raja & Udit Narayan
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Year 2005 - 2006",
      smallTitle: "Television Director",
      content: (
        <div>
          {/* <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#222121] flex flex-col justify-center items-center md:gap-7 gap-3 md:w-[500px] w-[250px] rounded-lg md:h-64 py-5 md:py-0">
              <h3 className="text-[#e9a847] font-semibold md:text-4xl  text-xl text-center">
                Jai Mehta Productions
              </h3>
              <p className="text-neutral-200  text-xs text-center">
                Worked as Director in various Music videos of singers like Altaf
                Raja & Udit Narayan
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "May 2007 - Present",
      smallTitle: "Company Director and Film Director",
      content: (
        <div>
          {/* <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#222121] flex flex-col justify-center items-center md:gap-7 gap-3 md:w-[500px] w-[250px] rounded-lg md:h-64 py-5 md:py-0">
              <h3 className="text-[#e9a847] font-semibold md:text-4xl  text-xl text-center">
                Sensationz Media & Arts Pvt. Ltd.
              </h3>
              <p className="text-neutral-200  text-xs text-center">
                Worked as Director in various Music videos of singers like Altaf
                Raja & Udit Narayan
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
