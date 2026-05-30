import DynamicIcon from "@/components/ui/DynamicIcon";
import Text3DFlip from "@/components/ui/text-3d-flip";
import React from "react";
import { useState } from "react";

const Navbar = ({ ref }) => {
  const [navToggle, setNavToggle] = useState(true);
  const NAVITEMS = ["Sign In", "Shop", "Service", "Contact", "About Us"];

  const handleMenuToggle = () => {
    setNavToggle((prev) => !prev);
  };
  return (
    <>
      <div
        ref={ref}
        className="w-full bg-primary font-gilroy font-bold flex justify-between items-center border border-secondary fixed z-100"
      >
        <div className="w-[25vw] lg:flex justify-center items-center hidden">
          <button className="w-full py-6 flex justify-center items-center">
            <Text3DFlip rotateDirection="top">Shop</Text3DFlip>
          </button>
          <button className="w-full py-6 border-x border-secondary flex justify-center items-center">
            <Text3DFlip rotateDirection="top">Contact</Text3DFlip>
          </button>
        </div>
        <div className="w-[25vw] lg:flex justify-center items-center hidden">
          <button className="w-full py-6 border-x border-secondary flex justify-center items-center">
            <Text3DFlip rotateDirection="top">Sign in</Text3DFlip>
          </button>
          <button className="w-full py-6 flex justify-center items-center">
            <Text3DFlip rotateDirection="top">Cart</Text3DFlip>
          </button>
        </div>
        <div className="w-full flex justify-between items-center border border-secondary lg:hidden fixed top-0 bg-primary z-1000">
          <div
            onClick={handleMenuToggle}
            className={`p-4 border-r border-secondary`}
          >
            <DynamicIcon name={"Menu"} />
          </div>
          <div className="p-4 border-l border-secondary">
            <DynamicIcon name={"ShoppingBag"} />
          </div>
        </div>
        <div
          className={`w-full absolute top-0 left-0 z-2000 lg:hidden opacity-0 ${navToggle ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <div
            onClick={handleMenuToggle}
            className={`p-4 border border-secondary bg-primary`}
          >
            <DynamicIcon name={"X"} />
          </div>
          {NAVITEMS.map((i) => (
            <div
              key={i}
              className="p-5 bg-primary text-xl font-bold border-x border-b"
            >
              <Text3DFlip rotateDirection="top">{i}</Text3DFlip>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
