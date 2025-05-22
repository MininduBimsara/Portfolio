import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div
          className="hidden md:block"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <div
            className={`${
              isExpanded
                ? "bg-amber-700 py-4 rounded-bl-3xl rounded-br-3xl"
                : "bg-transparent py-3"
            } transition-all duration-500`}
          >
            <div className="flex items-center justify-between">
              {/* Logo/Brand Area (Always visible) */}
              <div className="flex items-center ml-4">
                <div
                  className={`h-3 w-3 bg-orange-500 rounded-full mr-3 ${
                    !isExpanded && "mt-1"
                  }`}
                ></div>
                {isExpanded && (
                  <span className="text-white font-medium transition-opacity duration-300">
                    Home
                  </span>
                )}
              </div>

              {/* Centered Menu Button (Visible when collapsed) */}
              {!isExpanded && (
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white font-bold px-8 py-1.5 rounded-full shadow-md tracking-wider text-sm">
                    MENU
                  </div>
                </div>
              )}

              {/* Expanded Menu Items (Visible when expanded) */}
              {isExpanded && (
                <div className="flex items-center justify-center flex-grow">
                  <ul className="flex space-x-12">
                    <li>
                      <Link
                        activeClass="text-orange-300"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="heroSection"
                        className={`text-white hover:text-orange-300 transition-colors cursor-pointer ${
                          activeSection === "heroSection" ? "font-medium" : ""
                        }`}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="text-orange-300"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="MyPortfolio"
                        className={`text-white hover:text-orange-300 transition-colors cursor-pointer ${
                          activeSection === "MyPortfolio" ? "font-medium" : ""
                        }`}
                      >
                        Portfolios
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="text-orange-300"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="AboutMe"
                        className={`text-white hover:text-orange-300 transition-colors cursor-pointer ${
                          activeSection === "AboutMe" ? "font-medium" : ""
                        }`}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="text-orange-300"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Contact"
                        className={`text-white hover:text-orange-300 transition-colors cursor-pointer ${
                          activeSection === "Contact" ? "font-medium" : ""
                        }`}
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="skills-section"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={`text-white hover:text-orange-300 transition-colors cursor-pointer ${
                          activeSection === "skills-section" ? "font-medium" : ""
                        }`}
                      >
                        Skills
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

              {/* Hamburger Menu (Right-aligned) */}
              <div className="block mr-4">
                <button
                  className="flex flex-col justify-center items-center w-6 h-6 space-y-1.5"
                  aria-label="Toggle menu"
                >
                  <span
                    className={`block w-6 h-0.5 ${
                      isExpanded ? "bg-white" : "bg-gray-800"
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 ${
                      isExpanded ? "bg-white" : "bg-gray-800"
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 ${
                      isExpanded ? "bg-white" : "bg-gray-800"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div
            className={`${
              scrolled || isMobileMenuOpen
                ? "bg-amber-700 shadow-lg"
                : "bg-transparent"
            } py-4 transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              {/* Mobile Logo */}
              <div className="flex items-center">
                <div className="h-3 w-3 bg-orange-500 rounded-full mr-3"></div>
                <span className="text-white font-medium text-lg">
                  Portfolio
                </span>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 rounded-lg hover:bg-amber-600 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu Items */}
            {isMobileMenuOpen && (
              <div className="mt-4 pt-4 border-t border-amber-600">
                <ul className="space-y-4">
                  <li>
                    <Link
                      activeClass="text-orange-300"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      to="heroSection"
                      onClick={handleLinkClick}
                      className={`block text-white hover:text-orange-300 transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-amber-600 ${
                        activeSection === "heroSection"
                          ? "font-medium bg-amber-600"
                          : ""
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="text-orange-300"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      to="MyPortfolio"
                      onClick={handleLinkClick}
                      className={`block text-white hover:text-orange-300 transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-amber-600 ${
                        activeSection === "MyPortfolio"
                          ? "font-medium bg-amber-600"
                          : ""
                      }`}
                    >
                      Portfolios
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="text-orange-300"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      to="AboutMe"
                      onClick={handleLinkClick}
                      className={`block text-white hover:text-orange-300 transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-amber-600 ${
                        activeSection === "AboutMe"
                          ? "font-medium bg-amber-600"
                          : ""
                      }`}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="text-orange-300"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      to="Contact"
                      onClick={handleLinkClick}
                      className={`block text-white hover:text-orange-300 transition-colors cursor-pointer py-2 px-4 rounded-lg hover:bg-amber-600 ${
                        activeSection === "Contact"
                          ? "font-medium bg-amber-600"
                          : ""
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
