import Text3DFlip from "@/components/ui/text-3d-flip";
import React from "react";

const About = () => {
  return (
    <>
      <div className="font-gilroy w-full h-full flex justify-center items-start border-x border-secondary border-b text-secondary">
        <div className="w-[50vw] h-full p-14 sticky top-14 self-start">
          <h4 className="text-6xl font-bold">About us</h4>
        </div>
        <div className="w-[50vw] h-full p-14 flex flex-col justify-center items-start gap-3 border-l border-secondary">
          <h5 className="text-md">OUR STORY</h5>
          <h3 className="text-4xl font-bold">Flowr LuxeBouquets</h3>
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
          <button className="border border-secondary px-5 py-3 text-sm font-semibold hover:bg-secondary hover:text-primary cursor-pointer">
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
