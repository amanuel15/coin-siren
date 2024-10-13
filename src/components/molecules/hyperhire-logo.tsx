import Image from "next/image";
import Link from "next/link";

import HyperHireLogo from "../../public/icons/hyperhire-blue.png";
import { cn } from "@/lib/utils";

export default function HyperHire({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex flex-row gap-4 items-center py-4 my-2">
        <Image src={HyperHireLogo} alt="logo-white" />
        <h3 className="text-2xl">Hyperhire</h3>
      </div>
      <h4>우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</h4>
      <p className="font-bold text-sm">010-0000-0000</p>
      <Link href="mailto:aaaaa@naver.com" className="font-bold text-sm">
        aaaaa@naver.com
      </Link>
    </div>
  );
}
