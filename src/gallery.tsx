import { FocusCards } from "./components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "new-2.png",
    },
    {
      title: "Valley of life",
      src: "new-3.png",
    },
    {
      title: "Sala behta hi jayega",
      src: "new-4.png",
    },
    {
      title: "Camping is for pros",
      src: "new-5.png",
    },
    {
      title: "The road not taken",
      src: "new-6.png",
    },
    {
      title: "The First Rule",
      src: "new-7.png",
    },
    {
      title: "The First Rule",
      src: "new-8.png",
    },
    {
      title: "The First Rule",
      src: "new-9.png",
    },
    {
      title: "The First Rule",
      src: "new-10.png",
    },
    {
      title: "The First Rule",
      src: "new-11.png",
    },
    {
      title: "The First Rule",
      src: "new-12.png",
    },
    {
      title: "The First Rule",
      src: "new-13.png",
    },
  ];

  return <FocusCards cards={cards} />;
}
