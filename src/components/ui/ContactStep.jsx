import React from "react";
import Text3DFlip from "./text-3d-flip";

const ContactStep = ({ onNext }) => {
  const FIELD = ["Your Name", "Your Email", "Your Placeholder"];
  return (
    <>
      <div className="w-full p-8 bg-light-gray">
        <p>
          Already have an account?{" "}
          <span className="underline cursor-pointer">Log in</span> for faster
          checkout
        </p>
      </div>
      <div className="w-full py-4 flex flex-col gap-3">
        <h3 className="text-2xl font-bold">1 / Contact Information</h3>
        {FIELD.map((i) => (
          <input
            key={i}
            type="text"
            name=""
            id=""
            placeholder={i}
            className="w-full px-4 py-3 border border-gray"
          />
        ))}
        <button
          className="w-full px-4 py-3 bg-secondary text-primary flex justify-center items-center uppercase"
          onClick={onNext}
        >
          <Text3DFlip rotateDirection="top">continue to shipping</Text3DFlip>
        </button>
      </div>

      <div className="w-full flex justify-between items-center py-2 border-b border-light-gray cursor-pointer">
        <div className="w-full flex justify-start items-center gap-2">
          {/* <DynamicIcon name={"CircleCheckBig"} size={20} strokeWidth={2}/> */}
          <p className="text-2xl font-semibold text-light-gray">2 / </p>
          <p className="text-2xl font-semibold text-light-gray">
            Shipping Details
          </p>
        </div>
        {/* <DynamicIcon name={"SquarePen"} size={20} strokeWidth={2}/> */}
      </div>
      <div className="w-full flex justify-between items-center py-2 border-b border-light-gray cursor-pointer">
        <div className="w-full flex justify-start items-center gap-2">
          {/* <DynamicIcon name={"CircleCheckBig"} size={20} strokeWidth={2}/> */}
          <p className="text-2xl font-semibold text-light-gray">3 / </p>
          <p className="text-2xl font-semibold text-light-gray">Payment</p>
        </div>
        {/* <DynamicIcon name={"SquarePen"} size={20} strokeWidth={2}/> */}
      </div>
    </>
  );
};

export default ContactStep;
