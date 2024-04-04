import React from "react";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  const testimonials = [
    {
      quote:
        "The best error message is the one that never shows up. - Thomas Fuchs, Creator of script.aculo.us",
      name: "Thomas Fuchs",
      title: "Creator of script.aculo.us",
    },
    {
      quote:
        "Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs, Co-founder of Apple Inc.",
      name: "Steve Jobs",
      title: "Co-founder of Apple Inc.",
    },
    {
      quote:
        "It's not a bug - it's an undocumented feature. - Anonymous",
      name: "Anonymous",
      title: "Developer's Humor",
    },
    {
      quote:
        "The life of a designer is a life of fight. Fight against the ugliness. Just like a doctor fights against disease. For us, the visual disease is what we have around, and what we try to do is cure it somehow with design. - Massimo Vignelli, Italian Designer",
      name: "Massimo Vignelli",
      title: "Italian Designer",
    },
    {
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler, Software Engineer",
      name: "Martin Fowler",
      title: "Software Engineer",
    },
  ];

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
