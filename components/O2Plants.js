import React from 'react';
import Image from 'next/image';
const O2Plants = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center relative z-20 mt-[80px] mb-[100px] overflow-hidden">
      <h2 
        className="text-[40px] md:text-[50px] lg:text-[55px] font-semibold text-white mb-12 md:mb-[80px] tracking-normal text-center relative w-fit mx-auto px-4 py-2 leading-none"
        style={{ textShadow: '0px 4px 12px rgba(0, 0, 0, 0.7)' }}
      >
        <svg className="absolute -left-4 -top-2 w-[48px] h-[48px] pointer-events-none" viewBox="0 0 48 48" fill="none">
          <path d="M0 45.5 V18.5 C0 9.111 6.611 2.5 16 2.5 H48" stroke="url(#bracketGradTL_o2)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="bracketGradTL_o2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#55B000" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="100%" stopColor="#4F7A08" />
            </linearGradient>
          </defs>
        </svg>
        <svg className="absolute -right-4 -bottom-2 w-[48px] h-[48px] pointer-events-none" viewBox="0 0 48 48" fill="none">
          <path d="M48 2.5 V29.5 C48 38.889 41.389 45.5 32 45.5 H0" stroke="url(#bracketGradBR_o2)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="bracketGradBR_o2" x1="48" y1="48" x2="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#55B000" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="100%" stopColor="#4F7A08" />
            </linearGradient>
          </defs>
        </svg>
        Our Best o2
      </h2>
      <div className="w-full max-w-[1600px] px-4 mx-auto">
        <div 
          className="w-full relative bg-white/5 backdrop-blur-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-2 duration-400"
          style={{ 
            aspectRatio: '1600 / 755', 
            containerType: 'inline-size',
            borderRadius: 'clamp(40px, 6vw, 92px)',
            padding: '3.75cqw'
          }}
        >
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: 'clamp(40px, 6vw, 92px)',
              padding: '3px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.44) 0%, rgba(0,0,0,0) 50%, rgba(255,255,255,0.33) 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
          <div 
            className="absolute z-20 pointer-events-none"
            style={{
              width: '54.81cqw',
              height: '54.81cqw',
              left: '-4.875cqw',
              top: '-7.75cqw',
              filter: `
                drop-shadow(0px -2.71px 2.21px rgba(0, 0, 0, 0.0478))
                drop-shadow(0px -6.52px 5.32px rgba(0, 0, 0, 0.065))
              `
            }}
          >
            <Image 
              src="/images/aglaonema.png" 
              alt="O2 Plant" 
              fill
              priority
              className="object-contain"
            />
          </div>
          <div 
            className="absolute z-10 text-white flex flex-col justify-center"
            style={{
              width: '50%',
              height: '100%',
              right: '0',
              top: '0',
              paddingLeft: '2.5cqw',
              paddingRight: '3.75cqw'
            }}
          >
            <h3 
              className="font-semibold text-white/75 leading-tight tracking-normal"
              style={{
                width: '46.18cqw',
                fontSize: '2.375cqw',
                marginBottom: '1.5cqw'
              }}
            >
              We Have Small And Best O2 Plants Collection's
            </h3>
            <div 
              className="flex flex-col"
              style={{
                width: '46.75cqw',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '1.75cqw',
                lineHeight: '100%',
                color: 'rgba(255, 255, 255, 0.75)',
                gap: '1.5cqw',
                marginBottom: '2cqw'
              }}
            >
              <p className="m-0">
                Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
              </p>
              <p className="m-0" style={{ height: '8.5cqw' }}>
                Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
              </p>
            </div>
            <div className="flex items-center justify-between" style={{ width: '46.75cqw' }}>
              <button 
                className="rounded-[3.25cqw] border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                style={{
                  width: '11.18cqw',
                  height: '3.43cqw',
                  fontSize: '1.375cqw'
                }}
              >
                Explore
              </button>
              <div 
                className="flex items-center text-white/50"
                style={{
                  gap: '1.625cqw',
                  fontSize: '1.375cqw'
                }}
              >
                <button className="hover:text-white transition-colors">&lt;</button>
                <span className="font-medium tracking-[0.2em]">01/04</span>
                <button className="hover:text-white transition-colors">&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-12">
        <div className="w-10 h-2.5 bg-white rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
      </div>
    </section>
  );
};
export default O2Plants;
