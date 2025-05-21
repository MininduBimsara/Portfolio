import { useEffect, useRef } from "react";
import { ArrowRight, Linkedin, Twitter, Instagram, Github } from "lucide-react";

export default function HeroSection() {
  const typedTextRef = useRef(null);
  const cursorRef = useRef(null);

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
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, []);

  // Typed.js initialization
  const initializeTypedText = () => {
    if (!typedTextRef.current) return;

    if (typeof window.Typed !== "undefined") {
      const typed = new window.Typed(typedTextRef.current, {
        strings: [
          "Full Stack Developer",
          "React Specialist",
          "UI/UX Enthusiast",
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 300,
        loop: true,
        showCursor: true,
        cursorChar: "|",
        autoInsertCss: true,
      });

      // Store the instance for cleanup
      typedTextRef.current.__typed__ = typed;
    } else {
      console.error("Typed.js library not loaded properly");
      fallbackTyping();
    }
  };

  // Fallback typing animation using CSS and JS
  const fallbackTyping = () => {
    if (!typedTextRef.current || !cursorRef.current) return;

    const roles = [
      "Full Stack Developer",
      "React Specialist",
      "UI/UX Enthusiast",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
      const currentText = roles[roleIndex];

      if (isDeleting) {
        typedTextRef.current.textContent = currentText.substring(
          0,
          charIndex - 1
        );
        charIndex--;
      } else {
        typedTextRef.current.textContent = currentText.substring(
          0,
          charIndex + 1
        );
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
    typedTextRef.current.textContent = "Web Developer";
    cursorRef.current.classList.add("animate-pulse");
    setTimeout(typeText, 1000);
  };

  return (
    <section
      id="heroSection"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Background dot texture pattern - kept this */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black bg-opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
          <div className="w-full md:w-1/2 space-y-6 sm:space-y-8">
            <div className="inline-block">
              <span className="bg-gray-800 bg-opacity-80 text-orange-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-orange-400 border-opacity-30 shadow-lg">
                {/* Typed text element */}
                <span
                  ref={typedTextRef}
                  id="typed-text"
                  className="inline-block min-w-[120px] sm:min-w-[140px]"
                ></span>
                <span
                  ref={cursorRef}
                  className="inline-block ml-1 animate-pulse"
                >
                  |
                </span>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Building{" "}
              <span className="text-orange-400 relative">
                digital experiences
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-orange-400 bg-opacity-30 rounded-full"></span>
              </span>{" "}
              <span className="block sm:inline">that make an impact</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-xl">
              I craft responsive and performant web applications with modern
              technologies and a focus on user experience and clean code.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all flex items-center gap-2 shadow-lg text-sm sm:text-base">
                View My Work
                <ArrowRight size={16} className="sm:size-18" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-orange-400 border border-orange-400 border-opacity-30 font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all shadow-lg text-sm sm:text-base">
                Get In Touch
              </button>
            </div>
          </div>

          <div className="w-full sm:w-3/4 md:w-1/2 relative mt-8 md:mt-0">
            {/* Social media icons - vertical floating bar */}
            <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 flex-col gap-5 bg-gray-800 bg-opacity-90 p-4 rounded-l-lg shadow-xl z-20 border-l-2 border-orange-500 border-opacity-30">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-all transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="lg:size-22" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} className="lg:size-22" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} className="lg:size-22" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} className="lg:size-22" />
              </a>
            </div>

            {/* Profile image with responsive adjustments */}
            <div className="group relative z-10 w-4/5 sm:w-3/4 mx-auto aspect-square">
              {/* Frame border */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-400 via-purple-500 to-blue-500 p-1 shadow-2xl transition-transform">
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden opacity-30"></div>
              </div>

              {/* Profile image container */}
              <div className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden w-full h-full shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-transparent opacity-20 mix-blend-overlay"></div>
                <img
                  src="/img/hero.jpg"
                  alt="Professional portrait"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Stylish overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 opacity-10 mix-blend-overlay"></div>
              </div>
            </div>

            {/* Mobile social media icons with enhanced styling */}
            <div className="flex md:hidden justify-center mt-6 gap-4 sm:gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-all transform hover:scale-110 p-2"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="sm:size-24" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-all transform hover:scale-110 p-2"
                aria-label="Instagram"
              >
                <Instagram size={20} className="sm:size-24" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110 p-2"
                aria-label="Twitter"
              >
                <Twitter size={20} className="sm:size-24" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all transform hover:scale-110 p-2"
                aria-label="GitHub"
              >
                <Github size={20} className="sm:size-24" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator using only Tailwind */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60 flex flex-col items-center">
        <span className="text-xs sm:text-sm mb-1 sm:mb-2 font-light tracking-wider">
          Scroll down
        </span>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white border-opacity-40 rounded-full flex items-start justify-center p-1 group">
          <div className="w-1 h-2 bg-orange-400 rounded-full animate-bounce group-hover:h-3 transition-all"></div>
        </div>
      </div>
    </section>
  );
}
