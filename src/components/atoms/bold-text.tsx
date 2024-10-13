import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function BoldText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("text-lg font-bold", className)}>{children}</p>;
}
