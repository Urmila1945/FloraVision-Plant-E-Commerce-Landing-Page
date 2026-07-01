import React from 'react';
const topSellingPlantsData = [
  { id: 1, name: 'Aglaonema plant', desc: 'The Aglaonema plant, commonly known as Chinese Evergreen, known for its attractive foliage and ease of care.', price: 'Rs. 300/-', imageSrc: '/images/Rose Gold Feminine Calligraphy Monogram Logo(15).png.png' },
  { id: 2, name: 'Plantain Lilies', desc: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes.', price: 'Rs. 380/-', imageSrc: '/images/b48312dbddc890f7f35ef3964ae1e7900b89782c.png' },
  { id: 3, name: 'Cactus', desc: 'It is known for their ability to thrive in arid environments.', price: 'Rs. 259/-', imageSrc: '/images/6d90916507b2b3030961c99c6af0ebac97b86c78.png' },
  { id: 4, name: 'Swiss cheese Plant', desc: 'It is a popular tropical houseplant known for its distinctive, perforated leaves.', price: 'Rs. 400/-', imageSrc: '/images/5196aba58f7006d90ec0712ac1d01688cde1a537.png' },
  { id: 5, name: 'Sansevieria plant', desc: 'The Sansevieria plant, commonly known as Snake Plant, known for its attractive foliage and ease of care.', price: 'Rs. 450/-', imageSrc: '/images/eb0351a5771ed55c7f3454bcce697dfe63237769.png' },
  { id: 6, name: 'Agave plant', desc: 'The Agave plant, commonly known as Century Plant, known for its attractive foliage and ease of care.', price: 'Rs. 359/-', imageSrc: '/images/444fba49a2674d2262c5455bcc501cb91b314490.png' },
];
const TopSellingPlants = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center relative z-20 mt-[80px]">
      <h2 
        className="text-[40px] md:text-[50px] lg:text-[60px] font-medium text-white mb-12 md:mb-20 tracking-tight text-center relative w-fit mx-auto px-4 py-2"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        <svg className="absolute -left-4 -top-2 w-[48px] h-[48px] pointer-events-none" viewBox="0 0 48 48" fill="none">
          <path d="M0 45.5 V18.5 C0 9.111 6.611 2.5 16 2.5 H48" stroke="url(#bracketGradTL)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="bracketGradTL" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#55B000" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="100%" stopColor="#4F7A08" />
            </linearGradient>
          </defs>
        </svg>
        <svg className="absolute -right-4 -bottom-2 w-[48px] h-[48px] pointer-events-none" viewBox="0 0 48 48" fill="none">
          <path d="M48 2.5 V29.5 C48 38.889 41.389 45.5 32 45.5 H0" stroke="url(#bracketGradBR)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="bracketGradBR" x1="48" y1="48" x2="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#55B000" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="100%" stopColor="#4F7A08" />
            </linearGradient>
          </defs>
        </svg>
        Our Top Selling Plants
      </h2>
      <div className="w-full flex justify-center pb-[50px]">
        <div className="grid grid-cols-3 gap-4 md:gap-[49px] gap-y-12 md:gap-y-[120px] w-full max-w-[1634px] mx-auto px-4">
          {topSellingPlantsData.map((plant) => (
            <div 
              key={plant.id} 
              className="relative w-full"
              style={{ 
                aspectRatio: '512 / 757',
                containerType: 'inline-size'
              }}
            >
              <div 
                className="absolute bottom-0 left-0 w-full bg-white/[0.05] backdrop-blur-[25px] shadow-[0_9px_20px_rgba(0,0,0,0.25)]"
                style={{ height: '85.07%', borderRadius: '15cqw' }}
              >
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    borderRadius: '15cqw',
                    padding: '2px',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 50%, rgba(255,255,255,0.2) 100%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <h3 
                  className="absolute m-0 flex items-center z-10"
                  style={{ 
                    top: '62.62%', 
                    left: '12.89%', 
                    width: '72.66%', 
                    height: '6.08%',
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '7.42cqw', 
                    fontWeight: 400,
                    color: 'rgba(255, 255, 255, 0.75)', 
                    lineHeight: '100%' 
                  }}
                >
                  {plant.name}
                </h3>
                <div 
                  className="absolute m-0 flex items-center z-10"
                  style={{ 
                    top: '69.88%', 
                    left: '12.89%', 
                    width: '72.66%', 
                    height: '15.32%',
                  }}
                >
                  <p className="m-0" style={{
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '4.69cqw', 
                    fontWeight: 400,
                    color: 'rgba(255, 255, 255, 0.75)', 
                    lineHeight: '100%' 
                  }}>
                    {plant.desc}
                  </p>
                </div>
                <div 
                  className="absolute m-0 flex items-center z-10"
                  style={{ 
                    top: '86.66%', 
                    left: '12.89%', 
                    width: '33.01%', 
                    height: '6.08%',
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '7.42cqw', 
                    fontWeight: 400,
                    color: 'rgba(255, 255, 255, 0.75)', 
                    lineHeight: '100%' 
                  }}
                >
                  {plant.price}
                </div>
                <button 
                  className="absolute flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group z-10"
                  style={{ 
                    top: '86.53%', 
                    left: '76.17%', 
                    width: '9.38%', 
                    height: '6.34%',
                    borderRadius: '2.73cqw',
                    border: 'max(1px, 0.2cqw) solid rgba(255,255,255,0.4)'
                  }}
                >
                   <img src="/images/0cc12c30ffef0466f2779edadcefe9250d10e34e.png" alt="Cart" className="object-contain group-hover:invert transition-all" style={{ width: '41.6%', height: '41.6%' }} />
                </button>
              </div>
              <img 
                src={plant.imageSrc} 
                alt={plant.name} 
                className="absolute pointer-events-none object-contain z-20"
                style={{
                  top: '0%', 
                  left: '5.08%', 
                  width: '89.65%', 
                  height: '60.63%',
                  filter: 'drop-shadow(0px 2.32px 1.85px rgba(0, 0, 0, 0.0181)) drop-shadow(0px 5.39px 4.31px rgba(0, 0, 0, 0.025))'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TopSellingPlants;
