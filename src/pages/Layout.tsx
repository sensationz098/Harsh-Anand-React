import { ParallaxProvider } from "react-scroll-parallax";
import { useParams } from "react-router-dom";
import { Menu } from "./../constant/index";
import HeroSection from "../components/ui/HeroSection";
import { LazyLoadImage } from "react-lazy-load-image-component";
import RootLayout from "../components/Root-Layout";
// const HeroSection: React.FC = () => {
//   // Define the layers for the parallax effect
//   const { id } = useParams();
//   const user = Menu.find((u) => u.id === Number(id));

//   console.log(user);
//   const background: BannerLayer = {
//     image: user?.image,
//     translateY: [0, 50],
//     opacity: [1, 0.3],
//     scale: [1.05, 1, "easeOutCubic"],
//     shouldAlwaysCompleteAnimation: true,
//   };

//   const headline: BannerLayer = {
//     translateY: [0, 30],
//     scale: [1, 1.05, "easeOutCubic"],
//     shouldAlwaysCompleteAnimation: true,
//     expanded: false,
//     children: (
//       <div className="absolute inset-0 flex items-center justify-center">
//         <h1 className="text-6xl md:text-8xl text-white font-thin">
//           {user?.category1}
//         </h1>
//       </div>
//     ),
//   };

//   const gradientOverlay: BannerLayer = {
//     opacity: [0, 0.9],
//     shouldAlwaysCompleteAnimation: true,
//     expanded: false,
//     children: (
//       <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
//     ),
//   };

//   return (
//     <ParallaxBanner
//       layers={[background, headline, gradientOverlay]}
//       className="aspect-[2/1] bg-gray-900"
//     />
//   );
// };

function Layout() {
  const { id } = useParams();
  const user = Menu.find((u) => u.id === Number(id));
  const gall = user?.gallery;
  console.log(gall);
  return (
    <div className="w-full h-full">
      <div className="w-full h-6 bg-black z-20  px-6 mx-auto" id="portflio">
        {/* <GalleryReact /> */}
        <ParallaxProvider>
          <HeroSection user={user} />
        </ParallaxProvider>
      </div>
      <RootLayout>
        <div className={`mt-[200px] md:mt-[800px] mx-auto px-7  w-full h-auto gap-4`}>
          <div className="flex justify-center">
            <div className="h-52 w-96 my-auto object-cover md:block hidden">
              <img src="Face.png" alt="" />
            </div>
            <div className="flex flex-col justify-around items-center">
              <h2 className="font-bold text-white md:text-4xl text-center text-2xl">
                {user?.heading}
              </h2>
              <div className="  my-auto object-cover md:hidden block">
                <img className="h-36 w-full" src="Face.png" alt="" />
              </div>
              <p className="text-center text-xs md:text-xl font-medium text-white">
                {user?.content}
              </p>
            </div>
            <div className="h-52 w-96 my-auto object-cover md:block hidden">
              <img src="Face.png" alt="" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:mt-4 mt-10 grid-rows-2 gap-10 w-full">
            {user?.gallery.map((item) => (
              <div className="flex justify-center">
                {/* Use LazyLoadImage for optimized image loading */}

                <LazyLoadImage
                  src={item}
                  alt={item}
                  className="img-fluid object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </RootLayout>
    </div>
  );
}
export default Layout;
