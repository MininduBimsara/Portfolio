import AboutMe from "../../Components/AboutMe";
import ContactMe from "../../Components/ContactMe";
import Footer from "../../Components/Footer";
import HeroSection from "../../Components/HeroSection";
import MyPortfolio from "../../Components/MyPortfolio";
import MySkills from "../../Components/MySkills";
import Testimonial from "../../Components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}
