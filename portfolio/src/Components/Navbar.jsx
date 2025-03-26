import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observe sections and update activeSection
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Determine navbar background color based on active section
  const getNavbarBackground = () => {
    switch (activeSection) {
      case "heroSection":
        return "bg-blue-500";
      case "MyPortfolio":
        return "bg-green-500";
      case "AboutMe":
        return "bg-purple-500";
      case "testimonials":
        return "bg-red-500";
      case "Contact":
        return "bg-orange-500";
      default:
        return scrolled ? "bg-gray-800 shadow-lg" : "bg-transparent";
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 ${getNavbarBackground()}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/img/logo.svg" alt="Logo" className="h-8" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 rounded-md focus:outline-none"
          onClick={toggleNav}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              navActive ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              navActive ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              navActive ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-10">
          <ul className="flex space-x-10">
            <li>
              <Link
                activeClass="text-orange-500 font-medium"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-indigo-700 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-orange-500 font-medium"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-indigo-700 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-orange-500 font-medium"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-indigo-700 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="text-orange-500 font-medium"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonials"
                className="text-indigo-700 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
              >
                Testimonials
              </Link>
            </li>
          </ul>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="px-6 py-2.5 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 shadow-md"
          >
            Contact Me
          </Link>
        </div>

        {/* Navigation Links - Mobile */}
        {navActive && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg lg:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link
                  activeClass="text-orange-500 font-medium"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="heroSection"
                  className="text-indigo-700 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="text-orange-500 font-medium"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="MyPortfolio"
                  className="text-indigo-700 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                  onClick={closeMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  activeClass="text-orange-500 font-medium"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="AboutMe"
                  className="text-indigo-700 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                  onClick={closeMenu}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  activeClass="text-orange-500 font-medium"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="testimonials"
                  className="text-indigo-700 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                  onClick={closeMenu}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Contact"
                  className="px-6 py-2.5 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 shadow-md"
                  onClick={closeMenu}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
