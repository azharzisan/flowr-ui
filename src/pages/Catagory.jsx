import React from "react";

const Catagory = () => {
  const CATAGORY = [
    { name: "Hibiscus", price: "40", image: "/images/flw10.jpeg" },
    { name: "Rosey", price: "60", image: "/images/gl2.jpg" },
    { name: "Sunflower", price: "30", image: "/images/fl2.webp" },
    { name: "Marine", price: "70", image: "/images/fl3.webp" },
    { name: "Joba", price: "90", image: "/images/fl4.jpg" },
    { name: "Lily", price: "140", image: "/images/fl5.avif" },
    { name: "WaterLily", price: "50", image: "/images/flw6.jpeg" },
    { name: "Daisy", price: "45", image: "/images/flw7.jpeg" },
    { name: "Tulip", price: "70", image: "/images/flw8.jpeg" },
    { name: "Orchid", price: "85", image: "/images/flw9.jpeg" },
  ];
  return (
    <>
      <section className="w-full h-full border-b border-x font-gilroy flex flex-col lg:flex-row justify-center items-start">
        <div className="w-full lg:w-1/2 h-full border-r sticky top-0 ">
          <div className="relative z-10">
            <img
              src="/images/cata-flw.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-secondary/60 flex justify-center items-center">
              <h4 className="text-6xl font-bold text-primary">Fresh Flowers</h4>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full grid grid-cols-1 md:grid-cols-2 divide-x divide-y divide-solid divide-secondary">
          {CATAGORY.map((i) => (
            <div
              key={i.name}
              className="w-full h-[50vh] relative cursor-pointer overflow-hidden"
            >
              <img
                src={i.image}
                alt=""
                className="w-full h-full object-cover hover:scale-110"
              />
              <div className="w-full h-auto absolute bottom-0 left-[50%] translate-x-[-50%] p-4">
                <div className="w-full h-auto bg-primary flex justify-center items-center border border-secondary">
                  <h4 className="w-full px-4 py-2 font-bold">{i.name}</h4>
                  <p className="border-l border-secondary px-4 py-2 font-bold text-primary bg-secondary">
                    ${i.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Catagory;
