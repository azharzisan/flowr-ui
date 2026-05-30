import Cards from "@/components/ui/Cards";
import Text3DFlip from "@/components/ui/text-3d-flip";
import React from "react";

const Sevice = () => {
  return (
    <>
      <div className="font-gilroy">
        <div className=" w-full py-8 lg:py-12 text-center bg-primary border-x border-b border-secondary sticky top-14 self-start overflow-hidden z-20">
          <p className="text-2xl lg:text-4xl font-bold uppercase bg-primary">Our service</p>
        </div>
        <div className="w-full flex justify-center flex-col lg:flex-row items-center border-x border-secondary">
          <div className="w-full lg:w-[50vw] h-full border-r border-secondary">
            <img
              src="/images/flw-sub.avif"
              alt=""
              className="w-full h-[90vh] object-cover"
            />
          </div>
          <div className="w-full lg:w-[50vw] h-full flex justify-center items-center gap-4 flex-col p-14">
            <h6 className="text-sm font-semibold">SERVICE</h6>
            <h3 className="text-xl font-bold">Flower Subscriptions</h3>
            <p className="text-center">
              Experience the convenience and savings of regular flower
              deliveries with our flexible subscription service - up to 30% more
              profitable than one-time purchases.
            </p>
            <button className="inline-flex min-h-11 border border-secondary text-secondary uppercase px-5 py-3 hover:bg-secondary hover:text-primary">
              <Text3DFlip rotateDirection="top">Subscribe now</Text3DFlip>
            </button>
          </div>
        </div>
        <section
          className="relative min-h-[500px] flex items-center justify-center
                   bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/wedding.jpeg')" }}
        >
          <div className="absolute inset-0 bg-secondary/50" />

          <div className="relative z-10 text-center text-primary px-6 max-w-2xl mx-auto">
            <h1 className="text-5xl font-semibold mb-4">
              Wedding & Event Decor
            </h1>
            <p className="text-primary text-lg leading-relaxed mb-8">
              Let our team of expert florists and designers create stunning,
              on-trend floral décor for your special day.
            </p>
            <button className="border border-primary text-primary uppercase px-10 py-3 hover:bg-primary hover:text-secondary">
              <Text3DFlip rotateDirection="top">Inquire Now</Text3DFlip>
            </button>
          </div>
        </section>
        <div className="w-full bg-primary relative flex justify-center items-center flex-col gap-4 pt-26 pb-14 border border-secondary px-20">
          <img
            src="/images/google.png"
            alt=""
            className="w-[90px] absolute top-9 left-[50%] translate-x-[-50%]"
          />
          <h6 className="w-full text-center text-md uppercase font-semibold">
            Reviews
          </h6>
          <h3 className="w-full text-center text-2xl font-bold">
            Our Clients say
          </h3>
          <div className="w-full">
            <Cards />
          </div>
          <button className="px-5 py-3 border border-secondary text-secondary uppercase font-semibold hover:bg-secondary hover:text-primary">
            <Text3DFlip rotateDirection="top">Read reviews</Text3DFlip>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sevice;
