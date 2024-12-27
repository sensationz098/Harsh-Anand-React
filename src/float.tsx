import React from "react";
import { FloatingDock } from "./components/ui/floating-dock";
import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandFacebookFilled,
  IconBrandYoutube,
} from "@tabler/icons-react";


export function FloatingDockDemo() {
  const links = [
    {
      title: "Youtube",
      icon: <IconBrandYoutube className="h-full w-full text-neutral-300" />,
      href: "https://www.youtube.com/@SensationzMediaArtsPvtLtd",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebookFilled className="h-full w-full text-neutral-300" />
      ),
      href: "https://www.facebook.com/harsh.anand.5682/",
    },

    {
      title: "Linkedin",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
      href: "https://www.linkedin.com/in/harsh-anand-58438552/",
    },

    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-300" />,
      href: "https://x.com/sensationzmedia?s=09",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-neutral-300" />,
      href: "https://www.instagram.com/dialharsh/",
    },
  ];
  return (
    <div className="flex items-center justify-center h-fit w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
