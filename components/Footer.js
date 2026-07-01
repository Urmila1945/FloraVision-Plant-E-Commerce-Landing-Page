import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-full bg-[#111A0B] text-white py-16 px-6 md:px-16">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:justify-between gap-12 items-start">
        <div className="flex flex-col gap-10 max-w-[420px]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-[94px] h-[94px] relative"
                style={{
                  filter: `
                    drop-shadow(0px 2.32px 1.85px rgba(0, 0, 0, 0.0439)) 
                    drop-shadow(0px 5.39px 4.31px rgba(0, 0, 0, 0.0439))
                  `
                }}
              >
                <Image
                  src="/images/plant.png.png"
                  alt="FloraVision Logo"
                  width={94}
                  height={94}
                  priority
                  className="object-contain"
                />
              </div>
              <h2 className="font-sans font-bold text-[36px] tracking-tight text-white">
                FloraVision.
              </h2>
            </div>
            <p className="font-sans font-normal text-[18px] leading-relaxed text-gray-300 opacity-90">
              "From lush indoor greens to vibrant outdoor blooms, our plants
              are crafted to thrive and elevate your living environment."
            </p>
          </div>
          <div className="flex w-[230px] justify-between font-extrabold text-[24px] text-white leading-none tracking-normal">
            <Link href="#" className="hover:opacity-80 transition-opacity">FB</Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">TW</Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">LI</Link>
          </div>
        </div>
        <div className="flex flex-col min-w-[160px]">
          <h3 className="font-bold text-[20px] mb-6 text-white tracking-wide">
            Quick Link's
          </h3>
          <div className="flex flex-col gap-4 text-[16px] text-gray-300">
            <Link href="#" className="underline underline-offset-4 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#" className="underline underline-offset-4 hover:text-white transition-colors">
              Type's Of plant's
            </Link>
            <Link href="#" className="underline underline-offset-4 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="#" className="underline underline-offset-4 hover:text-white transition-colors">
              Privacy
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full min-w-[320px] md:max-w-[400px] w-full gap-16 md:gap-24 items-stretch md:items-end">
          <div className="w-full">
            <h3 className="font-bold text-[20px] mb-6 text-white tracking-wide md:text-left">
              For Every Update.
            </h3>
            <div className="w-full h-[54px] border border-gray-600 rounded flex items-center p-1 bg-transparent focus-within:border-white transition-colors">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 h-full bg-transparent px-4 text-[15px] outline-none text-white placeholder:text-gray-500"
              />
              <button className="h-full px-6 bg-white text-black font-bold text-[13px] tracking-wider rounded-sm hover:bg-gray-200 transition-colors uppercase">
                Subscribe
              </button>
            </div>
          </div>
          <p className="text-left md:text-right text-[14px] text-gray-400 whitespace-nowrap">
            FloraVision © all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
