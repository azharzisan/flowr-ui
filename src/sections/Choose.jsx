import React from "react";

const Choose = () => {
  const CHOOSE = [
    {
      title: "Stylish bouquets by florists",
      desc: "At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.",
    },
    {
      title: "On-time delivery",
      desc: "Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.",
    },
    {
      title: "Safe payment",
      desc: "You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.",
    },
    {
      title: "Subscription by your needs",
      desc: "With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.",
    },
  ];
  return (
    <>
      <div className="font-gilroy w-full h-full flex justify-center lg:flex-row flex-col items-start border-x border-secondary border-b text-secondary">
        <div className="w-full lg:w-[50vw] h-full p-8 lg:p-14 bg-light-gray lg:bg-primary sticky top-14 self-start border-b lg:border-none">
          <h4 className="w-full h-full text-2xl md:text-3xl lg:text-5xl font-bold">Why choose us ?</h4>
        </div>

        <div className="w-full lg:w-[50vw] grid grid-cols-1 border-l border-secondary">
          {CHOOSE.map((i) => (
            <div key={i.title} className="w-full h-auto p-8 lg:p-14 border-b border-secondary">
              <h4 className="text-2xl font-bold pb-2">{i.title}</h4>
              <p className="text-xl">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Choose;
