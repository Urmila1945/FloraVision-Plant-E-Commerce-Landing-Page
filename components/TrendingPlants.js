import React from 'react';
const TrendingPlants = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center relative z-20 mt-[80px]">
      <div className="w-full flex justify-center mb-[100px]">
        <div className="relative inline-flex items-center justify-center px-10 py-6">
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="trendy-bracket-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#55B000" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#4F7A08" />
              </linearGradient>
            </defs>
            <path 
              d="M 60 4 L 80 4 A 16 16 0 0 1 96 20 L 96 40" 
              stroke="url(#trendy-bracket-gradient)" 
              strokeWidth="5" 
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            <path 
              d="M 40 96 L 20 96 A 16 16 0 0 1 4 80 L 4 60" 
              stroke="url(#trendy-bracket-gradient)" 
              strokeWidth="5" 
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <h2 
            className="text-[54px] font-bold text-white leading-none tracking-normal z-10"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our Trendy plants
          </h2>
        </div>
      </div>
      <div className="w-full max-w-[1619px] mx-auto flex flex-col gap-12 md:gap-[100px] relative z-20 px-4 md:px-8 mt-[100px]">
        
        {/* FIRST CARD */}
        <div 
          className="relative w-full overflow-visible"
          style={{ aspectRatio: '1619 / 526', containerType: 'inline-size' }}
        >
          <div 
            className="absolute inset-0 bg-white/[0.05] backdrop-blur-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.45)] flex flex-row items-center z-0"
            style={{ borderRadius: '9.32cqw', padding: '3.7cqw' }}
          >
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: '9.32cqw',
                padding: '2px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.27) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.33) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            
            <div className="w-1/2 h-full relative">
              <div 
                className="absolute pointer-events-none z-10"
                style={{
                  left: '-1.23cqw',
                  bottom: '0',
                  width: '37.12cqw',
                  height: '45.21cqw',
                }}
              >
                <img 
                  src="/images/b48312dbddc890f7f35ef3964ae1e7900b89782c.png" 
                  alt="Plantain Lilies" 
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
            
            <div 
              className="w-1/2 flex flex-col relative z-20"
              style={{ paddingLeft: '6.17cqw' }}
            >
              <h3 
                className="text-white mb-4"
                style={{
                  width: '31.37cqw',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '2.34cqw',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
              >
                For Your Desks Decorations
              </h3>
              <p 
                className="text-[#D7D7D7] font-light leading-relaxed"
                style={{ fontSize: '1.11cqw', marginBottom: '2cqw', maxWidth: '31.62cqw' }}
              >
                I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
              </p>
              <span 
                className="font-normal text-white block"
                style={{ fontSize: '1.97cqw', marginBottom: '2cqw' }}
              >
                Rs. 599/-
              </span>
              <div className="flex gap-4 items-center">
                <button 
                  className="border border-white hover:bg-white hover:text-black transition-colors font-medium text-white"
                  style={{
                    padding: '0.74cqw 2.47cqw',
                    borderRadius: '0.61cqw',
                    fontSize: '1.11cqw'
                  }}
                >
                  Explore
                </button>
                <button 
                  className="border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors group"
                  style={{
                    width: '3.21cqw',
                    height: '3.21cqw',
                    borderRadius: '0.61cqw'
                  }}
                >
                  <img src="/images/0cc12c30ffef0466f2779edadcefe9250d10e34e.png" alt="Cart" className="w-[45%] h-[45%] object-contain group-hover:invert transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND CARD */}
        <div 
          className="relative w-full overflow-visible"
          style={{ aspectRatio: '1619 / 526', containerType: 'inline-size' }}
        >
          <div 
            className="absolute inset-0 bg-white/[0.05] backdrop-blur-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.45)] flex flex-row items-center z-0"
            style={{ borderRadius: '9.32cqw', padding: '3.7cqw' }}
          >
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: '9.32cqw',
                padding: '2px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.27) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.33) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            
            <div 
              className="w-1/2 flex flex-col relative z-20"
              style={{ paddingRight: '6.17cqw', paddingLeft: '3.7cqw' }}
            >
              <h3 
                className="text-white mb-4"
                style={{
                  width: '31.37cqw',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '2.34cqw',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
              >
                For Your Desks Decorations
              </h3>
              <p 
                className="text-[#D7D7D7] font-light leading-relaxed"
                style={{ fontSize: '1.11cqw', marginBottom: '2cqw', width: '45.21cqw' }}
              >
                The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
              </p>
              <span 
                className="font-normal text-white block"
                style={{ fontSize: '1.97cqw', marginBottom: '2cqw' }}
              >
                Rs. 399/-
              </span>
              <div className="flex gap-4 items-center">
                <button 
                  className="border border-white hover:bg-white hover:text-black transition-colors font-medium text-white"
                  style={{
                    padding: '0.74cqw 2.47cqw',
                    borderRadius: '0.61cqw',
                    fontSize: '1.11cqw'
                  }}
                >
                  Explore
                </button>
                <button 
                  className="border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors group"
                  style={{
                    width: '3.21cqw',
                    height: '3.21cqw',
                    borderRadius: '0.61cqw'
                  }}
                >
                  <img src="/images/0cc12c30ffef0466f2779edadcefe9250d10e34e.png" alt="Cart" className="w-[45%] h-[45%] object-contain group-hover:invert transition-all" />
                </button>
              </div>
            </div>

            <div className="w-1/2 h-full relative">
              <div 
                className="absolute pointer-events-none z-10"
                style={{
                  right: '0',
                  bottom: '-2.47cqw',
                  width: '33.97cqw',
                  height: '40.14cqw',
                }}
              >
                <img 
                  src="/images/95e728282f4fb901ee2edc80783c2fbd7df490c2.png" 
                  alt="Agave Succulent" 
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrendingPlants;
