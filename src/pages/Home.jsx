//==COMPONENT IMPORTS==
import CTA from "@/components/HomeUI/CTA";
import Hero from "@/components/HomeUI/Hero";
import HowItWorks from "@/components/HomeUI/HowItWorks";
import Stats from "@/components/HomeUI/Stats";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <CTA />
    </>
  );
}

export default Home;
