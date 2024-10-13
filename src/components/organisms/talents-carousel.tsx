"use client";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { ITalent } from "@/types/talent";

import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { useRef } from "react";
import TalentCard from "../molecules/talent-card";
import { cn } from "@/lib/utils";
import InfoTooltip from "../molecules/info-tooltip";

const talentData: ITalent = {
  field: "마케팅",
  yoe: 2.5,
  first_name: "Abhishek",
  last_name: "Gupta",
  skills: [
    "마케팅 콘텐츠 제작",
    "인스타그램 관리",
    "트위터 관리",
    "블로그 글 작성",
  ],
  profile_picture:
    "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
  country_code: "CO",
};

export default function TalentsCarousel({ className }: { className?: string }) {
  const ref = useRef<StackedCarousel | undefined>();
  return (
    <div className={cn("max-w-3xl relative flex flex-col", className)}>
      <InfoTooltip
        arrowPosition="center"
        className="self-center mb-8 animate-fadeIn"
      >
        <p className="text-green-400 font-bold">월 100만원</p>
      </InfoTooltip>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
          // This is because ResponsiveContainer will not render the carousel before its parenTt's width is determined
          // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
          // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
          // let currentVisibleSlide = 5;
          // if (parentWidth <= 1440) currentVisibleSlide = 3;
          // if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={TalentCard}
              slideWidth={
                parentWidth < 500 ? parentWidth * 0.6 : parentWidth * 0.5
              }
              carouselWidth={parentWidth}
              data={[talentData, talentData, talentData, talentData]}
              currentVisibleSlide={3}
              maxVisibleSlide={3}
              useGrabCursor
              className="animate-fadeIn"
            />
          );
        }}
      />
      <>
        <div
          className="absolute top-[50%] left-[10px] z-10 cursor-pointer animate-fadeIn"
          color="primary"
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          <IoIosArrowBack color="white" />
        </div>
        <div
          className="absolute top-[50%] right-[10px] z-10 cursor-pointer animate-fadeIn"
          color="primary"
          onClick={() => {
            ref.current?.goNext();
          }}
        >
          <IoIosArrowForward color="white" />
        </div>
      </>
    </div>
  );
}
