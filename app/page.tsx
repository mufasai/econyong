import Header from "./components/header/page";
//import Features from "./components/features/page";
import HowItWorks from "./components/works/page";
import Partnership from "./components/partnership/page";
import CallToAction from "./components/action/page";
import Footer from "./components/footer/page";
import HeroSection from "./components/hero/page";
//import Results from "./components/result/page";
import { ResultSection } from "./components/result/page";
import MissionSection from "./components/mission/page";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />
      <ResultSection />
      <MissionSection />
      <HowItWorks />
      <Partnership />
      <CallToAction />
      <Footer />
    </div>
  );
}
