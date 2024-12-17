// "use client";

// import Image from "next/image";
import { Tabs } from "./components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "All",
      value: "all",
      image: "7.png",
    },
    {
      title: "ad-films",
      value: "ad-films",
      image: "1.png",
    },
    {
      title: "music",
      value: "music",
      image: "music1.jpg",
    },
    {
      title: "short-films",
      value: "short-films",
      image: "7.png",
    },
    {
      title: "web-shows",
      value: "web-shows",
      image: "web2.jpg",
    },
    {
      title: "talk-shows",
      value: "talk-shows",
      image: "talk1.jpg",
    },
    {
      title: "Documentaries",
      value: "Documentaries",
      image: "docs-1.png",
    },
    {
      title: "moviess",
      value: "movies",
      image: "movie1.jpg",
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] text-yellow-400 [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
