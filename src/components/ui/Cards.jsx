import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Cards() {
  return (
    <Carousel className="w-full max-w-48 sm:max-w-xs flex justify-center items-center">
      <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
              <div className="p-20 bg-green-500"></div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
              <div className="p-20 bg-blue-500"></div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
              <div className="p-20 bg-red-500"></div>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
