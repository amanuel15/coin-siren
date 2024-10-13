import { ReactNode } from "react";
import Image from "next/image";

import checkBoxIcon from "../../public/icons/Checkbox.png";

export function LabeledCheckbox({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center space-x-4">
      <Image src={checkBoxIcon} alt="check" />
      <label
        htmlFor="terms2"
        className="text-lg font-semibold text-primary-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {children}
      </label>
    </div>
  );
}
