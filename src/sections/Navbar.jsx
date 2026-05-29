import React from 'react'

const Navbar = ({ref}) => {
  return (
    <>
      <div ref={ref} className="w-full bg-primary font-gilroy font-bold flex justify-between items-center border border-secondary fixed z-10000">
        <div className="w-[25vw] flex justify-center items-center">
          <button className="px-12 py-6">Shop</button>
          <button className="px-12 py-6 border-x border-secondary">Contact</button>
        </div>
        <div className="w-[25vw] flex justify-center items-center">
          <button className="px-12 py-6 border-x border-secondary">Sign in</button>
          <button className="px-12 py-6">Cart</button>
        </div>
      </div>
    </>
  );
}

export default Navbar