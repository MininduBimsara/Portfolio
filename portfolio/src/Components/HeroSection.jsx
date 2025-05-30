import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Facebook,
  Download,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function HeroSection() {
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
  }, [currentText, isDeleting, currentRole]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced background with animated elements - same as AboutMe */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black bg-opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+')] bg-repeat"></div>
      </div>

      {/* Floating geometric shapes - same as AboutMe */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-orange-500/20 rounded-lg rotate-45 animate-pulse"></div>
      <div
        className="absolute bottom-32 right-16 w-16 h-16 bg-orange-500/10 rounded-full animate-bounce"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-orange-400/30 rotate-12"
        style={{ animation: "spin 8s linear infinite" }}
      ></div>

      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Name Badge */}
            <div className="inline-flex items-center gap-3 bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">
                Minindu Abeywardena
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                UI/UX and Product
                <br />
                <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                  Designer
                </span>
              </h1>

              {/* Typing Animation */}
              <div className="text-xl text-gray-300">
                <span className="min-w-[200px] inline-block">
                  {currentText}
                </span>
                <span className="animate-pulse ml-1 text-orange-400">|</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-md">
              I craft responsive and performant web applications with modern
              technologies and a focus on exceptional user experience that
              drives results.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="Contact"
                smooth={true}
                duration={600}
                offset={-40}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <span>Hire Me</span>
              </Link>

              <a
                href="https://drive.google.com/uc?export=download&id=1Ip4-ySVzzRxq-YwV4h79SkdhR5OaTYS8"
                className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-orange-500/50 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3 shadow-sm hover:shadow-md"
                download
              >
                {/* <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M13 7h-2V3H9v4H7l3 3 3-3zm-7 8v2h10v-2H6z" />
            </svg> */}
                Download CV
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium text-white">+94 71 588 1536</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium text-white">minindubim@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-gray-400 font-medium">
                Follow me:
              </span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/minindu-abeywardena"
                  className="w-10 h-10 bg-gray-800/50 hover:bg-blue-500/20 border border-gray-700 hover:border-blue-400/50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>

                <a
                  href="https://www.instagram.com/bimxara_01?igsh=MW1lMzRtZXZtbjh3cQ=="
                  className="w-10 h-10 bg-gray-800/50 hover:bg-pink-500/20 border border-gray-700 hover:border-pink-400/50 rounded-full flex items-center justify-center text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>

                <a
                  href="https://www.facebook.com/share/1AN798rrEy/"
                  className="w-10 h-10 bg-gray-800/50 hover:bg-blue-500/20 border border-gray-700 hover:border-blue-400/50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>

                <a
                  href="https://github.com/MininduBimsara"
                  className="w-10 h-10 bg-gray-800/50 hover:bg-gray-600/50 border border-gray-700 hover:border-gray-500/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main circular image container */}
              <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
                {/* Orange circular background with gradient similar to AboutMe theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full shadow-2xl shadow-orange-500/20"></div>

                {/* Profile image */}
                <div className="absolute inset-4 rounded-full overflow-hidden bg-gray-800 shadow-2xl border border-gray-700">
                  <img
                    src="/img/new.png"
                    alt="Professional portrait"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/400/400";
                    }}
                  />
                </div>

                {/* Decorative dots - matching theme colors */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400/60 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-6 h-6 bg-orange-500/60 rounded-full"></div>
                <div className="absolute top-20 -left-6 w-4 h-4 bg-orange-400/80 rounded-full"></div>
              </div>

              {/* Floating stats card - themed to match */}
              <div className="absolute -bottom-8 -left-8 bg-gray-800/50 border border-gray-700 rounded-2xl shadow-xl p-6 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>

              {/* Floating projects card - themed to match */}
              <div className="absolute -top-8 -right-8 bg-gray-800/50 border border-gray-700 rounded-2xl shadow-xl p-6 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">20+</div>
                  <div className="text-sm text-gray-400">Projects Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-16 text-center pb-20">
          <h3 className="text-lg font-semibold text-gray-300 mb-6">
            Technologies I work with
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {[
              "React",
              "Node.js",
              "TypeScript",
              "Tailwind CSS",
              "MongoDB",
              "SpringBoot",
              "Express.js",
              "MySQL",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-800/50 border border-gray-700 text-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:border-orange-500/50 hover:text-orange-300 hover:shadow-md transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400">
        <span className="text-sm mb-2 font-medium hidden sm:block">
          Scroll to explore
        </span>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-orange-400 rounded-full animate-bounce"></div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
