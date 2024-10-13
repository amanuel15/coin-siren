import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

export default function InfoTooltip({
  text,
  arrowPosition = "start",
}: {
  text: string;
  arrowPosition?: "start" | "center";
}) {
  return (
    <div>
      <Card className="relative bottom-full rounded-md mb-2 p-2 text-sm bg-white shadow-lg inline-block">
        <p>{text}</p>
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
