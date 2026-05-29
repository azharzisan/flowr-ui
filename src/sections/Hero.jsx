import React from "react";
import heroFlower from "/images/hero-flower.jpg";
import DynamicIcon from "../components/ui/DynamicIcon";

const Hero = () => {
  return (
    <>
      <div className="w-full flex justify-center items-start font-gilroy text-secondary">
        <div className="w-[50vw] h-screen flex flex-col justify-center items-start sticky top-0 border-x border-b p-14">
          <div className="w-full flex flex-col justify-center items-start gap-5 pb-14 border-b">
            <div>
              <h4 className="font-extrabold text-5xl">Flowr</h4>
              <h4 className="font-extrabold text-5xl">LuxeBouquets</h4>
            </div>
            <p className="text-lg">
              Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
              Spread Joy with Our Online Flower Delivery Service
            </p>
          </div>
          <div className="w-full pt-5 flex justify-center items-center">
            <img
              src={heroFlower}
              alt=""
              className="w-[250px] h-[250px] object-cover pr-5 border-r border-secondary"
            />
            <div className="pl-5 h-[250px] flex justify-start items-end">
              <p className="text-md">
                Experience the joy of giving with our modern floral studio.
                Order online and send fresh flowers, plants and gifts today.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50vw] h-full grid grid-cols-2">
          <div className="card1 group bg-primary h-[50vh] border-r flex flex-col justify-between items-center p-4">
            <div></div>
            <h5 className="text-3xl font-bold">Fresh Flowers</h5>
            <div className="flex justify-center items-center gap-1 group-hover:underline">
              <p className="font-semibold">Shop now</p>
              <div className="group-hover:-rotate-45">
                <DynamicIcon
                  name={"ArrowRight"}
                  size={20}
                  color={"#121212"}
                  strokeWidth={2}
                />
              </div>
            </div>
          </div>
          <div className="h-[50vh] overflow-hidden card1-img">
            <img
              src="/images/fl4.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[50vh] border-y border-r card2-img overflow-hidden">
            <img
              src="/images/fl3.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card2 group bg-primary h-[50vh] border-r flex flex-col justify-between items-center p-4 border-y">
            <div></div>
            <h5 className="text-3xl font-bold">Dried Flowers</h5>
            <div className="flex justify-center items-center gap-1 group-hover:underline">
              <div className="card2-ro group-hover:rotate-45">
                <DynamicIcon
                  name={"ArrowLeft"}
                  size={20}
                  color={"#121212"}
                  strokeWidth={2}
                />
              </div>
              <p className="font-semibold">Shop now</p>
            </div>
          </div>

          <div className="card3 group bg-primary h-[50vh] border-r flex flex-col justify-between items-center p-4">
            <div></div>
            <h5 className="text-3xl font-bold">Live Plants</h5>
            <div className="flex justify-center items-center gap-1 group-hover:underline">
              <p className="font-semibold">Shop now</p>
              <div className="group-hover:-rotate-45">
                <DynamicIcon
                  name={"ArrowRight"}
                  size={20}
                  color={"#121212"}
                  strokeWidth={2}
                />
              </div>
            </div>
          </div>
          <div className="h-[50vh] card3-img overflow-hidden">
            <img
              src="/images/fl2.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[50vh] border-y border-r card4-img overflow-hidden">
            <img
              src="/images/fl5.avif"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card4 group bg-primary h-[50vh] border-r flex flex-col justify-between items-center p-4 border-y">
            <div></div>
            <h5 className="text-3xl font-bold">Aroma Candles</h5>
            <div className="flex justify-center items-center gap-1 group-hover:underline">
              <div className="card4-ro group-hover:rotate-45">
                <DynamicIcon
                  name={"ArrowLeft"}
                  size={20}
                  color={"#121212"}
                  strokeWidth={2}
                />
              </div>
              <p className="font-semibold">Shop now</p>
            </div>
          </div>

          <div className="card5 group bg-primary h-[50vh] border-r flex flex-col justify-between items-center p-4 border-b">
            <div></div>
            <h5 className="text-3xl font-bold">Fresheners</h5>
            <div className="flex justify-center items-center gap-1 group-hover:underline">
              <p className="font-semibold">Shop now</p>
              <div className="group-hover:-rotate-45">
                <DynamicIcon
                  name={"ArrowRight"}
                  size={20}
                  color={"#121212"}
                  strokeWidth={2}
                />
              </div>
            </div>
          </div>
          <div className="h-[50vh] border-b card5-img overflow-hidden">
            <img
              src="/images/gl2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
