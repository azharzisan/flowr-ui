import React from "react";

const Choose = () => {
  return (
    <>
      <div className="font-gilroy w-full h-full flex justify-center items-start border-x border-secondary border-b text-secondary">
        <div className="w-[50vw] h-full p-14 sticky top-14 self-start">
          <h4 className="w-full h-full text-6xl font-bold">Why choose us ?</h4>
        </div>

        <div className="w-[50vw] grid grid-cols-1 border-l border-secondary">
          <div className="w-full h-[50vh] border-b p-14">
            <h4 className="text-3xl font-bold pb-2">Stylish bouquets by florists</h4>
            <p>
              At our floral studio, our professional florists craft the most
              elegant and stylish bouquets using only the freshest and highest
              quality materials available. We stay up-to-date with the latest
              floral design trends and offer unique arrangements that are sure
              to impress. Let us brighten up your day with our stunning bouquets
              and same-day delivery service.
            </p>
          </div>
          <div className="w-full h-[50vh] border-b p-14">
            <h4 className="text-3xl font-bold pb-2">On-time delivery</h4>
            <p>
              Never miss a moment with our on-time flower delivery service. Our
              couriers will deliver your bouquet personally, without boxes, to
              ensure it arrives in perfect condition. Trust us to deliver your
              thoughtful gift reliably.
            </p>
          </div>
          <div className="w-full h-[50vh] border-b p-14">
            <h4 className="text-3xl font-bold pb-2">Safe payment</h4>
            <p>
              You can feel secure when placing an order with us, as we use
              industry-standard security measures to protect your payment
              information. Your transaction will be safe and hassle-free, so you
              can shop with confidence.
            </p>
          </div>
          <div className="w-full h-[50vh] p-14">
            <h4 className="text-3xl font-bold pb-2">Subscription by your needs</h4>
            <p>With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
