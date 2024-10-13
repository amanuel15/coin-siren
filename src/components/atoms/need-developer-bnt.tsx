import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function NeedDeveloperBtn({
  className,
}: {
  className?: string;
}) {
  return (
    <Button
      className={cn(
        "text-yellow-400 md:text-primary-foreground text-lg font-semibold p-0 my-4 self-start",
        className
      )}
      variant={"link"}
    >
      개발자가 필요하신가요?
    </Button>
  );
}
