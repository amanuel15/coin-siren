import Image from "next/image";

import type { ITalent } from "@/types/talent";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import { Avatar } from "../ui/avatar";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import React from "react";
import Headline from "../atoms/headline";

const TalentCard = React.memo(function (props: {
  dataIndex: number;
  data: ITalent[];
  slideIndex: number;
  isCenterSlide: boolean;
}) {
  const { data, dataIndex } = props;
  const talent = data[dataIndex];
  return (
    <Card className="max-w-sm md:p-4">
      <CardHeader className="items-center">
        <div className="relative">
          <Avatar className="w-32 h-32 mb-6">
            <AvatarImage src={talent.profile_picture} alt="Profile_Avatar" />
            <AvatarFallback className="text-5xl leading-[2] font-semibold">
              {talent.first_name.charAt(0) + talent.last_name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <Image
            src={`https://flagsapi.com/${talent.country_code}/shiny/64.png`}
            alt={talent.country_code}
            width={32}
            height={32}
            className="absolute bottom-5 right-2 z-50"
          />
        </div>
        <Headline text={talent.first_name + " " + talent.last_name} />
        <p className="text-primary font-semibold">
          {talent.field + " - "}
          <span className="font-bold">{talent.yoe}</span>
        </p>
      </CardHeader>
      <CardContent className="mt-4">
        <div className="flex flex-row flex-wrap gap-2 justify-center">
          {talent.skills.map((el) => (
            <Badge
              key={el}
              className="md:px-4 py-2 border-2"
              variant={"outline"}
            >
              {el}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
});

TalentCard.displayName = "Talent Card";

export default TalentCard;
