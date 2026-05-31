import React from "react";
import heroFlower from "/images/hero-flower.jpg";
import DynamicIcon from "../components/ui/DynamicIcon";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="w-full flex flex-col justify-center items-start lg:flex-row font-gilroy text-secondary">
        <div className="w-full lg:w-1/2 min-h-[calc(100vh-58px)] lg:min-h-screen flex flex-col justify-center items-start lg:sticky lg:top-0 border-x border-b border-secondary px-5 pb-8 pt-24 sm:px-8 sm:pt-14 lg:px-14 lg:py-20">
          <div className="w-full flex flex-col justify-center items-start gap-4 sm:gap-5 pb-5">
            <div className="">
              <h4 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl">
                Flowr
              </h4>
              <h4 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl">
                LuxeBouquets
              </h4>
            </div>
            <p className="max-w-2xl text-lg sm:text-xl">
              Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
              Spread Joy with Our Online Flower Delivery Service
            </p>
          </div>
          <div className="w-full p-4 flex flex-col bg-light-gray justify-center items-stretch gap-5 lg:flex-row lg:gap-0">
            <img
              src={heroFlower}
              alt=""
              className="w-full h-[220px] sm:h-[280px] lg:h-[250px] object-cover lg:w-1/2 border"
            />
            <div className="h-auto lg:h-[250px] w-full lg:w-1/2 flex justify-between flex-col items-center lg:pl-5">
              <img src="/images/logo.png" alt="" className="w-25 h-25" />
              <p className="text-base font-bold text-center">
                Experience the joy of giving with our modern floral studio.
                Order online and send fresh flowers, plants and gifts today.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 border-x lg:border-l-0 border-secondary">
          <div
            onClick={() => navigate("/catagory")}
            className="card1 group bg-primary min-h-[220px] sm:min-h-[260px] lg:min-h-[50vh] border-b sm:border-r border-secondary flex flex-col justify-between items-center p-5 text-center"
          >
            <div></div>
            <h5 className="text-2xl sm:text-3xl font-bold">Fresh Flowers</h5>
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
          <div
            onClick={() => navigate("/catagory")}
            className="min-h-[220px] sm:min-h-[260px] lg:min-h-[50vh] border-b border-secondary overflow-hidden card1-img"
          >
            <img
              src="/images/fl4.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div
            onClick={() => navigate("/catagory")}
            className="min-h-[220px] sm:min-h-[260px] lg:min-h-[50vh] border-b sm:border-r border-secondary card2-img overflow-hidden"
          >
            <img
              src="/images/fl3.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            onClick={() => navigate("/catagory")}
            className="card2 group bg-primary min-h-[220px] sm:min-h-[260px] lg:min-h-[50vh] border-b border-secondary flex flex-col justify-between items-center p-5 text-center"
          >
            <div></div>
            <h5 className="text-2xl sm:text-3xl font-bold">Dried Flowers</h5>
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

          <div
            onClick={() => navigate("/catagory")}
            className="card3 group bg-primary min-h-[220px] sm:min-h-[260px] lg:min-h-[50vh] border-b sm:border-r border-secondary flex flex-col justify-between items-center p-5 text-center"
          >
            <div></div>
            <h5 className="text-2xl sm:text-3xl font-bold">Live Plants</h5>
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
          <div
            onClick={() => navigate("/catagory")}
            className="min-h-[220px] sm:min-h-[260px] lg:min-h-[50vh] border-b border-secondary card3-img overflow-hidden"
          >
            <img
              src="/images/fl2.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div
            onClick={() => navigate("/catagory")}
            className="min-h-[220px] sm:min-h-[260px] lg:min-h-[50vh] border-b sm:border-r border-secondary card4-img overflow-hidden"
          >
            <img
              src="/images/fl5.avif"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            onClick={() => navigate("/catagory")}
            className="card4 group bg-primary min-h-[220px] sm:min-h-[260px] lg:min-h-[50vh] border-b border-secondary flex flex-col justify-between items-center p-5 text-center"
          >
            <div></div>
            <h5 className="text-2xl sm:text-3xl font-bold">Aroma Candles</h5>
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

          <div
            onClick={() => navigate("/catagory")}
            className="card5 group bg-primary min-h-[220px] sm:min-h-[260px] lg:min-h-[50vh] border-b sm:border-r border-secondary flex flex-col justify-between items-center p-5 text-center"
          >
            <div></div>
            <h5 className="text-2xl sm:text-3xl font-bold">Fresheners</h5>
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
          <div
            onClick={() => navigate("/catagory")}
            className="min-h-[220px] sm:min-h-[260px] lg:min-h-[50vh] border-b border-secondary card5-img overflow-hidden"
          >
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
