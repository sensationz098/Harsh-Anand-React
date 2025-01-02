import { Timeline } from "./components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2003 - 2004 ",
      smallTitle: "Video Director",
      content: (
        <div>
          {/* <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-2 w-full gap-4">
            <div className="bg-[#222121] flex flex-col justify-center items-center md:gap-7 gap-3 md:w-[650px] w-[250px] rounded-lg md:h-64 py-5 md:px-12 md:py-0">
              <h3 className="text-[#e9a847] font-semibold md:text-[2.5rem]  text-xl text-center">
                Venus Records & Tapes Pvt. Ltd.
              </h3>
              <p className="text-neutral-200  text-[1.2rem] text-center">
                Worked as Director in various Music videos of singers like Altaf
                Raja & Udit Narayan
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2004 - 2005 ",
      smallTitle: "Television Director",
      content: (
        <div>
          {/* <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#222121] flex flex-col justify-center items-center md:gap-7 gap-3 md:w-[650px] w-[250px] rounded-lg md:h-64 py-5 md:px-12 md:py-0">
              <h3 className="text-[#e9a847] font-semibold md:text-[2.5rem]  text-xl text-center">
                Balaji Telefilms Pvt. Ltd.
              </h3>
              <p className="text-neutral-200  text-[1.2rem] text-center">
                Worked as Director with "Balaji Telefilms Pvt. Ltd." in serial
                "Kyunki saas Bhi Kabhi Bahu Thi"
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2005 - 2006",
      smallTitle: "Television Director",
      content: (
        <div>
          {/* <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#222121] flex flex-col justify-center items-center md:gap-7 gap-3 md:w-[650px] w-[250px] rounded-lg md:h-64 py-5 md:px-12 md:py-0">
              <h3 className="text-[#e9a847] font-semibold md:text-[2.5rem]  text-xl text-center">
                Jai Mehta Productions
              </h3>
              <p className="text-neutral-200  text-[1.2rem] text-center">
                Worked as Director with "Jai Mehta Productions" in the serial
                "Tumhari Disha"
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2007 - Present",
      smallTitle: "Company Director",
      content: (
        <div>
          {/* <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#222121] flex flex-col justify-center items-center md:gap-7 gap-3 md:w-[650px] w-[250px] rounded-lg md:h-64 py-5 md:px-12 md:py-0">
              <h3 className="text-[#e9a847] font-semibold md:text-[2.5rem]  text-xl text-center">
                Sensationz Media & Arts Pvt. Ltd.
              </h3>
              <p className="text-neutral-200  text-[1.2rem] ">
                Started my own Comapny "Sensationz Media & Arts Pvt Ltd".
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2009 - 2010",
      smallTitle: "Short Film Director",
      content: (
        <div>
          {/* <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#222121] flex flex-col justify-center items-center md:gap-7 gap-3 md:w-[650px] w-[250px] rounded-lg md:h-64 py-5 md:px-12 md:py-0">
              <h3 className="text-[#e9a847] font-semibold md:text-[2.5rem]  text-xl text-center">
                Short Films
              </h3>
              <p className="text-neutral-200  text-[1.2rem] ">
                <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside inline-flex gap-10">
                  <li>Unknown Fear</li>
                  <li>Winds Of Changes</li>
                  <li>Bravery Shivyansh</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2011 - 2012",
      smallTitle: "Feature Film Director",
      content: (
        <div>
          {/* <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#222121] flex flex-col justify-center items-center md:gap-7 gap-3 md:w-[650px] w-[250px] rounded-lg md:h-64 py-5 md:px-12 md:py-0">
              <h3 className="text-[#e9a847] font-semibold md:text-[2.5rem]  text-xl text-center">
                Festive Circuit
              </h3>
              <p className="text-neutral-200  text-[1.2rem] text-center">
                Worked as Director in feature films for festive cicuit on women
                empowerment "Love Lust Loyality".
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2013 - 2014",
      smallTitle: "Directed Bhojpuri feature",
      content: (
        <div>
          {/* <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#222121] flex flex-col justify-center items-center md:gap-7 gap-3 md:w-[650px] w-[250px] rounded-lg md:h-64 py-5 md:px-12 md:py-0">
              <h3 className="text-[#e9a847] font-semibold md:text-[2.5rem]  text-xl text-center">
                Best Debut Directed Award
              </h3>
              <p className="text-neutral-200  text-[1.2rem] text-start">
                Directed Bhojpuri feature film "Love aur Rajneeti" with Ravi
                Kishan & Anjana Singh, release on 8th January 2016. <br />{" "}
                <br />
                Got Best Debut Directed Award and the films is in Top Ten Box
                Office collection in films of 2016 in Bhojpuri.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2014 - 2015",
      smallTitle: "Directed Spiritual film",
      content: (
        <div>
          {/* <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#222121] flex flex-col justify-center items-center md:gap-7 gap-3 md:w-[650px] w-[250px] rounded-lg md:h-64 py-5 md:px-12 md:py-0">
              <h3 className="text-[#e9a847] font-semibold md:text-[2.5rem]  text-xl text-center">
                International Spiritual Film
              </h3>
              <p className="text-neutral-200  text-[1.2rem] text-center">
                The film "Who Am I?", based on Yogi Protoplasm's teachings, was
                selected for the International Spiritual Film Festival in
                Ujjain, one of 12 films chosen from 100 globally. The jury
                included Mr. Ketan Mehta.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2015 - 2016",
      smallTitle: "Directed Bhojpuri film",
      content: (
        <div>
          {/* <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#222121] flex flex-col justify-center items-center md:gap-7 gap-3 md:w-[650px] w-[250px] rounded-lg md:h-64 py-5 md:px-12 md:py-0">
              <h3 className="text-[#e9a847] font-semibold md:text-[2.5rem]  text-xl text-center">
                Directed Bhojpuri film
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-neutral-200  text-[1.2rem] text-start">
                  Directed Bhojpuri film "Khao Pio Mast Raho" with Ravi Kishan &
                  Komal Thacker, to be release this year.{" "}
                </p>

                <p className="text-neutral-200  text-[1.2rem] text-start ">
                  Directed an Ad film for a cosmetic brand "Marlin".
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2016 - 2017",
      smallTitle: "Hindi Feature Film",
      content: (
        <div>
          {/* <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#222121] flex flex-col justify-center items-center md:gap-7 gap-3 md:w-[650px] w-[250px] rounded-lg md:h-64 py-5 md:px-12 md:py-0">
              <h3 className="text-[#e9a847] font-semibold md:text-[2.5rem]  text-xl text-center">
                Working on a Film
              </h3>
              <p className="text-neutral-200  text-[1.2rem] text-center">
                Working on a film "Meditation - the Ultimate Meditaion" and
                "Untitled" hindi feaure film based on kids.
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
