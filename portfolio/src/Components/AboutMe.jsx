import React from "react";
import { ArrowUpRight } from "lucide-react";

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
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative hidden lg:block">
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-gradient-to-br from-orange-500/10 to-orange-400/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-gradient-to-tr from-orange-500/10 to-orange-300/10 rounded-full blur-xl -z-10"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 backdrop-blur-sm">
              <img
                src="/img/about.png"
                alt="Profile"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-2">
              <span className="bg-gray-800 text-orange-400 px-4 py-2 rounded-full text-xs font-mono tracking-wider border border-gray-700">
                ABOUT ME
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                Passionate About Building
                <span className="font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  Scalable Solutions
                </span>
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              As a software engineer, I specialize in crafting intuitive and
              efficient digital experiences. My work blends creativity with
              technical expertise to deliver applications that enhance usability
              and performance. I strive to build scalable, maintainable, and
              user-focused solutions that stand the test of time.
            </p>

            <div className="mt-12 space-y-4">
              <h3 className="text-xl font-light text-white">
                <span className="font-mono text-orange-400">{">"}</span>{" "}
                EXPERTISE
              </h3>
              <ul className="space-y-4">
                {expertise.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="bg-gray-800 border border-gray-700 p-1 rounded-full group-hover:bg-orange-500/20 transition-colors duration-300">
                      <ArrowUpRight className="h-5 w-5 text-orange-400" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-12 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-light py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 group">
              <span>View Portfolio</span>
              <ArrowUpRight className="h-4 w-4 text-orange-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
