import DynamicIconTabler from "@/components/ui/DynamicIconTabler";
import Text3DFlip from "@/components/ui/text-3d-flip";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-stretch lg:flex-row text-secondary font-gilroy border-x border-b border-secondary">
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="w-full min-h-[320px] lg:min-h-[50vh] border-b border-secondary px-5 py-10 sm:px-8 lg:p-14 flex justify-center items-center flex-col gap-4">
            <h4 className="w-full text-2xl sm:text-3xl font-bold text-center">
              To Contact Us
            </h4>
            <p className="w-full text-base sm:text-lg text-center">
              We will call you back
            </p>
            <div className="w-full flex justify-start items-center gap-4 flex-col">
              <input
                type="text"
                name=""
                id=""
                placeholder="+353 89 XXXXXXX"
                className="w-full max-w-sm border border-secondary px-5 py-3 text-center sm:text-left"
              />
              <button className="w-full max-w-sm sm:w-auto bg-secondary text-primary border px-6 py-3 flex justify-center items-center">
                <Text3DFlip rotateDirection="top">BOOK A CALL</Text3DFlip>
              </button>
            </div>
          </div>
          <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 items-stretch">
            <div className="w-full min-h-[260px] sm:min-h-[300px] lg:min-h-[50vh] border-b sm:border-b-0 sm:border-r border-secondary flex flex-col">
              <h4 className="w-full h-auto py-4 text-center text-lg sm:text-xl font-semibold border-b border-secondary">
                Phone
              </h4>
              <div className="w-full flex-1 min-h-[200px] sm:min-h-[240px] flex justify-center items-center flex-col gap-4 px-5 text-xl sm:text-2xl text-center">
                <p>+353 87 4532856</p>
                <p>+353 98 4204384</p>
              </div>
            </div>
            <div className="w-full min-h-[260px] sm:min-h-[300px] lg:min-h-[50vh] border-secondary flex flex-col">
              <h4 className="w-full py-4 text-center text-lg sm:text-xl font-semibold border-b border-secondary">
                Address
              </h4>
              <div className="w-full flex-1 min-h-[200px] sm:min-h-[240px] flex justify-center items-center flex-col gap-4 px-5 text-center">
                <p className="uppercase text-base sm:text-lg">
                  opening hours: 8 to 11 p.m.
                </p>
                <p className="text-xl sm:text-2xl font-bold">
                  15/4 Khreshchatyk Street, Kyiv
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:border-l border-secondary flex justify-center items-center flex-col">
          <div className="w-full h-full overflow-hidden">
            <img
              src="/images/contactimg.webp"
              alt=""
              className="w-full h-[260px] sm:h-[360px] lg:h-[calc(100vh-5px)] object-cover"
            />
          </div>
          <div className="w-full flex justify-center flex-col lg:flex-row items-center border-t border-secondary">
            <div className="w-full h-full flex justify-center items-center py-4 text-lg sm:text-xl font-semibold text-primary bg-secondary">
              <Text3DFlip rotateDirection="top">FOLLOW US</Text3DFlip>
            </div>
            <div className="w-full flex flex-wrap justify-center items-center gap-5 sm:gap-6 px-5 py-5 cursor-pointer">
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
