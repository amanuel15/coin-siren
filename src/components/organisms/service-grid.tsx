import { IService } from "@/types/talent";
import React from "react";

import CodeIcon from "../../public/icons/code_icon.png";
import PersonIcon from "../../public/icons/person_icon.png";
import GearIcon from "../../public/icons/gear_icon.png";
import KORIcon from "../../public/icons/kor_icon.png";
import ServiceCard from "../molecules/service-card";

const services: IService[] = [
  { title: "해외 개발자 원격 채용", icon: CodeIcon },
  { title: "외국인 원격 채용 (비개발)", icon: PersonIcon },
  { title: "한국어 가능 외국인 채용", icon: KORIcon },
  { title: "해외 개발자 활용 서비스", icon: GearIcon },
];

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-2 md:flex md:flex-row md:gap-4 gap-3 my-4">
      {services.map(({ title, icon }) => (
        <ServiceCard key={title} title={title} icon={icon} />
      ))}
    </div>
  );
}
