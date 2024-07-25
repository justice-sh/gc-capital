import Image from "@/shared/components/Image";
import { HTMLAttributes } from "react";
import { cn } from "@/shared/utils/cn";

const CarotRace = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn("relative z-10", props.className, "h-[268px] w-full max-w-[341px]")}>
      <Image alt="" src="/images/carot-flag.webp" width={131} height={155} className="absolute bottom-[82px] left-5" />

      <Image
        src="/images/rabbit.webp"
        width={131}
        height={155}
        alt=""
        className="absolute bottom-[82px] right-0 h-[170px]"
      />

      <Image
        src="/images/bricks.webp"
        className="absolute bottom-0 left-0 h-[82px] w-full"
        width={341}
        height={82}
        alt=""
      />
    </div>
  );
};

export default CarotRace;
