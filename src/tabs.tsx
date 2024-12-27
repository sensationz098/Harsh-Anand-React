// "use client";

// import Image from "next/image";
import { Tabs } from "./components/ui/tabs";
import { Menu } from "./constant";



export function TabsDemo() {
 type ta = {
  title: string,
  value: string,
  image: string,
 };


 const tab: ta[] = Menu.map((item) => ({
   title: item.category1, // Use category1 as the title
   value: item.category1, // Generate a value (slug) for each category
   image: item.image, // Extract image
 }));

 
 
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
      value: "music-videos",
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
    <div className="h-auto md:h-auto bg-black text-yellow-400 [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto mb-56 w-full  items-start justify-start ">
      <Tabs tabs={tab} />
    </div>
  );
}
