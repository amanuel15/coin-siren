"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "../../public/img_1.jpg";
import TalentCard from "./organisms/talent-card";

const talentData = {
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
};

export default function CardsCarousel() {
  return <TalentCard talent={talentData} />;
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      //   pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        // clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide>
        <TalentCard talent={talentData} />
      </SwiperSlide>
      <SwiperSlide>
        <TalentCard talent={talentData} />
      </SwiperSlide>
      <SwiperSlide>
        <TalentCard talent={talentData} />
      </SwiperSlide>
      <SwiperSlide>
        <TalentCard talent={talentData} />
      </SwiperSlide>
      <SwiperSlide>
        <TalentCard talent={talentData} />
      </SwiperSlide>
      {/* <SwiperSlide>
        <Image src={slide_image_1} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide_image_1} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide_image_1} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide_image_1} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide_image_1} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide_image_1} alt="slide_image" />
      </SwiperSlide> */}

      <div className="slider-controler text-white">
        <div className="swiper-button-prev slider-arrow">
          <IoIosArrowBack color="white" />
        </div>
        <div className="swiper-button-next slider-arrow text-white">
          <IoIosArrowForward color="white" />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
}
