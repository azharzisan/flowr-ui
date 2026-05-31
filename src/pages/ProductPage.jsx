import Checkbox from "@/components/ui/Checkbox";
import DynamicIcon from "@/components/ui/DynamicIcon";
import Text3DFlip from "@/components/ui/text-3d-flip";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [quantityNm, setQuantityNm] = useState(0);
  const VASE_IMG = [
    "/images/vase1.jpg",
    "/images/vase2.jpg",
    "/images/vase3.webp",
  ];
  const navigate = useNavigate()
  return (
    <>
      <section className="w-full h-full border-b border-x font-gilroy flex flex-col lg:flex-row justify-center items-start">
        <div className="w-full lg:w-1/2 h-full border-r">
          <div className="relative z-10">
            <img
              src="/images/flw7.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full p-4 lg:p-9 flex flex-col justify-start items-start gap-x-3 gap-y-2.5">
          <h4 className="font-semibold">
            Fresh Flowers / <span className="text-gray">Rosey</span>
          </h4>
          <h2 className="text-4xl font-bold">Rosey - $70</h2>
          <p>
            Large exceptional bouquet composed of a selection of David Austin
            roses, known for their beauty and subtle fragrance. The bouquet is
            accompanied by seasonal foliage which will enhance these sublime
            flowers even
          </p>
          <div className="flex justify-center items-start flex-col">
            <h4 className="text-md font-semibold">Quantity</h4>
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
          <div className="w-full flex justify-between items-center">
            <h4 className="text-sm lg:text-lg">Excellent combination with:</h4>
            <h4 className="text-sm lg:text-lg text-gray"><span className="text-error">*</span>Vase not included</h4>
          </div>
          <div className="flex justify-start items-center gap-3 overflow-x-scroll">
            {VASE_IMG.map((i) => (
              <img
                key={i}
                src={i}
                alt=""
                className="w-30 h-30 object-cover border hover:scale-102 hover:cursor-zoom-in"
              />
            ))}
          </div>
          <h4 className="font-bold">Price Options</h4>
          <div className="flex justify-start items-center gap-2">
            <Checkbox />
            <p>One time purchase. Price $100</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Checkbox />
            <p>Subscribe now, and save 25% on this order. </p>
          </div>
          <button onClick={() => navigate("/checkout")} className="w-full cursor-pointer text-xl py-3 bg-secondary text-primary flex justify-center items-center uppercase">
            <Text3DFlip rotateDirection="top">Add to basket</Text3DFlip>
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
