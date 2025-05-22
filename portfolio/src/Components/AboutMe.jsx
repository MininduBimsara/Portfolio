import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-scroll";

export default function AboutMe() {
  const expertise = [
    "Full-stack web development",
    "User-centric UI/UX design",
    "Scalable cloud-based solutions",
    "Software architecture & optimization",
  ];

  return (
    <section
      id="AboutMe"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background dot texture pattern - same as hero section */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black bg-opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
          {/* Mobile Image Section - Shown only on mobile */}
          <div className="w-full sm:w-3/4 lg:hidden relative mb-8">
            <div className="absolute -top-6 -left-6 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-orange-500/10 to-orange-400/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-tr from-orange-500/10 to-orange-300/10 rounded-full blur-xl -z-10"></div>
            <div
              className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-700 backdrop-blur-sm"
              style={{
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <img
                src="/img/about.png"
                alt="Profile"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Add the animation keyframes via inline style */}
            <style>{`
              @keyframes float {
                0% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(-15px);
                }
                100% {
                  transform: translateY(0px);
                }
              }
            `}</style>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="bg-gray-800 text-orange-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-mono tracking-wider border border-gray-700">
                ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                Passionate About Building{" "}
                <span className="font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  Scalable Solutions
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              As a software engineer, I specialize in crafting intuitive and
              efficient digital experiences. My work blends creativity with
              technical expertise to deliver applications that enhance usability
              and performance. I strive to build scalable, maintainable, and
              user-focused solutions that stand the test of time.
            </p>

            <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-light text-white">
                <span className="font-mono text-orange-400">{">"}</span>{" "}
                EXPERTISE
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {expertise.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 sm:gap-3 group"
                  >
                    <div className="bg-gray-800 border border-gray-700 p-1 rounded-full group-hover:bg-orange-500/20 transition-colors duration-300">
                      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="MyPortfolio"
              smooth={true}
              duration={600}
              offset={-40}
              className="mt-8 sm:mt-12 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-light py-2.5 px-5 sm:py-3 sm:px-6 rounded-full transition-all duration-300 flex items-center gap-2 group cursor-pointer text-sm sm:text-base inline-flex"
            >
              <span>View Portfolio</span>
              <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Desktop Image Section - Hidden on mobile */}
          <div className="w-full lg:w-1/2 relative hidden lg:block">
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-gradient-to-br from-orange-500/10 to-orange-400/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-gradient-to-tr from-orange-500/10 to-orange-300/10 rounded-full blur-xl -z-10"></div>
            <div
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 backdrop-blur-sm"
              style={{
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <img
                src="/img/about.png"
                alt="Profile"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Add the animation keyframes via inline style */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
