import { cn } from "@/lib/utils";
import { LabeledCheckbox } from "../molecules/labeled-checkbox";

export default function SkillsGrid({
  skills,
  className,
}: {
  skills: string[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 gap-6 max-w-[70%] my-8", className)}>
      {skills.map((skill) => (
        <LabeledCheckbox key={skill}>{skill}</LabeledCheckbox>
      ))}
    </div>
  );
}
