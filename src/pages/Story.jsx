import React from "react";
import DynamicIconTabler from "@/components/ui/DynamicIconTabler";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Text3DFlip from "@/components/ui/text-3d-flip";

const Story = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 start", "0.1 start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);

  return (
    <>
      <section className="border-x border-b font-gilroy pt-20 lg:pt-0">
        <div className="w-full h-full flex justify-center items-center lg:flex-row flex-col">
          <div className="w-full flex justify-center items-center flex-col border-b lg:border-none">
            <div className="w-full flex justify-center items-center flex-col gap-2 px-8 pt-8 pb-3 text-center">
              <h4 className="text-2xl lg:text-4xl font-bold">Our Story</h4>
              <h3 className="font-dancing text-2xl lg:text-4xl">About</h3>
              <h4 className="text-3xl lg:text-5xl font-bold">Flowr Bouquets</h4>
              <p className="text-center">
                Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
                Spread Joy with Our Online Flower Delivery Service
              </p>
            </div>

            <div className="w-full flex flex-wrap justify-center items-center gap-5 sm:gap-6 px-5 py-5 cursor-pointer pb-8 lg:pb-0">
              <div className="p-2 border-2 hover:bg-light-gray rounded-full">
                <DynamicIconTabler
                  name={"IconBrandInstagram"}
                  color={"#121212"}
                  stroke={2}
                  size={24}
                />
              </div>
              <div className="p-2 border-2 hover:bg-light-gray rounded-full">
                <DynamicIconTabler
                  name={"IconBrandFacebook"}
                  color={"#121212"}
                  stroke={2}
                  size={24}
                />
              </div>
              <div className="p-2 border-2 hover:bg-light-gray rounded-full">
                <DynamicIconTabler
                  name={"IconBrandX"}
                  color={"#121212"}
                  stroke={2}
                  size={24}
                />
              </div>
              <div className="p-2 border-2 hover:bg-light-gray rounded-full">
                <DynamicIconTabler
                  name={"IconBrandTelegram"}
                  color={"#121212"}
                  stroke={2}
                  size={24}
                />
              </div>
              <div className="p-2 border-2 hover:bg-light-gray rounded-full">
                <DynamicIconTabler
                  name={"IconBrandLinkedin"}
                  color={"#121212"}
                  stroke={2}
                  size={24}
                />
              </div>
            </div>
          </div>
          <div className="w-full border-l">
            <img
              src="/images/about4.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full flex justify-center items-center gap-2 flex-col p-8 border-y lg:px-30 text-center">
          <h6 className="text-sm font-semibold uppercase">Our story</h6>
          <h4 className="text-4xl font-bold">Founders Passion</h4>
          <p className="text-sm">
            Flowr LuxeBouquets was founded in 2010 by Natalia Zelinska with the
            goal of bringing unique and exquisite bouquets to the people of
            Kyiv. Natalia has always had a passion for flowers and design, and
            his vision was to create a local floral studio that would specialize
            in the creation and delivery of fresh, beautiful, and distinctive
            bouquets.
          </p>
        </div>

        <div className="w-full h-full flex justify-center items-start flex-col lg:flex-row border-b">
          <div ref={ref} className="w-full h-full overflow-hidden border-r">
            <motion.img
              src="/images/about3.jpg"
              alt=""
              style={{ scale }}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full sticky top-14">
            <div className="w-full px-8 lg:px-14 flex flex-col justify-start items-start gap-4 py-14">
              <h4 className="text-4xl font-bold">Expertly Crafted Bouquets</h4>
              <p className="text-sm">
                At Flowr LuxeBouquets, we take pride in our team of talented and
                experienced florists who carefully select each bloom, ensuring
                that only the freshest and most stunning flowers make it into
                our bouquets. We work directly with farms to source the highest
                quality flowers, and our skilled florists expertly craft each
                bouquet to perfection.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-start flex-col-reverse lg:flex-row border-b">
          <div className="w-full sticky top-14">
            <div className="w-full px-8 lg:px-14 py-14 flex flex-col justify-start items-start gap-4">
              <h4 className="text-4xl font-bold">Bouquets, Gifts & Ambiance</h4>
              <p className="text-sm">
                In addition to our stunning bouquets, we also offer a collection
                of dried bouquets, house plants, and fragrant candles from
                luxury brands to create the perfect ambiance. We believe that
                sending flowers, plants, and gifts should be easy and
                stress-free, which is why we offer same or next-day delivery
                throughout Kyiv.
              </p>
            </div>
          </div>
          <div ref={ref} className="w-full h-full overflow-hidden border-l">
            <motion.img
              src="/images/about2.jpg"
              alt=""
              style={{ scale }}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-start flex-col lg:flex-row">
          <div ref={ref} className="w-full h-full overflow-hidden border-r">
            <motion.img
              src="/images/about1.jpg"
              alt=""
              style={{ scale }}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full sticky top-14">
            <div className="w-full px-8 lg:px-14 py-14 flex flex-col justify-start items-start gap-4 ">
              <h4 className="text-4xl font-bold">Making Every Day Special</h4>
              <p className="text-sm">
                Our mission is simple: to make every day special and memorable
                for our customers. We are dedicated to providing the highest
                quality flowers, exceptional customer service, and a seamless
                online experience that will make you feel confident and
                satisfied with your purchase.Thank you for choosing Kyiv
                LuxeBouquets. We look forward to bringing joy and happiness to
                your life with our beautiful bouquets and gifts.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full border-t p-8 lg:px-50 py-12 text-center flex flex-col justify-center items-center gap-3">
          <h4 className="text-4xl font-bold">Discover Our Beautiful Bouquets</h4>
          <p className="text-xm">
            Explore our collection of exquisite bouquets and surprise your loved
            ones with the perfect gift. Click the button below to start shopping
          </p>
          <button className="text-md px-8 py-3 bg-secondary text-primary uppercase flex justify-center items-center"><Text3DFlip rotateDirection="top">Shop now</Text3DFlip></button>
        </div>
      </section>
    </>
  );
};

export default Story;
