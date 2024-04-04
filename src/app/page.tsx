import Image from "next/image";
import { NavbarDemo } from "./navbar";
import { HeroParallaxDemo } from "./hero";
import { TypewriterEffectSmoothDemo } from "./type";
import { CardHoverEffectDemo } from "./hover";
import { LampDemo } from "./lamp";
import { TextRevealCardPreview } from "./text";
import { BackgroundBeamsDemo } from "./wach";
import { GlobeDemo } from "./globe";
import { InfiniteMovingCardsDemo } from "./scroll";
import { SparklesPreview } from "./spark";

export default function Home() {
  return (
    <main className="container mx-auto px-4 md:px-0">
      <NavbarDemo />
      <HeroParallaxDemo />
      <TypewriterEffectSmoothDemo />
      <CardHoverEffectDemo />
      <LampDemo />
      <TextRevealCardPreview />
      <InfiniteMovingCardsDemo/>
      <GlobeDemo />
      {/*<BackgroundBeamsDemo /> */}
      <SparklesPreview/>
    </main>
  );
}
