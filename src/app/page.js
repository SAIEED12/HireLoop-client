import Banner from "@/components/Banner";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";


export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <Banner/>
      <StatsSection/>
      <FeaturesSection/>
    </div>
  );
}
