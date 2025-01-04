import { Footer } from "flowbite-react";
import { FloatingDockDemo } from "../../float";

export function MainFooter() {
  return (
    <Footer className="rounded-none bg-black pb-8  shadow-none">
      <div className="mx-auto w-full max-w-8xl  px-4">
        <div className="grid w-full justify-between gap-8 py-16 md:grid-cols-2">
          <div className=" flex flex-col gap-5">
            <h3 className="text-white text-3xl  md:text-5xl md:ml-32 px-8">
              Get in Touch{" "}
            </h3>
            <div className="md:ml-32 md:px-8 md:pl-0 pl-6 flex flex-col justify-center   gap-5">
              <div className="flex items-center gap-2 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 24 24"
                    fill="#B38E58"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-map-pinned"
                  >
                    <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
                    <circle cx="12" cy="8" r="2" />
                    <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
                  </svg>
                </div>
                <div className="text-white text-xs md:text-3xl">
                  New Delhi, India
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 24 24"
                    fill="#B38E58"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-mail-open"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                  </svg>
                </div>
                <div className="text-white text-xs md:text-3xl">
                  harshanand@2145@gmail.com
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 24 24"
                    fill="#B38E58"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="text-white text-xs md-text-3xl">
                  (+91) 9871303310
                </div>
              </div>
            </div>

            <div className="">
              <FloatingDockDemo />
            </div>
          </div>
          <div className="w-full object-cover px-20 md:px-40 md:pt-32 h-full ">
            <a href="/">
              <img src="logo.png" alt="" />
            </a>
          </div>
        </div>
        <Footer.Divider />

        <div className="text-white w-full flex justify-center items-center">
          <h4>
            © 2024 Created by{" "}
            <a
              href="https://sensationzperformingarts.com/"
              className="text-blue-400 "
            >
              Sensationz Media and Arts Pvt. Ltd.
            </a>
          </h4>
        </div>
      </div>
    </Footer>
  );
}
