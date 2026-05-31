import React from "react";
import Text3DFlip from "./text-3d-flip";
import DynamicIcon from "./DynamicIcon";

const ShippingStep = ({ onNext, onPrev }) => {
  const FIELD = [
    { placeholder: "Recipients Name", type: "text" },
    { placeholder: "Recipients Phone Number", type: "text" },
    { placeholder: "Date of Order", type: "date" },
    { placeholder: "EIR Code", type: "text" },
    { placeholder: "Street", type: "text" },
    { placeholder: "Apartment Details", type: "text" },
  ];
  return (
    <div>
      <div className="w-full py-4 flex flex-col gap-3">
        <div className="w-full flex justify-between items-center pb-2 border-b cursor-pointer">
          <div className="w-full flex justify-start items-center gap-2">
            <p className="text-2xl font-semibold text-secondary">1 / </p>
            <p className="text-2xl font-semibold text-secondary">
              Contact Information
            </p>
            <DynamicIcon name={"CircleCheckBig"} size={20} strokeWidth={2} />
          </div>
          <DynamicIcon
            name={"SquarePen"}
            size={20}
            strokeWidth={2}
            color={"#808080"}
          />
        </div>
        <h3 className="text-2xl font-bold">2 / Shipping Details</h3>
        {FIELD.map((i) => (
          <input
            key={i.placeholder}
            type={i.type}
            name=""
            id=""
            placeholder={i.placeholder}
            className="w-full px-4 py-3 border border-gray"
          />
        ))}
      </div>
      <div className="w-full flex justify-center items-center flex-col lg:flex-row gap-3">
        <button
          className="w-full px-4 py-3 bg-secondary text-primary flex justify-center items-center uppercase"
          onClick={onPrev}
        >
          <Text3DFlip rotateDirection="top">Back to contact</Text3DFlip>
        </button>
        <button
          className="w-full px-4 py-3 bg-secondary text-primary flex justify-center items-center uppercase"
          onClick={onNext}
        >
          <Text3DFlip rotateDirection="top">Continue to payment</Text3DFlip>
        </button>
      </div>

      <div className="w-full flex justify-between items-center py-2 border-b border-light-gray cursor-pointer">
        <div className="w-full flex justify-start items-center gap-2">
          <p className="text-2xl font-semibold text-light-gray">3 / </p>
          <p className="text-2xl font-semibold text-light-gray">Payment</p>
          {/* <DynamicIcon name={"CircleCheckBig"} size={20} strokeWidth={2} /> */}
        </div>
        {/* <DynamicIcon
          name={"SquarePen"}
          size={20}
          strokeWidth={2}
          color={"#808080"}
        /> */}
      </div>
    </div>
  );
};

export default ShippingStep;
