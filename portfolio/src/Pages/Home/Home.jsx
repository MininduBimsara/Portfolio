import AboutMe from "../../Components/AboutMe";
import ContactMe from "../../Components/ContactMe";
import Footer from "../../Components/Footer";
import HeroSection from "../../Components/HeroSection";
import MyPortfolio from "../../Components/MyPortfolio";
import MySkills from "../../Components/MySkills";
import Testimonial from "../../Components/Testimonials";
import Fixedpanel from "../../Components/FixedPanel";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroSectionHeight = 100; // Approximate height of your hero section in pixels - adjust if needed

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* Original Hero Section at the top - full width */}
      <HeroSection />

      {/* Split Layout - Fixed Left Panel & Scrollable Right Content */}
      <div className="flex flex-col md:flex-row relative">
        {/* Fixed Left Panel */}
        <Fixedpanel
          scrollPosition={scrollPosition}
          heroSectionHeight={heroSectionHeight}
        />

        {/* Scrollable Right Content */}
        <div className="w-full md:w-3/5 lg:w-2/3 p-0">
          {/* Your existing components */}
          <div className="">
            <AboutMe />
          </div>

          <div className="">
            <MySkills />
          </div>

          <div className="">
            <MyPortfolio />
          </div>

          {/* <div className="">
            <Testimonial />
          </div> */}

          <div className="">
            <ContactMe />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
