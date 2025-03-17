import { FocusCards } from "./components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "new-2.webp",
    },
    {
      title: "Valley of life",
      src: "new-3.webp",
    },
    {
      title: "Sala behta hi jayega",
      src: "new-4.webp",
    },
    {
      title: "Camping is for pros",
      src: "new-5.webp",
    },
    {
      title: "The road not taken",
      src: "new-6.webp",
    },
    {
      title: "The First Rule",
      src: "new-7.webp",
    },
    {
      title: "The First Rule",
      src: "new-8.webp",
    },
    {
      title: "The First Rule",
      src: "new-9.webp",
    },
    {
      title: "The First Rule",
      src: "new-10.webp",
    },
    {
      title: "The First Rule",
      src: "new-11.webp",
    },
    {
      title: "The First Rule",
      src: "new-12.webp",
    },
    {
      title: "The First Rule",
      src: "new-13.webp",
    },
  ];

  return <FocusCards cards={cards} />;
}
