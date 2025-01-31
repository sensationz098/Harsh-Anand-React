import { Tabs } from "./components/ui/tabs";
import { Menu } from "./constant";

export function TabsDemo() {
  type ta = {
    title: string;
    value: string;
    image: string;
  };

  const tab: ta[] = Menu.map((item) => ({
    title: item.category1, // Use category1 as the title
    value: item.category1, // Generate a value (slug) for each category
    image: item.image, // Extract image
  }));

  return (
    <div className="h-auto md:h-auto bg-black text-yellow-400 [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto mb-56 w-full  items-start justify-start ">
      <Tabs tabs={tab} />
    </div>
  );
}
