import { Timeline } from "./components/ui/timeline";

export function TimelineDemo() {
  const div1 = "grid grid-cols-1 md:grid-cols-2 gap-4";
  const div2 =
    "bg-[#222121] flex flex-col justify-center 2xl:w-[45rem] items-center md:gap-7 gap-3 md:w-[35rem]  w-[270px] rounded-lg md:h-64 py-5 md:px-12 px-4 md:py-0";
  const hh3 =
    "text-[#e9a847] font-semibold 2xl:text-[2.5rem] md:text-[2rem] text-[1.2rem] text-center";
  const pp =
    "text-neutral-200 2xl:text-[1.2rem] md:text-[1rem] text-[0.8rem] text-center";

  const data = [
    {
      title: "2003 - 2004 ",
      smallTitle: "Video Director",
      content: (
        <div>
          <div className={`${div1}`}>
            <div className={`${div2}`}>
              <h3 className={`${hh3}`}>Venus Records & Tapes Pvt. Ltd.</h3>
              <p className={`${pp}`}>
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
          <div className={`${div1}`}>
            <div className={`${div2}`}>
              <h3 className={`${hh3}`}>Balaji Telefilms Pvt. Ltd.</h3>
              <p className={`${pp}`}>
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
          <div className={`${div1}`}>
            <div className={`${div2}`}>
              <h3 className={`${hh3}`}>Jai Mehta Productions</h3>
              <p className={`${pp}`}>
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
          <div className={`${div1}`}>
            <div className={`${div2}`}>
              <h3 className={`${hh3}`}>Sensationz Media & Arts Pvt. Ltd.</h3>
              <p className={`${pp}`}>
                Started my own company "Sensationz Media & Arts Pvt Ltd".
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
          <div className={`${div1}`}>
            <div className={`${div2}`}>
              <h3 className={`${hh3}`}>Short Films</h3>
              <p className={`${pp}`}>
                <ol className="ps-5 mt-2  list-decimal list-inside md:inline-flex gap-10">
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
          <div className={`${div1}`}>
            <div className={`${div2}`}>
              <h3 className={`${hh3}`}>Festive Circuit</h3>
              <p className={`${pp}`}>
                Worked as Director in feature films for festive circuit on women
                empowerment "Love Lust Loyalty".
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
          <div className={`${div1}`}>
            <div className={`${div2}`}>
              <h3 className={`${hh3}`}> Best Debut Directed Award</h3>
              <p className={`${pp}`}>
                Directed Love aur Rajneeti (2016), starring Ravi Kishan and
                Anjana Singh; a top 2016 Bhojpuri hit and Best Debut Director
                award winner.
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
          <div className={`${div1}`}>
            <div className={`${div2}`}>
              <h3 className={`${hh3}`}> International Spiritual Film</h3>
              <p className={`${pp}`}>
                The film "Who Am I?", based on Yogi Protoplasm's teachings, was
                selected for the International Spiritual Film Festival in Ujjain
                from 100 global entries. The jury included Mr. Ketan Mehta.
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
          <div className={`${div1}`}>
            <div className={`${div2}`}>
              <h3 className={`${hh3}`}> Directed Bhojpuri film</h3>
              <p className={`${pp}`}>
                Directed the Bhojpuri film Khao Pio Mast Raho with Ravi Kishan
                and Komal Thacker, set to release this year, and an ad film for
                the cosmetic brand Marlin.
              </p>
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
          <div className={`${div1}`}>
            <div className={`${div2}`}>
              <h3 className={`${hh3}`}> Working on a Film</h3>
              <p className={`${pp}`}>
                Working on a film "Meditation - the Ultimate Meditation" and
                "Untitled" Hindi feature film based on kids.
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
