import { ArrowRight, Linkedin, Twitter, Instagram, Github } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="heroSection"
      className="mt-5 bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/texture.png')] bg-repeat opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-orange-500 filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="inline-block">
              <span className="bg-gray-700 text-orange-400 px-4 py-2 rounded-full text-sm font-medium border border-orange-400/20">
                Full Stack Developer
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Building{" "}
              <span className="text-orange-400">digital experiences</span> that
              make an impact
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              I craft responsive and performant web applications with modern
              technologies and a focus on user experience and clean code.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2">
                View My Work
                <ArrowRight size={18} />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-orange-400 border border-orange-400 font-medium py-3 px-6 rounded-lg transition-all">
                Get In Touch
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            {/* Social media icons - vertical floating bar */}
            <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4 bg-gray-800/80 p-3 rounded-l-lg backdrop-blur z-20">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-100 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>

            {/* 3D-like decoration elements */}
            <div className="absolute -top-16 -left-8 w-16 h-16 bg-blue-500 rounded-lg opacity-60 transform rotate-12 blur-md"></div>
            <div className="absolute -bottom-12 -right-8 w-24 h-24 bg-orange-500 rounded-full opacity-50 transform blur-md"></div>

            {/* Smaller image with effect */}
            <div className="relative z-10 bg-gray-800 rounded-full w-4/5 mx-auto aspect-square shadow-xl overflow-hidden border-4 border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent mix-blend-overlay"></div>
              <img
                src="/img/hero.jpg"
                alt="Professional portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
            </div>

            {/* Mobile social media icons */}
            <div className="flex md:hidden justify-center mt-6 gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-100 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator similar to the reference */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center">
        <span className="text-sm mb-2">Scroll down</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
