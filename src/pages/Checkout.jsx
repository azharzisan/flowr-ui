import ContactStep from "@/components/ui/ContactStep";
import DynamicIcon from "@/components/ui/DynamicIcon";
import PaymentStep from "@/components/ui/PaymentStep";
import ShippingStep from "@/components/ui/ShippingStep";
import Text3DFlip from "@/components/ui/text-3d-flip";
import React from "react";
import { useState } from "react";

const Checkout = () => {
  const STEPS = ["Invoices", "Shipping", "Payment"];
  const [step, setStep] = useState(0);
  const [orderSumMenu, setOrderSumMenu] = useState(false);

  const handleOrderSumMenu = () => {
    setOrderSumMenu((prev) => !prev);
  };
  return (
    <>
      <section className="border-x border-b font-gilroy pt-13 lg:pt-0">
        <div className="w-full flex justify-center items-start flex-col-reverse lg:flex-row">
          <div className="w-full h-full p-6 lg:p-10 flex flex-col gap-3 border-b lg:border-none">
            <div className="w-full flex gap-2 text-gray">
              {STEPS.map((s, i) => (
                <span
                  key={s}
                  className={i === step ? "text-secondary font-semibold" : ""}
                >
                  {i > 0 && <span className="mr-2 font-semibold">/</span>}
                  {s}
                </span>
              ))}
            </div>
            <div>
              {step === 0 && <ContactStep onNext={() => setStep(1)} />}
              {step === 1 && (
                <ShippingStep
                  onNext={() => setStep(2)}
                  onPrev={() => setStep(0)}
                />
              )}
              {step === 2 && <PaymentStep onPrev={() => setStep(1)} />}
            </div>
          </div>
          <div
            className={`w-full md:h-180 p-6 lg:p-10 bg-light-gray/30 border-l border-b lg:border-b-0`}
          >
            <div className={`w-full flex justify-between items-center`}>
              <div className="flex justify-center items-center gap-2">
                <DynamicIcon name={"ShoppingCart"} size={18} />
                <h4 className="w-ful text-lg">Order Summary</h4>
              </div>
              <button
                onClick={handleOrderSumMenu}
                className={`${orderSumMenu ? "block" : "hidden"} lg:hidden`}
              >
                <DynamicIcon name={"ChevronDown"} />
              </button>
              <button
                onClick={handleOrderSumMenu}
                className={`${orderSumMenu ? "hidden" : "block"} lg:hidden`}
              >
                <DynamicIcon name={"ChevronRight"} />
              </button>
            </div>
            <div
              className={`${orderSumMenu ? "block" : "hidden"} lg:block`}
            >
              <div className="w-full flex justify-between items-center py-4 border-b border-light-gray">
                <div className="w-full flex justify-center lg:items-center flex-col lg:flex-row gap-4">
                  <img
                    src="/images/flw8.jpeg"
                    alt=""
                    className="w-40 h-40 border object-cover"
                  />
                  <div className="w-full flex justify-between items-center">
                    <div className="w-full flex flex-col gap-1">
                      <h4 className="text-3xl font-semibold">Rosey</h4>
                      <p>Quantity (1)</p>
                    </div>
                    <h4 className="text-2xl font-bold">$90</h4>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-2 py-4 border-b border-light-gray">
                <h4 className="text-md font-bold">
                  If you have our gift card, enter the code to get discounts
                </h4>
                <div className="w-full flex justify-center items-center flex-col lg:flex-row gap-4">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your Gift Card"
                    className="w-full px-4 py-3 border text-secondary uppercase outline-none"
                  />
                  <button className="w-full px-4 py-3 bg-secondary text-primary uppercase flex justify-center items-center">
                    <Text3DFlip rotateDirection="top">APPLY</Text3DFlip>
                  </button>
                </div>
              </div>

              <div className="w-full flex flex-col gap-4 py-4 border-b border-light-gray">
                <div className="w-full flex justify-between items-center">
                  <h4>Subtotal</h4>
                  <p>$100.00</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <h4>Shipping Fee</h4>
                  <p>$0.00</p>
                </div>
              </div>

              <div className="w-full flex justify-between items-center py-4">
                <h4 className="text-xl font-semibold">Total</h4>
                <p>$100.00</p>
              </div>

              <p className="w-full flex text-secondary justify-center pt-10 items-center gap-1">
                Secured Checkout{" "}
                <DynamicIcon name={"ShieldCheck"} size={16} color={"#121212"} />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
