import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="heroSection"
      className="bg-gradient-to-b from-indigo-50 to-white min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="inline-block">
              <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Full Stack Developer
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Building{" "}
              <span className="text-indigo-600">digital experiences</span> that
              make an impact
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              I craft responsive and performant web applications with modern
              technologies and a focus on user experience and clean code.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2">
                View My Work
                <ArrowRight size={18} />
              </button>
              <button className="bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600 font-medium py-3 px-6 rounded-lg transition-all">
                Get In Touch
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-12 -right-12 bg-indigo-600 w-48 h-48 rounded-full opacity-10"></div>
            <div className="absolute -bottom-12 -left-12 bg-indigo-600 w-64 h-64 rounded-full opacity-10"></div>
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/img/hero.jpg"
                alt="Professional portrait"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
