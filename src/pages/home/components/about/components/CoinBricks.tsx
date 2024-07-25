import Image from "@/shared/components/Image";
import { cn } from "@/shared/utils/cn";
import { HTMLAttributes } from "react";

const CoinBricks = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn("relative flex h-[200px] w-full max-w-[341px] flex-col justify-between", className)}>
      <div className="relative flex">
        <Image src="/images/carot-coin.webp" className="" alt="Coin" width={77} height={77} />
        <Image
          src="/images/carot-coin.webp"
          className="absolute left-[100px] top-8"
          alt="Coin"
          width={77}
          height={77}
        />
      </div>

      <Image src="/images/bricks.webp" alt="Bricks" height={82} className="w-full" />
    </div>
  );
};

export default CoinBricks;
