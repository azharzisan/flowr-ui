import Text3DFlip from "@/components/ui/text-3d-flip";
import React from "react";
import DynamicIconTabler from "@/components/ui/DynamicIconTabler";

const Footer = () => {
    const SHOP = [
      "All Products",
      "Fresh Flowers",
      "Dried Flowers",
      "Live Plants",
      "Designer Vases",
      "Aroma Candles",
      "Fresheners Diffuser",
    ];
    const SERVICES = ["Flower Subscriptions", "Wedding & Event Decor"]
    const ABOUT = ["Our Story","Flowr Blogs"]
    const POLICY = ["Shipping", "Return Policy", "Terms & Conditions", "Privacy Policy"]
  return (
    <>
      <div className="w-full font-gilroy grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch border-x border-b border-secondary bg-light-gray/50">
        <div className="w-full min-h-[320px] border-b md:border-r lg:border-b-0 border-secondary flex justify-start flex-col items-start p-5 sm:p-8 gap-4">
          <p>
            Remember to offer beautiful flowers from Kyiv LuxeBouquets
            Valentines Day, Mothers Day, Christmas... Reminds you 7 days before.
            No spam or sharing your address
          </p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Email"
            className="w-full border border-secondary px-4 py-3 outline-none"
          />
          <button className="w-full bg-secondary text-primary font-medium px-4 py-3 uppercase flex justify-center items-center">
            <Text3DFlip rotateDirection="top">Remind</Text3DFlip>
          </button>
        </div>
        <div className="w-full min-h-[320px] border-b lg:border-r lg:border-b-0 border-secondary flex flex-col justify-start items-start gap-3 p-5 sm:p-8">
          <h5 className="text-xl font-semibold text-dark-gray">Contact Us</h5>
          <div>
            <h3 className="text-sm text-gray">Address</h3>
            <div className="font-semibold">
              <Text3DFlip rotateDirection="top">
                15/4 Khreshchatyk Street, Kyiv
              </Text3DFlip>
            </div>
          </div>
          <div>
            <h3 className="text-sm text-gray">Phone</h3>
            <div className="font-semibold">
              <Text3DFlip rotateDirection="top">+353 89 2312212</Text3DFlip>
            </div>
          </div>
          <div>
            <h3 className="text-sm text-gray">General Enquiry</h3>
            <div className="font-semibold break-all sm:break-normal">
              <Text3DFlip rotateDirection="top">
                inquiry@flowrbouquets.com
              </Text3DFlip>
            </div>
          </div>
          <div>
            <h3 className="text-lg text-dark-gray font-semibold">Follow Us</h3>
            <div className="w-full flex flex-wrap justify-start items-center gap-5 sm:gap-6 py-2 cursor-pointer">
              <DynamicIconTabler
                name={"IconBrandInstagram"}
                color={"#121212"}
                stroke={1.5}
                size={26}
              />
              <DynamicIconTabler
                name={"IconBrandFacebook"}
                color={"#121212"}
                stroke={1.5}
                size={26}
              />
              <DynamicIconTabler
                name={"IconBrandX"}
                color={"#121212"}
                stroke={1.5}
                size={26}
              />
              <DynamicIconTabler
                name={"IconBrandTelegram"}
                color={"#121212"}
                stroke={1.5}
                size={26}
              />
              <DynamicIconTabler
                name={"IconBrandLinkedin"}
                color={"#121212"}
                stroke={1.5}
                size={26}
              />
            </div>
          </div>
        </div>
        <div className="w-full min-h-[320px] border-b md:border-r md:border-b-0 border-secondary flex flex-col justify-start items-start gap-4 p-5 sm:p-8">
          <div className="flex flex-col gap-1 cursor-pointer">
            <h3 className="text-xl font-semibold text-dark-gray">Shop</h3>
            {SHOP.map((i) => (
              <div className="font-bold text-sm" key={i}>
                <Text3DFlip rotateDirection="top">{i}</Text3DFlip>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1 cursor-pointer">
            <h3 className="text-xl font-semibold text-dark-gray">Services</h3>
            {SERVICES.map((i) => (
              <div className="font-bold text-sm" key={i}>
                <Text3DFlip rotateDirection="top">{i}</Text3DFlip>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full min-h-[320px] flex flex-col justify-start items-start gap-4 p-5 sm:p-8">
          <div className="flex flex-col gap-1 cursor-pointer">
            <h3 className="text-xl font-semibold text-dark-gray">About Us</h3>
            {ABOUT.map((i) => (
              <div className="font-bold text-sm" key={i}>
                <Text3DFlip rotateDirection="top">{i}</Text3DFlip>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1 cursor-pointer">
            <h3 className="text-xl font-semibold text-dark-gray">Policy</h3>
            {POLICY.map((i) => (
              <div className="font-bold text-sm" key={i}>
                <Text3DFlip rotateDirection="top">{i}</Text3DFlip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
