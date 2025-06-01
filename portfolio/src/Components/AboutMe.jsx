import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Code2,
  Lightbulb,
  Target,
  Zap,
  Sparkles,
  Brain,
  Rocket,
} from "lucide-react";
import { Link } from "react-scroll";


export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const expertise = [
    {
      icon: Code2,
      title: "Full-stack Development",
      description: "End-to-end web applications with modern frameworks",
    },
    {
      icon: Lightbulb,
      title: "UI/UX Design",
      description: "User-centered design with focus on accessibility",
    },
    {
      icon: Zap,
      title: "Cloud Solutions",
      description: "Scalable infrastructure and deployment strategies",
    },
    {
      icon: Target,
      title: "Performance Optimization",
      description: "Code efficiency and application speed enhancement",
    },
  ];

  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Technologies Mastered" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="AboutMe"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Original background with animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black bg-opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+')] bg-repeat"></div>
      </div>

      {/* Original floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-orange-500/20 rounded-lg rotate-45 animate-pulse"></div>
      <div
        className="absolute bottom-32 right-16 w-16 h-16 bg-orange-500/10 rounded-full animate-bounce"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-orange-400/30 rotate-12"
        style={{ animation: "spin 8s linear infinite" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Creative Header with Diagonal Layout */}
        <div className="mb-16 sm:mb-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                <span className="absolute top-4 left-30 text-orange-500/30 font-mono text-6xl font-bold select-none">
                  {"</"}
                </span>
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text px-4 py-2 text-sm font-mono tracking-wider inline-block mb-6 relative">
                  ABOUT ME
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight mb-6 leading-tight">
                  Crafting Digital <br />
                  <span className="font-bold bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent relative">
                    Experiences
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-2"
                      viewBox="0 0 100 10"
                    >
                      <path
                        d="M0,5 Q25,0 50,5 T100,5"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-orange-400/50"
                      />
                    </svg>
                  </span>
                  <br />
                  That Matter
                </h2>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl transform rotate-3"></div>
                <div className="relative bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                    As a passionate Full Stack Developer, I transform complex
                    problems into elegant solutions. My approach combines
                    technical excellence with creative thinking to build
                    applications that not only function flawlessly but also
                    provide exceptional user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Creative Stats Display - Circular Layout */}
        <div className="mb-16 sm:mb-20 relative">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-square max-w-2xl mx-auto">
              {stats.map((stat, index) => {
                const angle = index * 90 - 45; // Spread across circle
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={index}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 delay-${
                      index * 100
                    } ${
                      isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <div className="group hover:scale-110 transition-transform duration-300">
                      <div className="relative">
                        <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-gray-800/50 border border-gray-700 rounded-full w-32 h-32 flex flex-col items-center justify-center backdrop-blur-sm hover:border-orange-500/50 transition-colors duration-300">
                          <div className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
                            {stat.number}
                          </div>
                          <div className="text-xs text-gray-400 font-light text-center px-2">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Center element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/25">
                  <Sparkles className="w-8 h-8 text-white animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section - Slanted Design */}
        <div className="mb-16 sm:mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent transform -skew-y-1"></div>
            <div className="relative py-12">
              <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl"></div>
                      <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-full w-32 h-32 mx-auto flex items-center justify-center">
                        <Lightbulb className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h3 className="text-2xl sm:text-3xl font-light text-white mb-6">
                      <span className="font-mono text-orange-400 text-lg">
                        {">"}
                      </span>{" "}
                      My Development Philosophy
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      I believe in writing code that tells a story — clean,
                      maintainable, and purposeful. Every line should serve a
                      function, every component should enhance the user journey,
                      and every application should solve real-world problems
                      efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise - Hexagonal Grid */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-light text-white mb-12 text-center">
            <span className="font-mono text-orange-400">{">"}</span> Core
            Expertise
          </h3>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {expertise.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`group transform transition-all duration-700 delay-${
                      index * 100
                    } ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    } ${isEven ? "md:translate-x-4" : "md:-translate-x-4"}`}
                  >
                    <div
                      className="relative px-2
                    "
                    >
                      {/* Hexagonal background */}
                      <div className="absolute inset-0 transform rotate-45 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-2xl group-hover:scale-105 transition-transform duration-500"></div>

                      <div className="relative bg-gray-800/30 border border-gray-700 rounded-xl p-6 sm:p-8 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm">
                        <div className="flex items-start gap-6">
                          <div className="relative">
                            <div className="absolute inset-0 bg-orange-500/30 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                            <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-lg group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                          </div>

                          <div className="flex-1">
                            <h4 className="text-lg sm:text-xl font-medium text-white mb-3 group-hover:text-orange-300 transition-colors duration-300 relative">
                              {item.title}
                              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-500"></div>
                            </h4>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Call to Action - Split Design */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 rounded-3xl transform -rotate-1"></div>
              <div className="relative bg-gray-800/20 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
                  <Link
                    className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-orange-500/25 hover:scale-105 transform"
                    to="MyPortfolio"
                  >
                    <span>Explore My Work</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>

                  <div className="hidden sm:block w-px h-8 bg-gray-600"></div>
                  <div className="block sm:hidden w-8 h-px bg-gray-600"></div>

                  <Link
                    className="group bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-orange-500/50 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3 hover:scale-105 transform"
                    to="Contact"
                  >
                    <span>Let's Connect</span>
                    <ArrowUpRight className="h-4 w-4 text-orange-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
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

        .delay-0 {
          animation-delay: 0ms;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </section>
  );
}
