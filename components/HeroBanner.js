import React from 'react';
const HeroBanner = () => {
  return (
    <section className="relative w-full min-h-[1000px] flex flex-col lg:flex-row items-start justify-between pt-0 pb-[100px] px-6 lg:pl-[43px] lg:pr-[52px] gap-8 overflow-hidden">
      <div className="flex flex-col items-start mt-[120px] lg:mt-[252px] w-full lg:w-[55%] max-w-[802px] z-30 shrink-0">
        <h1 
          className="text-white mb-6 flex items-center whitespace-nowrap"
          style={{ 
            maxWidth: '798px',
            width: '100%',
            opacity: 0.75,
            fontFamily: 'Inter, sans-serif', 
            fontWeight: 600,
            fontSize: 'clamp(40px, 5.5vw, 118px)',
            lineHeight: '100%',
            letterSpacing: '0%'
          }}
        >
          Earth's Exhale
        </h1>
        <p 
          className="mb-10 text-[18px] text-white/75 font-light leading-relaxed max-w-[600px] whitespace-normal"
          style={{
            fontFamily: 'Inter, sans-serif',
          }}
        >
          "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
        </p>
        <div className="flex items-center gap-6">
          <button className="w-[170px] h-[60px] border-[2px] border-white rounded-[14px] text-[18px] font-medium text-[#F5F5F5] hover:bg-white hover:text-black transition-all duration-300">
            Buy Now
          </button>
          <button className="flex items-center gap-4 group cursor-pointer">
            <div className="w-[60px] h-[60px] rounded-full border-[2px] border-white flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
              <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
            <span 
              className="text-[24px] font-normal text-[#D7D7D7] group-hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-indie)", letterSpacing: '0.05em' }}
            >
              Live Demo...
            </span>
          </button>
        </div>
      </div>
      <div className="w-full max-w-[550px] lg:max-w-[512px] lg:w-[42%] relative flex items-start lg:justify-end justify-center z-30 mt-[60px] lg:mt-[119px]">
        <div 
          className="relative w-full max-w-[512px]"
          style={{ 
            aspectRatio: '512 / 719',
            containerType: 'inline-size'
          }}
        >
          <div 
            className="absolute bottom-0 left-0 w-full bg-white/[0.05] backdrop-blur-[25px] shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
            style={{ height: '89.57%', borderRadius: '15cqw' }}
          >
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: '15cqw',
                padding: '1px',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.44) 0%, rgba(0,0,0,0) 50%, rgba(255,255,255,0.33) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <div 
              className="absolute z-10 text-left flex flex-col justify-center"
              style={{ 
                top: '59.6%',
                left: '12.89%',
                width: '74.22%',
                height: '40.4%'
              }}
            >
              <p 
                className="mb-1"
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '4.5cqw',
                  lineHeight: '100%'
                }}
              >
                Indoor Plant
              </p>
              <div className="flex justify-between items-center mb-8">
                <h2 
                  className="text-white m-0"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '7.42cqw',
                    lineHeight: '100%'
                  }}
                >
                  Aglaonema plant
                </h2>
                <svg className="w-8 h-8 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="flex items-center justify-between">
                <button 
                  className="border border-white text-white font-medium hover:bg-white hover:text-black transition-colors duration-300"
                  style={{
                    borderRadius: '2.7cqw',
                    padding: '2.5cqw 6cqw',
                    fontSize: '3.5cqw'
                  }}
                >
                  Buy Now
                </button>
                <div className="flex gap-2 items-center">
                  <div className="bg-white rounded-full" style={{ width: '6cqw', height: '1.5cqw' }}></div>
                  <div className="bg-white/50 rounded-full" style={{ width: '1.5cqw', height: '1.5cqw' }}></div>
                  <div className="bg-white/50 rounded-full" style={{ width: '1.5cqw', height: '1.5cqw' }}></div>
                </div>
              </div>
            </div>
          </div>
          <img 
            src="/images/aglaonema.png" 
            alt="Aglaonema Plant" 
            className="absolute pointer-events-none object-contain z-20"
            style={{
              top: '0%', 
              left: '6.64%', 
              width: '89.65%', 
              height: '63.84%',
              filter: 'drop-shadow(0px -2.71px 2.21px rgba(0, 0, 0, 0.0478)) drop-shadow(0px -6.52px 5.32px rgba(0, 0, 0, 0.065))'
            }}
          />
        </div>
      </div>
      
      <div 
        className="absolute z-40 bg-white/[0.05] backdrop-blur-[20px] flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        style={{
          width: '409px',
          height: '237px',
          top: '705px',
          left: '43px',
          borderRadius: '45px',
          paddingTop: '37px',
          paddingLeft: '27px',
          paddingRight: '27px'
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: '45px',
            padding: '1px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #666666 100%)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
        <div className="flex items-center gap-4 mb-4 relative z-10">
          <div 
            className="flex-shrink-0"
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '86px',
              boxShadow: '0px 1.95px 6.11px rgba(0, 0, 0, 0.101)',
              overflow: 'hidden'
            }}
          >
            <img src="/images/72419c36cae7ef6f9c25b97e39a231fc9059935c.png" alt="Ronnie Hamill" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="text-[20px] font-medium text-white mb-1">Ronnie Hamill</h4>
            <div className="flex items-center gap-1">
              <span className="text-[#FFC107] text-[14px]">★★</span>
              <div className="flex -space-x-2 ml-2">
                <div className="w-[22px] h-[22px] rounded-full bg-[#6C5CE7] flex items-center justify-center text-[10px] text-white border-[1.5px] border-[#222222] z-30">S</div>
                <div className="w-[22px] h-[22px] rounded-full overflow-hidden border-[1.5px] border-[#222222] z-20">
                  <img src="/images/04f4a376d1869488dd43f1a5e57a36f5cdf73be4.png" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="w-[22px] h-[22px] rounded-full bg-[#FFB020] flex items-center justify-center border-[1.5px] border-[#222222] z-10">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3l9 15H3l9-15z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[16px] text-[#D7D7D7] font-light leading-relaxed relative z-10">
          I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
        </p>
      </div>

    </section>
  );
};
export default HeroBanner;
