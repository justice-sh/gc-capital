import Image from "@/shared/components/Image";
import LandingLayer from "@/shared/components/LandingLayer";

const HomeTeams = () => {
  return (
    <LandingLayer className="space-y-20">
      <h2 className="mt-36 text-center font-bowlby_one text-8xl font-normal uppercase text-yellow-400 [text-shadow:_7px_1px_0_#ad0f02] md-4:text-5xl">
        OUR TEAM
      </h2>

      <div className="mx-auto grid w-fit grid-cols-2 gap-20 md-4:gap-6">
        <TeamImage src="/images/gc.webp" name="GC" />
        <TeamImage src="/images/buildrj.webp" name="@BuildrJ" />
        <TeamImage src="/images/ashlynn.webp" name="Ashlynn" />
        <TeamImage src="/images/hopper.webp" name="Hopper" />
      </div>

      <div className="mx-auto grid place-items-center gap-10">
        <h3 className="text-center font-bowlby_one text-5xl font-normal text-yellow-400 [text-shadow:_7px_1px_0_#ad0f02] sm-7:text-3xl">
          Partners
        </h3>

        <Image src="/images/u-topia.webp" alt="Partner" width={182} height={42} />
      </div>
    </LandingLayer>
  );
};

const TeamImage = ({ src, name }: { src: string; name: string }) => (
  <div className="grid select-none place-items-center gap-2">
    <Image src={src} alt={name} width={160} height={194} className="md-4:h-[120px] md-4:w-[100px]" />
    <p className="font-inter text-base font-normal text-yellow-401">{name}</p>
  </div>
);

export default HomeTeams;
