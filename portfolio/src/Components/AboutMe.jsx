import React from "react";
import { ArrowUpRight, Code2, Lightbulb, Target, Zap } from "lucide-react";
import { Link } from "react-scroll";

export default function AboutMe() {
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
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black bg-opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+')] bg-repeat"></div>
      </div>

      {/* Floating geometric shapes */}
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
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="bg-gray-800 text-orange-400 px-4 py-2 rounded-full text-sm font-mono tracking-wider border border-gray-700 inline-block mb-4">
            ABOUT ME
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight mb-6">
            Crafting Digital{" "}
            <span className="font-bold bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              Experiences
            </span>
            <br />
            That Matter
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            As a passionate Full Stack Developer, I transform complex problems into
            elegant solutions. My approach combines technical excellence with
            creative thinking to build applications that not only function
            flawlessly but also provide exceptional user experiences.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm hover:border-orange-500/50 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-400 font-light">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mb-16 sm:mb-20">
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 border border-gray-700 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-orange-500/20 p-3 rounded-full border border-orange-500/30">
                <Lightbulb className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-light text-white mb-3">
                  My Development Philosophy
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  I believe in writing code that tells a story—clean,
                  maintainable, and purposeful. Every line should serve a
                  function, every component should enhance the user journey, and
                  every application should solve real-world problems
                  efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-light text-white mb-8 text-center">
            <span className="font-mono text-orange-400">{">"}</span> Core
            Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {expertise.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800/30 border border-gray-700 rounded-xl p-6 sm:p-8 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-full border border-orange-500/30 group-hover:bg-orange-500/30 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-medium text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              to="MyPortfolio"
              smooth={true}
              duration={600}
              offset={-40}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-3 group cursor-pointer shadow-lg hover:shadow-orange-500/25"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>

            <Link
              to="Contact"
              smooth={true}
              duration={600}
              offset={-40}
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-orange-500/50 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-3 group cursor-pointer"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="h-4 w-4 text-orange-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
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
      `}</style>
    </section>
  );
}
