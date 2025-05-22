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
  const heroSectionHeight = 100;

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
    <div className="min-h-screen bg-gray-900">
      {/* Original Hero Section at the top - full width */}
      <div className="w-full min-h-screen">
        <HeroSection />
      </div>

      {/* Split Layout - Fixed Left Panel & Scrollable Right Content */}
      <div className="flex flex-col md:flex-row relative min-h-screen">
        {/* Fixed Left Panel */}
        <Fixedpanel
          scrollPosition={scrollPosition}
          heroSectionHeight={heroSectionHeight}
        />

        {/* Scrollable Right Content */}
        <div className="w-full md:w-3/5 lg:w-2/3 bg-gray-900">
          {/* Remove empty div wrappers and ensure proper spacing */}
          <AboutMe />
          <MySkills />
          <MyPortfolio />
          {/* Uncomment if you want testimonials */}
          {/* <Testimonial /> */}
          <ContactMe />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
