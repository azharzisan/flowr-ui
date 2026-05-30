import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Cards() {
  const REVIEWS = [
    {
      name: "M.Ronald",
      comment:
        "Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!",
    },
    {
      name: "K.Mohan",
      comment:
        "Fantastic service and gorgeous arrangements. The flowers were delivered on time and looked stunning. The recipient couldn't stop talking about how lovely they were.",
    },
    {
      name: "John Ken",
      comment:
        "Exceeded my expectations! The bouquet was full, colorful, and smelled amazing. Great quality flowers and a smooth ordering experience from start to finish.",
    },
    {
      name: "John Renal",
      comment:
        "Wonderful flower shop! I've ordered flowers online before, but this bouquet was by far the most impressive. Fresh blooms, elegant presentation, and excellent customer service.",
    },
    {
      name: "Kenny Grum",
      comment:
        "Couldn't be happier with my purchase. The flowers arrived in perfect condition and looked absolutely beautiful. They brightened up the entire room and received so many compliments.",
    },
  ];
  return (
    <div className="relative w-full p-0 lg:px-12">
      <Carousel className="w-full h-auto">
        <CarouselContent>
          {REVIEWS.map((i) => (
            <CarouselItem key={i.name}>
              <div className="w-full flex flex-col justify-center items-center gap-2 text-center py-4">
                <h4 className="text-xl lg:text-3xl italic">❝{i.comment}❞</h4>
                <p className="text-md font-bold">- {i.name}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious /> {/* 👈 moved inside Carousel */}
        <CarouselNext />
      </Carousel>
    </div>
  );
}
