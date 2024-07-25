import { ReactNode } from "react";
import { cn } from "@/shared/utils/cn";

type Props = {
  children?: ReactNode;
  className?: string;
  tag?: "section" | "header" | "main";
};

const LandingLayer = ({ children, className, tag = "section" }: Props) => {
  const Tag = tag;
  return <Tag className={cn("mx-auto box-border w-full max-w-[1280px] px-4 py-20", className)}>{children}</Tag>;
};

export default LandingLayer;
