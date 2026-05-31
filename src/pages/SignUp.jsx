import React from 'react'
import DynamicIconTabler from "@/components/ui/DynamicIconTabler";
import Text3DFlip from "@/components/ui/text-3d-flip";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="border-b font-gilroy pt-13 lg:pt-0">
        <div className="w-full h-full relative lg:flex lg:justify-center lg:items-end">
          <img
            src="/images/sign.jpg"
            alt=""
            className="w-full h-full absolute top-0 left-0 z-10 hidden lg:block"
          />
          <div className="w-full lg:w-[50vw] flex flex-col lg:mt-14 p-14 gap-4 border-x border-t relative z-20 backdrop-blur-3xl bg-primary/30">
            <h4 className="text-5xl font-bold">
              Greeting! Welcome to luxury gift shop.
            </h4>
            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-3 border outline-none"
            />
            <input
              type="password"
              placeholder="Create a Password"
              className="w-full px-4 py-3 border outline-none"
            />
            <button onClick={() => navigate("/")} className="w-full py-3 flex justify-center items-center bg-secondary text-primary cursor-pointer uppercase">
              <Text3DFlip rotateDirection="top">Create</Text3DFlip>
            </button>
            <div className="w-full flex justify-between items-center gap-2">
              <div className="w-full h-0.5 bg-secondary"></div>
              <p className="font-semibold">Or</p>
              <div className="w-full h-0.5 bg-secondary"></div>
            </div>
            <div className="w-full flex justify-center items-center flex-col lg:flex-row gap-3">
              <button className="w-full px-4 py-3 text-lg font-bold text-secondary flex justify-center items-center gap-2 border cursor-pointer">
                Create with
                <DynamicIconTabler name={"IconBrandAppleFilled"} />
              </button>
              <button className="w-full px-4 py-3 text-lg font-bold text-secondary flex justify-center items-center gap-2 border cursor-pointer">
                Create with
                <DynamicIconTabler name={"IconBrandGoogleFilled"} />
              </button>
            </div>
            <h4 className="w-full text-center text-sm font-bold">
              Already have an account?{" "}
              <span onClick={() => navigate("/account")} className="underline cursor-pointer">Sign In</span>
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp