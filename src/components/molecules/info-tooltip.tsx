import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

export default function InfoTooltip({
  arrowPosition = "start",
  children,
  className,
}: {
  arrowPosition?: "start" | "center";
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <Card className="relative rounded-md mb-2 p-2 text-sm bg-white shadow-lg inline-block">
        {children}
        <div
          className={cn(
            "absolute bottom-0 w-2 h-2 -mb-1 transform -translate-x-1/2 rotate-45 bg-white",
            arrowPosition === "start" ? "left-[15%]" : " left-1/2"
          )}
        />
      </Card>
    </div>
  );
}
