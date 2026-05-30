import DynamicIcon from "@/components/ui/DynamicIcon";
import Text3DFlip from "@/components/ui/text-3d-flip";
import React, { useState } from "react";

const Subscription = () => {
  const PURPOSE = [
    {
      title: "For Yourself",
      desc: "The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!",
    },
    {
      title: "AS a Gift",
      desc: "Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing.",
    },
    {
      title: "For Business",
      desc: "Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part.",
    },
  ];

  const PROCESS = [
    {
      title: "Choose a Plan",
      desc: "Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.",
    },
    {
      title: "Frequency & Duration",
      desc: "Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different needs, and we aim to provide flexible subscription options that cater to your specific preferences..",
    },
    {
      title: "Pay Once",
      desc: "After entering your contact and delivery information and paying for your subscription, you can sit back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved ones",
    },
  ];

  const PLAN = [
    {
      img: "/images/flw10.jpeg",
      title: "Classic",
      id: 50,
      tid: 60,
      select: [
        "Price $45",
        "Best for a budget",
        "Glass vase with first delivery",
        "Luxury candle with your first delivery",
        "Save up to 28%",
      ],
    },
    {
      img: "/images/flw8.jpeg",
      title: "Seasonal",
      id: 30,
      tid: 40,
      select: [
        "Price $65",
        "Best seasonal selections",
        "Glass vase with first delivery",
        "Luxury candle with your first delivery",
        "Save up to 28%",
      ],
    },
    {
      img: "/images/flw9.jpeg",
      title: "Luxe",
      id: 10,
      tid: 20,
      select: [
        "Price $95",
        "Premium arrangement",
        "Premium vase with first delivery",
        "Luxury candle delivery",
        "Save up to 30%",
      ],
    },
  ];

  const [quantityNm, setQuantityNm] = useState(0);
  return (
    <>
      <section>
        <div className="w-full h-full border-b border-x font-gilroy flex flex-col lg:flex-row justify-center items-start">
          <div className="w-full lg:w-1/2 h-full border-r">
            <div className="relative z-10">
              <img
                src="/images/flw-sub1.avif"
                alt=""
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full p-8 lg:p-14 flex flex-col justify-center items-start gap-2">
            <h4 className="text-4xl font-bold">Flower Subscriptions</h4>
            {PURPOSE.map((i) => (
              <div key={i.title}>
                <h5 className="text-md font-semibold">{i.title}</h5>
                <ul className="list-disc translate-x-4">
                  <li className="text-md">{i.desc}</li>
                </ul>
              </div>
            ))}
            <button className="uppercase border px-4 py-3 flex justify-center items-center hover:bg-secondary hover:text-primary">
              <Text3DFlip rotateDirection="top">explore plans</Text3DFlip>
            </button>
          </div>
        </div>

        <div className="font-gilroy w-full h-full flex justify-center lg:flex-row flex-col items-start border-x border-secondary border-b text-secondary">
          <div className="w-full lg:w-[50vw] h-full p-8 lg:p-14 bg-primary sticky top-14 self-start border-b lg:border-none">
            <h4 className="w-full h-full text-2xl md:text-3xl lg:text-5xl font-bold">
              How does it work ?
            </h4>
          </div>

          <div className="w-full lg:w-[50vw] grid grid-cols-1 border-l border-secondary">
            {PROCESS.map((i) => (
              <div
                key={i.title}
                className="w-full h-auto p-8 lg:p-14 border-b border-secondary"
              >
                <h4 className="text-2xl font-bold pb-2">{i.title}</h4>
                <p className="text-xl">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-full border-b border-x font-gilroy flex flex-col-reverse lg:flex-row justify-center items-start">
          <div className="w-full lg:w-1/2 h-full p-8 lg:p-14 flex flex-col justify-center items-start gap-4">
            <h6 className="text-sm font-bold uppercase">
              build your subscription
            </h6>
            <h4 className="text-3xl font-bold ">Select a Plan</h4>
            <p>
              Enjoy free shipping on every order and save up to 30%. Every
              bouquet we deliver is carefully curated to ensure it arrives fresh
              and stunning. To modify, pause, or cancel your subscription,
              simply log in to your account dashboard. You're in complete
              control of your flower delivery experience.
            </p>
            <div className="w-full flex flex-col justify-center items-center gap-4">
              {PLAN.map((i) => (
                <div key={i.id}>
                  <div className="w-full flex justify-center items-start flex-col lg:flex-row border-x border-t border-gray">
                    <img
                      src={i.img}
                      alt=""
                      className="w-full lg:w-63 object-cover border-r border-gray"
                    />
                    <div className="w-full flex flex-col justify-start items-start gap-1 p-5">
                      <h6 className="font-bold text-lg">{i.title}</h6>
                      <ul className="list-disc translate-x-4">
                        {i.select.map((e) => (
                          <li key={i.tid}>{e}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button className="w-full flex justify-center items-center text-xl font-medium bg-secondary text-primary py-2 bprder-x uppercase">
                    <Text3DFlip rotateDirection="top">Select</Text3DFlip>
                  </button>
                </div>
              ))}
            </div>

            <div className="w-full border-y border-gray py-6 flex flex-col justify-center items-start gap-3">
              <h4 className="text-2xl font-bold">
                How often do you want flowers delivered?
              </h4>
              <p className="text-sm">Select the delivery frequency</p>
              <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-2">
                <button className="w-full border py-2 hover:bg-secondary hover:text-primary flex justify-center items-center uppercase">
                  <Text3DFlip rotateDirection="top">Monthly</Text3DFlip>
                </button>
                <button className="w-full border py-2 hover:bg-secondary hover:text-primary flex justify-center items-center uppercase">
                  <Text3DFlip rotateDirection="top">bi - weekly</Text3DFlip>
                </button>
                <button className="w-full border py-2 hover:bg-secondary hover:text-primary flex justify-center items-center uppercase">
                  <Text3DFlip rotateDirection="top">weekly</Text3DFlip>
                </button>
              </div>
            </div>

            <div className="w-full border-b border-gray py-4 flex flex-col justify-center items-start gap-3">
              <h4 className="text-2xl font-bold">
                How many deliveries would you like?
              </h4>
              <p className="text-sm">
                Pay once and do not worry about flowers, our bouquets will be
                beautiful and on time, as many times as you need{" "}
              </p>
              <div className="flex justify-start items-center border">
                <button
                  disabled={quantityNm === 0 ? true : false}
                  onClick={() => {
                    setQuantityNm((prev) => prev - 1);
                  }}
                  className="p-2 border-r cursor-pointer"
                >
                  <DynamicIcon name={"Minus"} strokeWidth={1.5} size={18} />
                </button>
                <div className="px-6">{quantityNm}</div>
                <button
                  onClick={() => {
                    setQuantityNm((prev) => prev + 1);
                  }}
                  className="p-2 border-l cursor-pointer"
                >
                  <DynamicIcon name={"Plus"} strokeWidth={1.5} size={18} />
                </button>
              </div>
            </div>
              <button className="w-full cursor-pointer text-xl py-3 bg-secondary text-primary flex justify-center items-center uppercase">
                <Text3DFlip rotateDirection="top">checkout</Text3DFlip>
              </button>
          </div>
          <div className="w-full lg:w-1/2 h-full border-r lg:sticky top-0">
            <div className="relative z-10">
              <img
                src="/images/flw-sub2.webp"
                alt=""
                className="w-full h-[600px] object-cover border-l"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscription;
