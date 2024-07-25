import Image from "@/shared/components/Image";
import { cn } from "@/shared/utils/cn";
import { HTMLAttributes } from "react";

const SteerCaseBricks = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn("relative", props.className)}>
      <Image
        src="/images/steer-case-bricks.webp"
        className="relative right-0 top-0 md-4:h-[115px] md-4:w-[312px]"
        height={215}
        width={512}
        alt="Steer Case Bricks"
      />

      <Image
        src="/images/carot-coin.webp"
        className="absolute right-10 top-0 z-10 md-4:size-[40px]"
        height={77}
        width={77}
        alt="Carot coin"
      />

      <Image
        src="/images/carot-coin.webp"
        className="absolute right-10 top-[90%] z-10 md-4:size-[40px]"
        height={77}
        width={77}
        alt="Carot coin"
      />
    </div>
  );
};

export default SteerCaseBricks;
