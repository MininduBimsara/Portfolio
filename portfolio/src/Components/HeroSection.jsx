import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Facebook,
} from "lucide-react";
import { Link } from "react-scroll";

export default function HeroSection() {
  const typedTextRef = useRef(null);
  const typedTextMobileRef = useRef(null);
  const [currentRole, setCurrentRole] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "React Specialist",
    "UI/UX Enthusiast",
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const role = roles[currentRole];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < role.length) {
          setCurrentText(role.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(role.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRole]); // Fixed: removed 'roles' from dependencies

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
                <span className="inline-block min-w-[140px]">
                  {currentText}
                </span>
                <span className="inline-block ml-1 animate-pulse">|</span>
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
                src="/img/new.png"
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
              <Link
                to="MyPortfolio"
                smooth={true}
                duration={600}
                offset={-40}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-3 group cursor-pointer shadow-lg hover:shadow-orange-500/25"
              >
                <span>My Work</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
              <Link
                to="Contact"
                smooth={true}
                duration={600}
                offset={-40}
                className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-orange-500/50 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-3 group cursor-pointer"
              >
                <span>Connect</span>
                <ArrowRight className="h-4 w-4 text-orange-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
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

          {/* Enhanced Social Media Card - Bottom Right */}
          <div className="absolute bottom-12 right-8 group">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-600/50 rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-all duration-500 backdrop-blur-xl relative overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-light text-white mb-6 text-center tracking-wide">
                  <span className="font-mono text-orange-400 text-2xl animate-pulse">
                    {">"}
                  </span>
                  <span className="ml-2 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                    Connect
                  </span>
                </h3>

                <div className="flex gap-3 justify-center">
                  <a
                    href="https://www.linkedin.com/in/minindu-abeywardena"
                    className="group/icon relative text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-3 hover:bg-blue-500/10 rounded-2xl border border-gray-600/50 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/25"
                    aria-label="LinkedIn"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover/icon:from-blue-400/10 group-hover/icon:to-blue-600/5 rounded-2xl transition-all duration-300"></div>
                    <Linkedin size={20} className="relative z-10" />
                  </a>

                  <a
                    href="https://www.instagram.com/bimxara_01?igsh=MW1lMzRtZXZtbjh3cQ=="
                    className="group/icon relative text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-3 hover:bg-pink-500/10 rounded-2xl border border-gray-600/50 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-500/25"
                    aria-label="Instagram"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400/0 to-purple-600/0 group-hover/icon:from-pink-400/10 group-hover/icon:to-purple-600/5 rounded-2xl transition-all duration-300"></div>
                    <Instagram size={20} className="relative z-10" />
                  </a>

                  <a
                    href="https://www.facebook.com/share/1AN798rrEy/"
                    className="group/icon relative text-gray-400 hover:text-sky-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-3 hover:bg-sky-500/10 rounded-2xl border border-gray-600/50 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/25"
                    aria-label="Facebook"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400/0 to-blue-600/0 group-hover/icon:from-sky-400/10 group-hover/icon:to-blue-600/5 rounded-2xl transition-all duration-300"></div>
                    <Facebook size={20} className="relative z-10" />
                  </a>

                  <a
                    href="https://github.com/MininduBimsara"
                    className="group/icon relative text-gray-400 hover:text-gray-100 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-3 hover:bg-gray-500/10 rounded-2xl border border-gray-600/50 hover:border-gray-400/50 hover:shadow-lg hover:shadow-gray-500/25"
                    aria-label="GitHub"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-400/0 to-gray-600/0 group-hover/icon:from-gray-400/10 group-hover/icon:to-gray-600/5 rounded-2xl transition-all duration-300"></div>
                    <Github size={20} className="relative z-10" />
                  </a>
                </div>

                {/* Subtle pulse effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
              </div>
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
              <span className="inline-block min-w-[140px]">{currentText}</span>
              <span className="inline-block ml-1 animate-pulse">|</span>
            </span>
          </div>

          {/* Profile Image */}
          <div className="relative mb-6 sm:mb-8">
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-orange-500/10 to-orange-400/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-tr from-orange-500/10 to-orange-300/10 rounded-full blur-xl -z-10"></div>
            <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-700 border border-gray-600 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <img
                src="/img/new.png"
                alt="Professional portrait"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = "/api/placeholder/400/400";
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

          {/* Social Links - Fixed to match desktop version */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/minindu-abeywardena"
              className="text-gray-400 hover:text-blue-500 transition-all transform hover:scale-125 p-3 bg-gray-800 border border-gray-600 rounded-full hover:border-blue-500"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/bimxara_01?igsh=MW1lMzRtZXZtbjh3cQ=="
              className="text-gray-400 hover:text-pink-500 transition-all transform hover:scale-125 p-3 bg-gray-800 border border-gray-600 rounded-full hover:border-pink-500"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/1AN798rrEy/"
              className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-125 p-3 bg-gray-800 border border-gray-600 rounded-full hover:border-blue-400"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://github.com/MininduBimsara"
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
      <style>{`
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
