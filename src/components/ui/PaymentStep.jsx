import React from "react";
import Text3DFlip from "./text-3d-flip";
import DynamicIcon from "./DynamicIcon";
import DynamicIconTabler from "./DynamicIconTabler";

const PaymentStep = ({onPrev}) => {
  const FIELD = [
    { placeholder: "Card Number", type: "text" },
    { placeholder: "MM/YY", type: "text" },
    { placeholder: "CVV Code", type: "text" },
  ];
  return (
    <>
      <div>
        <div className="w-full py-4 flex flex-col gap-3">
          <div className="w-full flex justify-between items-center pb-2 border-b border-light-gray cursor-pointer">
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

          <div className="w-full flex justify-between items-center pb-2 border-b border-light-gray cursor-pointer">
            <div className="w-full flex justify-start items-center gap-2">
              <p className="text-2xl font-semibold text-secondary">2 / </p>
              <p className="text-2xl font-semibold text-secondary">
                Shipping Details
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

          <h3 className="text-2xl font-bold">3 / Payment</h3>
          <div className="w-full flex justify-between items-center">
            <p className="font-bold">Pay by Card</p>
            <p className="flex text-gray justify-center items-center gap-1">
              Secured Payment{" "}
              <DynamicIcon name={"ShieldCheck"} size={16} color={"#808080"} />
            </p>
          </div>
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
            className="w-full px-4 py-3 bg-secondary cursor-pointer text-primary flex justify-center items-center uppercase"
            onClick={onPrev}
          >
            <Text3DFlip rotateDirection="top">Back to shipping</Text3DFlip>
          </button>
          <button className="w-full px-4 py-3 bg-secondary cursor-pointer text-primary flex justify-center items-center uppercase">
            <Text3DFlip rotateDirection="top">Confirm Order</Text3DFlip>
          </button>
        </div>
        <h4 className="font-semibold py-4">Or pay with:</h4>
        <div className="w-full flex justify-center items-center flex-col lg:flex-row gap-3">
          <button
            className="w-full px-4 py-3 text-lg font-bold bg-primary text-secondary flex justify-center items-center gap-2 border cursor-pointer"
            onClick={onPrev}
          >
            <DynamicIconTabler name={"IconBrandAppleFilled"} />
            Apple Pay
          </button>
          <button className="w-full px-4 py-3 text-lg font-bold bg-primary text-secondary flex justify-center items-center gap-2 border cursor-pointer">
            <DynamicIconTabler name={"IconBrandGoogleFilled"} />
            Google Pay
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentStep;
