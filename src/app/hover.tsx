import { HoverEffect } from "./components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://www.linkedin.com/in/-aro-barath-chandru--12725622a/?originalSubdomain=in",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://www.linkedin.com/in/-aro-barath-chandru--12725622a/?originalSubdomain=in",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://www.linkedin.com/in/-aro-barath-chandru--12725622a/?originalSubdomain=in",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://www.linkedin.com/in/-aro-barath-chandru--12725622a/?originalSubdomain=in",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://www.linkedin.com/in/-aro-barath-chandru--12725622a/?originalSubdomain=in",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://www.linkedin.com/in/-aro-barath-chandru--12725622a/?originalSubdomain=in",
  },
];
