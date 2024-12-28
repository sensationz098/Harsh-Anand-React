import ReactLazyLoader from "../ReactLazyLoader";
import { LinkPreview } from "./link-preview";


type cardprops =  {
    id: number;
    image: string;
    link: string;
    name: string;
    screenshot: string;
};
const Card = ({data}:{data:cardprops}) => {
  return (
      <a href={data.link}>
    <div className="relative max-w-sm bg-[#0A0A0A] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     
          <img
            className="rounded-t-lg"
            src={data.image}
            alt="Noteworthy technology acquisitions"
          />

          <ReactLazyLoader image={data.image}/>
        


      <div className="p-5 flex  justify-center gap-96">
          <a href={data.link} className="z-50">
        <LinkPreview url={data.link} className="z-10">
          <button
            className="p-[3px] relative"
            onClick={() => (window.location.href = data.link)}
            >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              {data.name}
            </div>
          </button>
        </LinkPreview>
       </a>
      </div>
    </div>
              </a>
  );
};

export default Card;
