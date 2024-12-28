import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "As I reflect on my journey in the entertainment field, I recognize the many commendable projects I’ve undertaken as a director. /n In 2003, I began my career directing at Venus Records and Tapes Pvt. Ltd., working on various music videos for artists like Altaf Raja and Udit Narayan, among others. From 2004 to 2005, I collaborated with Jai Mehta Productions on the serial *Tumhari Disha*, and my journey has only continued from there. ",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "pic1.png",
    },
    {
      quote:
        "After a successful stint in direction, I founded my own company, Sensationz Media & Arts Pvt. Ltd., in 2007. A golden period in my career arrived when I had the opportunity to direct the talented Bhojpuri star Ravi Kishan in the film *Love Aur Rajneeti*, released on January 8, 2016. The film received immense admiration from both audiences and the industry, and my hard work paid off when I was awarded Best Debut Director for this project, which became one of the top 10 box office hits in Bhojwood in 2016. ",
      designation: "CTO at InnovateSphere",
      src: "pic-2.png",
    },
    {
      quote:
        "My journey is far from over; in 2022, I directed the short film *AVAIDH*, featuring renowned TV and film actor Hiten Tejwani, which successfully garnered tremendous love and appreciation from audiences. I am the founder and editor-in-chief of “The Bollywood Faces” a quarterly magazine promoting upcoming talents. The magazine was established in 2009 with the motive to cover emerging artists, and fashion designers. The magazine reaches out to 5000 industry professionals through our distribution channels",
      src: "pic2.png",
    },
    {
      quote:
        "Apart from this, it also gets promoted on different social media platforms with a reach around 1M.An in-house event is organized by Sensation Media & Arts quarterly to launch the magazine in the presence of a celebrity guest. More than 42 issues of the magazine have been published and it has been running successfully over a decade now.",
      src: "pic1-1.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
