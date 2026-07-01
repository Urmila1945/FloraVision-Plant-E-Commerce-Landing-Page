import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="relative z-50 flex h-[90px] w-full items-center justify-between bg-transparent px-[60px] text-white">
      <div className="flex items-center gap-3">
        <div
          className="relative h-[48px] w-[48px] flex-shrink-0"
        >
          <img
            src="/images/plant.png.png"
            alt="Earth Exhale Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="font-sans text-[22px] font-bold leading-none text-white tracking-tight">
          Earth Exhale
        </h2>
      </div>
      <div 
        className="hidden items-center gap-[40px] text-[24px] font-normal md:flex"
        style={{ fontFamily: "var(--font-indie)" }}
      >
        <Link href="/" className="transition-opacity hover:opacity-80">
          Home
        </Link>
        <Link href="/shop" className="transition-opacity hover:opacity-80">
          Shop
        </Link>
        <Link href="/plant-care" className="transition-opacity hover:opacity-80">
          Plant Care
        </Link>
        <Link href="/about" className="transition-opacity hover:opacity-80">
          About us
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <button className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center transition-transform hover:scale-110">
          <img src="/images/743cbcfb287217bc1d51247b1ef3fbccb15f8b6c.png" alt="Search" className="w-full h-full object-contain" />
        </button>
        <button className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center transition-transform hover:scale-110 relative">
          <img src="/images/0cc12c30ffef0466f2779edadcefe9250d10e34e.png" alt="Cart" className="w-full h-full object-contain" />
        </button>
        <button className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center transition-transform hover:scale-110">
          <svg
            className="h-[24px] w-[24px] text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
