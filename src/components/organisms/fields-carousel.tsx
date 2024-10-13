"use client";

import { useCallback, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import pieIcon from "../../public/icons/pie_icon.png";
import starIcon from "../../public/icons/star_icon.png";
import galleryIcon from "../../public/icons/gallery_icon.png";
import callIcon from "../../public/icons/call_icon.png";
import cubeIcon from "../../public/icons/cube_icon.png";
import { cn } from "@/lib/utils";

const data: { image: StaticImageData; text: string }[] = [
  { text: "해외 마케팅", image: pieIcon },
  { text: "퍼블리셔", image: galleryIcon },
  { text: "캐드원(제도사)", image: cubeIcon },
  { text: "해외 세일즈", image: starIcon },
  { text: "해외 CS", image: callIcon },
];

export default function FieldsCarousel({ className }: { className?: string }) {
  const [api, setApi] = useState<CarouselApi | undefined>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  const next = useCallback(() => {
    if (current === count - 1) {
      scrollTo(0);
    } else {
      scrollTo(current + 1);
    }
  }, [current, count, scrollTo]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [next]);

  return (
    <Carousel setApi={setApi} className={cn("my-8", className)}>
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem key={item.text} className="md:basis-1/2 lg:basis-1/4">
            <Card className="bg-primary/20 backdrop-blur border-0">
              <CardContent className="flex flex-row gap-4 items-center p-4">
                <Image
                  src={item.image}
                  alt={item.text}
                  width={50}
                  height={50}
                />
                <span className="text-2xl font-semibold text-white">
                  {item.text}
                </span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
