import React from "react";
const reviewsData = [
  {
    id: 1,
    name: "Shelly Russel",
    stars: 5,
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
    avatarSrc: "/images/04f4a376d1869488dd43f1a5e57a36f5cdf73be4.png",
  },
  {
    id: 2,
    name: "Lula Rolfson",
    stars: 5,
    text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    avatarSrc: "/images/8af347a65acb49fcb29cfac2ba705f2b27151f3f.jpg",
  },
  {
    id: 3,
    name: "Carol Huels",
    stars: 5,
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    avatarSrc: "/images/a5003c9c04bdc265d997eb88ecb49b2ed88c8428.png",
  },
];
const CustomerReviews = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center relative z-20 mt-[80px]">
      <h2 className="text-[54px] font-bold text-white mb-[80px] text-center leading-tight">
        Customer Review
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] w-full">
        {reviewsData.map((review) => (
          <div 
            key={review.id} 
            className="w-full h-full bg-white/[0.08] backdrop-blur-[20px] rounded-[55px] p-[50px] flex flex-col relative shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-4 duration-400"
          >
            <div 
              className="absolute inset-0 rounded-[55px] pointer-events-none"
              style={{
                padding: '2px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 50%, rgba(255,255,255,0.2) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <div className="flex items-center gap-6 mb-8 relative z-10">
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-white">
                <img src={review.avatarSrc} alt={review.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-[24px] font-bold text-white">{review.name}</h4>
                <div className="flex text-yellow-400 text-lg mt-2">
                  {'★'.repeat(review.stars)}
                  {'☆'.repeat(5 - review.stars)}
                </div>
              </div>
            </div>
            <p className="text-[18px] text-[#D7D7D7] font-light leading-relaxed">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CustomerReviews;
