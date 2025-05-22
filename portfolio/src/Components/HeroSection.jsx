import { useEffect, useRef } from "react";
import { ArrowRight, Linkedin, Twitter, Instagram, Github } from "lucide-react";

export default function HeroSection() {
  const typedTextRef = useRef(null);
  const typedTextMobileRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorMobileRef = useRef(null);

  useEffect(() => {
    // Import Typed.js dynamically to avoid SSR issues
    const loadTyped = async () => {
      try {
        // Load Typed.js from CDN
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js";
        script.async = true;
        script.onload = initializeTypedText;
        document.body.appendChild(script);
      } catch (error) {
        console.error("Error loading Typed.js:", error);
        fallbackTyping();
      }
    };

    loadTyped();

    return () => {
      // Clean up any instances if component unmounts
      const typedInstance = typedTextRef.current?.__typed__;
      const typedMobileInstance = typedTextMobileRef.current?.__typed__;
      if (typedInstance) {
        typedInstance.destroy();
      }
      if (typedMobileInstance) {
        typedMobileInstance.destroy();
      }
    };
  }, []);

  // Typed.js initialization for both desktop and mobile
  const initializeTypedText = () => {
    const strings = [
      "Full Stack Developer",
      "React Specialist",
      "UI/UX Enthusiast",
    ];

    const options = {
      strings,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 300,
      loop: true,
      showCursor: false, // We'll use custom cursor
      autoInsertCss: true,
    };

    // Initialize for desktop
    if (typedTextRef.current && typeof window.Typed !== "undefined") {
      const typed = new window.Typed(typedTextRef.current, options);
      typedTextRef.current.__typed__ = typed;
    }

    // Initialize for mobile
    if (typedTextMobileRef.current && typeof window.Typed !== "undefined") {
      const typedMobile = new window.Typed(typedTextMobileRef.current, options);
      typedTextMobileRef.current.__typed__ = typedMobile;
    }

    if (typeof window.Typed === "undefined") {
      console.error("Typed.js library not loaded properly");
      fallbackTyping();
    }
  };

  // Fallback typing animation using CSS and JS
  const fallbackTyping = () => {
    const roles = [
      "Full Stack Developer",
      "React Specialist",
      "UI/UX Enthusiast",
    ];

    const animateText = (textRef, cursorRef) => {
      if (!textRef.current || !cursorRef.current) return;

      let roleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function typeText() {
        const currentText = roles[roleIndex];

        if (isDeleting) {
          textRef.current.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
        } else {
          textRef.current.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 80;

        if (!isDeleting && charIndex === currentText.length) {
          typeSpeed = 1500;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }

        setTimeout(typeText, typeSpeed);
      }

      // Start with an initial value
      textRef.current.textContent = "Web Developer";
      cursorRef.current.classList.add("animate-pulse");
      setTimeout(typeText, 1000);
    };

    // Animate both desktop and mobile versions
    animateText(typedTextRef, cursorRef);
    animateText(typedTextMobileRef, cursorMobileRef);
  };

  return (
    <section
      id="heroSection"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Background dot texture pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black bg-opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 relative z-10">
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden lg:flex relative items-center justify-center min-h-[80vh]">
          {/* Main Title Card - Top Left */}
          <div className="absolute top-0 left-0 bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-6 xl:p-8 max-w-md transform -rotate-2 hover:rotate-0 transition-transform duration-300 backdrop-blur-sm">
            <div className="inline-block mb-4">
              <span className="bg-gray-900 text-orange-400 px-4 py-2 rounded-full text-sm font-medium border border-gray-600">
                <span
                  ref={typedTextRef}
                  className="inline-block min-w-[140px]"
                ></span>
                <span
                  ref={cursorRef}
                  className="inline-block ml-1 animate-pulse"
                >
                  |
                </span>
              </span>
            </div>
            <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-light text-white leading-tight mb-4">
              Building{" "}
              <span className="font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent relative">
                digital experiences
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 rounded-full"></span>
              </span>{" "}
              that make an impact
            </h1>
          </div>

          {/* Central Profile Image */}
          <div className="relative z-20 flex items-center justify-center">
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-gradient-to-br from-orange-500/10 to-orange-400/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-gradient-to-tr from-orange-500/10 to-orange-300/10 rounded-full blur-xl -z-10"></div>
            <div
              className="w-80 h-80 xl:w-96 xl:h-96 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-gray-700 border border-gray-600 backdrop-blur-sm mx-auto"
              style={{
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <img
                src="/img/hero.jpg"
                alt="Professional portrait"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/api/placeholder/400/400";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
          </div>

          {/* Description Card - Top Right */}
          <div className="absolute top-12 right-0 bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-6 max-w-sm transform rotate-1 hover:rotate-0 transition-transform duration-300 backdrop-blur-sm">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I craft responsive and performant web applications with modern
              technologies and a focus on user experience.
            </p>
            <div className="flex gap-3">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-all flex items-center gap-2 text-sm shadow-md hover:shadow-lg transform hover:scale-105">
                View Work
                <ArrowRight size={16} />
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 border border-gray-600 font-medium py-2 px-4 rounded-lg transition-all text-sm shadow-md hover:shadow-lg">
                Contact
              </button>
            </div>
          </div>

          {/* Skills/Tech Stack Card - Bottom Left */}
          <div className="absolute bottom-0 left-8 bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-6 max-w-xs transform -rotate-1 hover:rotate-0 transition-transform duration-300 backdrop-blur-sm">
            <h3 className="text-lg font-light text-white mb-3">
              <span className="font-mono text-orange-400">{">"}</span> Tech
              Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "TypeScript", "Tailwind", "MongoDB"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600 hover:bg-gray-600 transition-colors"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Social Media Card - Bottom Right */}
          <div className="absolute bottom-12 right-8 bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300 backdrop-blur-sm">
            <h3 className="text-lg font-light text-white mb-4 text-center">
              <span className="font-mono text-orange-400">{">"}</span> Connect
            </h3>
            <div className="flex gap-4 justify-center">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-all transform hover:scale-125 p-2 hover:bg-gray-700 rounded-full border border-gray-600 hover:border-blue-500"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-all transform hover:scale-125 p-2 hover:bg-gray-700 rounded-full border border-gray-600 hover:border-pink-500"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-125 p-2 hover:bg-gray-700 rounded-full border border-gray-600 hover:border-blue-400"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all transform hover:scale-125 p-2 hover:bg-gray-700 rounded-full border border-gray-600 hover:border-white"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Floating Quote Card - Left Side */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl shadow-2xl p-6 max-w-xs transform -rotate-12 hover:-rotate-6 transition-transform duration-300 border border-orange-400">
            <div className="text-4xl font-bold mb-2 text-orange-200">"</div>
            <p className="text-sm leading-relaxed">
              Clean code is not written by following a set of rules. Clean code
              is written by developers who care.
            </p>
            <div className="text-right mt-3 text-xs opacity-80">
              - Robert C. Martin
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden text-center relative z-10 px-4">
          {/* Typing Animation Badge */}
          <div className="mb-6 sm:mb-8">
            <span className="bg-gray-900 text-orange-400 px-4 py-2 rounded-full text-sm font-medium border border-gray-600 inline-block">
              <span
                ref={typedTextMobileRef}
                className="inline-block min-w-[140px]"
              ></span>
              <span
                ref={cursorMobileRef}
                className="inline-block ml-1 animate-pulse"
              >
                |
              </span>
            </span>
          </div>

          {/* Profile Image */}
          <div className="relative mb-6 sm:mb-8">
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-orange-500/10 to-orange-400/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-tr from-orange-500/10 to-orange-300/10 rounded-full blur-xl -z-10"></div>
            <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-700 border border-gray-600 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <img
                src="/img/hero.jpg"
                alt="Professional portrait"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/api/placeholder/300/300";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Mobile floating elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-tight mb-4 px-2">
            Building{" "}
            <span className="font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent relative">
              digital experiences
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 rounded-full"></span>
            </span>{" "}
            that make an impact
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 max-w-md mx-auto px-2">
            I craft responsive and performant web applications with modern
            technologies and a focus on user experience.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 px-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
              View Work
              <ArrowRight size={18} />
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 border border-gray-600 font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl">
              Contact
            </button>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-lg font-light text-white mb-3">
              <span className="font-mono text-orange-400">{">"}</span> Tech
              Stack
            </h3>
            <div className="flex flex-wrap gap-2 justify-center max-w-sm mx-auto">
              {["React", "Node.js", "TypeScript", "Tailwind", "MongoDB"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600 hover:bg-gray-600 transition-colors"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition-all transform hover:scale-125 p-3 bg-gray-800 border border-gray-600 rounded-full hover:border-blue-500"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-500 transition-all transform hover:scale-125 p-3 bg-gray-800 border border-gray-600 rounded-full hover:border-pink-500"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-125 p-3 bg-gray-800 border border-gray-600 rounded-full hover:border-blue-400"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-all transform hover:scale-125 p-3 bg-gray-800 border border-gray-600 rounded-full hover:border-white"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Mobile Quote */}
          <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl shadow-2xl p-6 mx-4 border border-orange-400">
            <div className="text-3xl font-bold mb-2 text-orange-200">"</div>
            <p className="text-sm leading-relaxed">
              Clean code is not written by following a set of rules. Clean code
              is written by developers who care.
            </p>
            <div className="text-right mt-3 text-xs opacity-80">
              - Robert C. Martin
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60 flex flex-col items-center z-20">
        <span className="text-sm mb-2 font-light tracking-wider hidden sm:block">
          Scroll down
        </span>
        <div className="w-6 h-10 border-2 border-white border-opacity-40 rounded-full flex items-start justify-center p-1 group">
          <div className="w-1 h-2 bg-orange-400 rounded-full animate-bounce group-hover:h-3 transition-all"></div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
}
