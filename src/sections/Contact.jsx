import DynamicIconTabler from "@/components/ui/DynamicIconTabler";
import Text3DFlip from "@/components/ui/text-3d-flip";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center text-secondary font-gilroy border-x border-b border-secondary">
        <div className="w-[50vw] h-full">
          <div className="w-full h-[50vh] border-b border-secondary p-14 flex justify-center items-start flex-col gap-4">
            <h4 className="text-5xl font-bold">To Contact Us</h4>
            <p className="text-lg">We will call you back</p>
            <div className="w-full flex justify-start items-center gap-4">
              <input
                type="text"
                name=""
                id=""
                placeholder="+353 89 XXXXXXX"
                className="border border-secondary px-3 py-2"
              />
              <button className="bg-secondary text-primary border px-4 py-2">
                <Text3DFlip rotateDirection="top">BOOK A CALL</Text3DFlip>
              </button>
            </div>
          </div>
          <div className="w-full h-[50vh] flex justify-center items-start">
            <div className="w-full h-full">
              <h4 className="w-full py-4 text-center text-xl font-semibold border-b">
                Phone
              </h4>
              <div className="w-full flex justify-center items-center flex-col gap-4 text-xl pt-20">
                <p>+353 87 4532856</p>
                <p>+353 98 4204384</p>
              </div>
            </div>
            <div className="w-full h-full border-l border-secondary">
              <h4 className="w-full py-4 text-center text-xl font-semibold border-b">
                Address
              </h4>
              <div className="w-full flex justify-center items-center flex-col gap-4 pt-20">
                <p className="uppercase text-md ">
                  opening hours: 8 to 11 p.m.
                </p>
                <p className="text-xl font-bold">
                  15/4 Khreshchatyk Street, Kyiv
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50vw] h-full border-l border-secondary flex justify-center items-center flex-col">
          <div className="w-full h-full overflow-hidden">
            <img
              src="/images/contactimg.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex justify-center items-center border-t border-secondary">
            <div className="w-full h-full flex justify-center items-center text-xl font-semibold text-primary bg-secondary">
              <Text3DFlip rotateDirection="top">FOLLOW US</Text3DFlip>
            </div>
            <div className="w-full flex justify-center items-center gap-6 py-5 cursor-pointer">
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
      </div>
    </>
  );
};

export default Contact;
