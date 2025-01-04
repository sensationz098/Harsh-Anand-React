// import React from "react";
// import reactElementToJSXString from "react-element-to-jsx-string";
// import { toast, Toaster } from "sonner";
// import { ButtonsCard } from "./components/ui/tailwindcss-buttons";

import { Link } from "react-scroll";

type da={
  link: string;
  name: string;
}
export function TailwindcssButtons({link, name}:da) {
    
      // Button code

      return (
        <div>
           <Link
                        key={`link=${link}`}
                        to={link}
                        smooth={true}
                        offset={50}
                        duration={1000}
                        delay={300}>
          
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:text-sm text-[0.7rem] md:text-xl">
              {name}
            </button>
            
          </Link>
        </div>
      ); 
}