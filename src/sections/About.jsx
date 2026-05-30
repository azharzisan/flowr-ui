import Text3DFlip from "@/components/ui/text-3d-flip";
import React from "react";

const About = () => {
  return (
    <>
      <div className="font-gilroy w-full h-full flex justify-center flex-col lg:flex-row items-start border-x border-secondary border-b text-secondary">
        <div className="w-full lg:w-[50vw] h-full p-8 bg-primary sticky top-14 z-20 self-start overflow-hidden border-b lg:border-none lg:p-14">
          <h4 className="text-2xl md:text-3xl lg:text-5xl font-bold">About us</h4>
        </div>
        <div className="w-full lg:w-[50vw] h-full p-8 lg:p-14 flex flex-col justify-center items-start gap-4 lg:gap-3 lg:border-l border-secondary">
          <h5 className="text-md">OUR STORY</h5>
          <h3 className="text-xl lg:text-3xl font-bold">Flowr LuxeBouquets</h3>
          <p className="text-lg">
            We are a modern local floral studio, which specializes in the design
            and delivery of unique bouquets. We have the best florists who
            carefully select each look, our studio cooperates directly with
            farms for growing different flowers, so we always have fresh
            flowers, which are collected by our florists in exquisite bouquets.
            We have a collection of fresh bouquets, collections of dried
            bouquets, house plants, as well as fragrant candles from luxury
            brands to create the perfect atmosphere. Make someone's day amazing
            by sending flowers, plants and gifts the same or next day. Ordering
            flowers online has never been easier.
          </p>
          <button className="inline-flex min-h-11 items-center justify-center border border-secondary bg-primary px-5 py-3 text-sm font-semibold leading-none hover:bg-secondary hover:text-primary cursor-pointer">
            <Text3DFlip
              rotateDirection="top"
            >
              LEARN MORE
            </Text3DFlip>
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
