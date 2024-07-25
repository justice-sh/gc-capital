import LandingLayer from "@/shared/components/LandingLayer";
import Image from "@/shared/components/Image";
import SteerCaseBricks from "./components/SteerCaseBricks";
import CoinBricks from "./components/CoinBricks";
import CarotRace from "./components/CarotRace";

const HomeAbout = () => {
  return (
    <section id="about" className="relative grid min-h-[1100px] place-items-center bg-red-501">
      <LandingLayer className="grid gap-10">
        <CoinBricks className="absolute left-10 top-[60px] xl-1:static xl-1:mx-auto" />

        <h2 className="text-center font-bowlby_one text-8xl font-normal uppercase text-yellow-400 [text-shadow:_7px_1px_0_#ad0f02] md-4:text-5xl">
          About Us
        </h2>

        <p className="mx-auto max-w-[750px] text-center font-azeret_mono text-lg font-normal md-4:text-base">
          Golden Carrot Capital (GC.Capital) is a premier investment firm dedicated empowering growth and innovation
          across various industries. Founded on the principles of excellence, intergrity, and strategic foresight, we
          specialize in providing capital solutions and strategic guidance to buinesses poised for expansion and
          success.
        </p>

        <CarotRace className="absolute right-6 top-[58%] xl-1:relative xl-1:right-0 xl-1:top-0 xl-1:mx-auto" />
      </LandingLayer>

      <SteerCaseBricks className="absolute right-0 top-[100%]" />

      <div className="absolute -bottom-[35px] h-[150px] w-full md-4:h-[100px]">
        <Image
          src="/images/carot-earth.webp"
          className="absolute bottom-0 min-h-[100px] w-full object-cover"
          height={189}
          width={1920}
          alt="Carot Earth"
        />

        <Image
          src="/images/carot.webp"
          className="absolute left-10 top-10 z-10 md-4:h-[150px] md-4:w-[60px]"
          height={218}
          width={100}
          alt="Carot"
        />
      </div>
    </section>
  );
};

export default HomeAbout;
