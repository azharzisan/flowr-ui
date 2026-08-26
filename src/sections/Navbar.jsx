import DynamicIcon from "@/components/ui/DynamicIcon";
import Text3DFlip from "@/components/ui/text-3d-flip";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ ref }) => {
  const navigate = useNavigate();
  const [navToggle, setNavToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);

  const handleMenuToggle = () => {
    setNavToggle((prev) => !prev);
  };

  const handleCartToggle = () => {
    setCartToggle((prev) => !prev);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling animation
    }
  };

  const NAVITEMS = [
    { name: "Sign In", navigate: () => navigate("/account") },
    { name: "Shop", navigate: () => navigate("/catagory") },
    { name: "Service", navigate: () => scrollToSection("service") },
    { name: "Contact", navigate: () => scrollToSection("contact") },
    { name: "About Us", navigate: () => navigate("/our-story") },
  ];
  return (
    <>
      <div
        ref={ref}
        className="w-full bg-primary font-gilroy font-bold flex justify-between items-center border border-secondary fixed z-100"
      >
        <div className="w-1/4 lg:flex justify-center items-center hidden">
          <button
            onClick={() => navigate("/catagory")}
            className="w-full py-6 flex justify-center items-center"
          >
            <Text3DFlip rotateDirection="top">Shop</Text3DFlip>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full py-6 border-x border-secondary flex justify-center items-center"
          >
            <Text3DFlip rotateDirection="top">Contact</Text3DFlip>
          </button>
        </div>
        <div className="w-1/4 lg:flex justify-center items-center hidden">
          <button
            onClick={() => navigate("/account")}
            className="w-full py-6 border-x border-secondary flex justify-center items-center"
          >
            <Text3DFlip rotateDirection="top">Sign in</Text3DFlip>
          </button>
          <button
            onClick={handleCartToggle}
            className="w-full relative py-6 flex justify-center items-center"
          >
            <Text3DFlip rotateDirection="top">Cart</Text3DFlip>
            <div className="w-3 h-3 bg-error animate-ping absolute bottom-0 left-0"></div>
            <div className="w-3 h-3 bg-error absolute bottom-0 left-0"></div>
          </button>
        </div>
        <div className="w-full flex justify-between items-center border border-secondary lg:hidden fixed top-0 bg-primary z-1000">
          <div
            onClick={handleMenuToggle}
            className={`p-4 border-r border-secondary`}
          >
            <DynamicIcon name={"Menu"} />
          </div>
          <div
            onClick={handleCartToggle}
            className="p-4 border-x relative border-secondary"
          >
            <DynamicIcon name={"ShoppingBag"} />
            <div className="w-3 h-3 bg-error rounded-full animate-ping absolute top-3 right-3"></div>
            <div className="w-3 h-3 bg-error rounded-full absolute top-3 right-3"></div>
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
              key={i.name}
              className="p-5 bg-primary text-xl font-bold border-x border-b"
            >
              <Text3DFlip
                rotateDirection="top"
                onClick={() => i.navigate()}
              >
                {i.name}
              </Text3DFlip>
            </div>
          ))}
        </div>
        <div
          className={`w-full flex justify-center items-center flex-col-reverse lg:flex-row absolute top-0 right-0 z-2000 opacity-0 ${cartToggle ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <div className="w-full lg:w-[50vw] h-screen backdrop-blur-xs"></div>
          <div className="w-full lg:w-[50vw] h-full lg:h-screen bg-primary">
            <div className="w-full flex justify-between items-center p-5 border">
              <h4>Shopping Cart</h4>
              <button onClick={handleCartToggle}>
                <DynamicIcon name={"X"} />
              </button>
            </div>
            <div className="w-full flex justify-between items-center p-5 border-x border-b">
              <div className="flex justify-start items-center gap-4">
                <img
                  src="/images/flw6.jpeg"
                  alt=""
                  className="w-30 h-30 object-cover border-gray border-2 "
                />
                <div>
                  <h4 className="text-2xl font-bold">Rosey</h4>
                  <p className="font-medium text-md">Quantity (1)</p>
                  <p className="text-xl">$80</p>
                </div>
              </div>
              <button className="cursor-pointer">
                <DynamicIcon name={"Trash"} size={20} color={"#f55f56"} />
              </button>
            </div>
            <div className="w-full flex justify-between items-center p-5 border-x border-b">
              <h4>Subtotal</h4>
              <h4 className="text-xl font-bold">$80</h4>
            </div>
            <div className="border-x border-b px-5 pt-5 pb-20">
              <p className="text-gray">Gift Message</p>
            </div>
            <h4 className="w-full text-center border-x border-b font-medium px-14 py-5">
              Shipping & taxes calculated at checkout Free standard shipping
              within Flowr
            </h4>
            <button onClick={() => navigate("/checkout")} className="w-full h-auto text-primary bg-secondary text-2xl uppercase font-medium py-4 flex justify-center items-center">
              <Text3DFlip rotateDirection="top">Checkout</Text3DFlip>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
