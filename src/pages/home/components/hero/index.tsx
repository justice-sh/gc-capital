import Image from "@/shared/components/Image";
import LandingLayer from "@/shared/components/LandingLayer";

const HomeHero = () => {
  return (
    <LandingLayer className="grid place-items-center">
      <Image src="/images/gc-capital-hero.gif" alt="Hero" width={512} height={441} />
    </LandingLayer>
  );
};

export default HomeHero;
