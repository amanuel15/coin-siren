import Image from "next/image";

import { Card, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import ArrowRightIcon from "../../public/icons/arrow-right-icon.png";
import { IService } from "@/types/talent";

export default function ServiceCard({ title, icon }: IService) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <Image src={icon} alt={title} />
        <h2 className="font-semibold">{title}</h2>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button variant="ghost" className="text-black gap-2 p-0">
          바로가기
          <Image src={ArrowRightIcon} alt="goto" />
        </Button>
      </CardFooter>
    </Card>
  );
}
