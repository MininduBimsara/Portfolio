import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function AboutMe() {
  const expertise = [
    "Full-stack development with next-gen frameworks",
    "AI-powered application architecture",
    "Immersive UI/UX with motion design",
    "Blockchain & decentralized systems integration",
  ];

  return (
    <section
      id="AboutMe"
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-gradient-to-tr from-amber-500/10 to-pink-500/10 rounded-full blur-xl -z-10"></div>

            {/* Main image container */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/30 to-gray-900/30 backdrop-blur-sm"></div>
              <img
                src="/img/about.png"
                alt="Profile"
                className="w-full h-auto object-cover mix-blend-luminosity"
              />

              {/* Futuristic overlay elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-4 left-4 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  <span className="text-xs font-mono text-white/80">
                    AI // DEVELOPMENT // INNOVATION
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  <span className="text-xs font-mono text-white/80">
                    EST. 2020
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-2">
              <span className="bg-white/5 text-white/80 px-4 py-2 rounded-full text-xs font-mono tracking-wider border border-white/10 backdrop-blur-sm">
                IDENTITY
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                Architecting the{" "}
                <span className="font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                  digital future
                </span>
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              I navigate the intersection of cutting-edge tech and
              human-centered design. With a foundation in full-stack
              development, I've evolved into crafting AI-augmented experiences
              that anticipate user needs before they arise.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My approach combines technical precision with visionary
              thinking—creating solutions that feel both futuristic and
              intuitive. I don't just build applications; I architect digital
              ecosystems where technology fades into the background, leaving
              only seamless experiences.
            </p>

            <div className="mt-12 space-y-4">
              <h3 className="text-xl font-light text-white">
                <span className="font-mono text-amber-300">{">"}</span>{" "}
                EXPERTISE
              </h3>
              <ul className="space-y-4">
                {expertise.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="bg-white/5 border border-white/10 p-1 rounded-full group-hover:bg-amber-400/20 transition-colors duration-300">
                      <ArrowUpRight className="h-5 w-5 text-amber-300" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-12 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-light py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 group">
              <span>View credentials</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
