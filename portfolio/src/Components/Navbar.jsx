import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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

  // Navbar background style
  const navBackground = isExpanded ? "bg-amber-700" : "bg-transparent";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="container mx-auto px-4">
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
    </nav>
  );
}

export default Navbar;
