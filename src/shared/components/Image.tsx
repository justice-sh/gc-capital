import { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

type Props = HTMLAttributes<HTMLImageElement> & { src: string; alt: string; width?: number; height?: number };

const Image = ({ className, ...props }: Props) => {
  return <img {...props} className={cn("select-none", className)} />;
};

export default Image;
