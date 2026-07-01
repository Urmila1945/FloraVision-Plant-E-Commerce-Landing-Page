import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import TrendingPlants from '@/components/TrendingPlants';
import TopSellingPlants from '@/components/TopSellingPlants';
import O2Plants from '@/components/O2Plants';
import CustomerReviews from '@/components/CustomerReviews';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div className="font-sans text-[#F5F5F5] min-h-screen flex flex-col items-center relative overflow-hidden bg-[#0A1A0F]">
      <div className="absolute top-[-125px] left-1/2 transform -translate-x-1/2 w-full max-w-[1728px] h-[2592px] z-0 pointer-events-none">
        <img 
          src="/images/fa0765984e44f85e1a04562f820f1492949a1257.jpg" 
          alt="Background"
          className="w-full h-full object-cover opacity-60 mix-blend-lighten"
        />
      </div>
      <div className="w-[1280px] flex flex-col">
        <Navbar />
        <main>
          <HeroBanner />
          <TrendingPlants />
          <TopSellingPlants />
          <CustomerReviews />
          <O2Plants />
        </main>
        <Footer />
      </div>
    </div>
  );
}
