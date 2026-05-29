import Text3DFlip from '@/components/ui/text-3d-flip';
import React from 'react'

const Navbar = ({ref}) => {
  return (
    <>
      <div
        ref={ref}
        className="w-full bg-primary font-gilroy font-bold flex justify-between items-center border border-secondary fixed z-10000"
      >
        <div className="w-[25vw] flex justify-center items-center">
          <button className="px-12 py-6">
            <Text3DFlip rotateDirection="top">Shop</Text3DFlip>
          </button>
          <button className="px-12 py-6 border-x border-secondary">
            <Text3DFlip rotateDirection="top">Contact</Text3DFlip>
          </button>
        </div>
        <div className="w-[25vw] flex justify-center items-center">
          <button className="px-12 py-6 border-x border-secondary">
            <Text3DFlip rotateDirection="top">Sign in</Text3DFlip>
          </button>
          <button className="px-12 py-6">
            <Text3DFlip rotateDirection="top">Cart</Text3DFlip>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar