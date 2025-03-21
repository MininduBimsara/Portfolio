import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-100 shadow-lg py-3" : "bg-transparent py-5"
      }`}
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
              navActive ? "transform rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              navActive ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              navActive ? "transform -rotate-45 -translate-y-2" : ""
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-gray-50 transform ${
          navActive ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out pt-20`}
      >
        <div className="container mx-auto px-6">
          <ul className="flex flex-col space-y-8 py-8">
            <li>
              <Link
                onClick={closeMenu}
                activeClass="text-orange-500 font-medium"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-xl text-gray-800 hover:text-orange-500 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="text-orange-500 font-medium"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-xl text-gray-800 hover:text-orange-500 transition-colors duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="text-orange-500 font-medium"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-xl text-gray-800 hover:text-orange-500 transition-colors duration-300"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="text-orange-500 font-medium"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="text-xl text-gray-800 hover:text-orange-500 transition-colors duration-300"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 shadow-md"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
