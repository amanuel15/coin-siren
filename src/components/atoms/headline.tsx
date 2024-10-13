import { cn } from "@/lib/utils";

export default function Headline({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h2 className={cn("text-2xl font-bold text-center", className)}>{text}</h2>
  );
}
