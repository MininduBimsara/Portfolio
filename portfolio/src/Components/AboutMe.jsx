import { Check } from "lucide-react";

export default function AboutMe() {
  const highlights = [
    "5+ years of full stack development experience",
    "Worked with Fortune 500 companies and startups",
    "Delivered 20+ successful web applications",
    "Strong focus on clean code and best practices",
  ];

  return (
    <section id="AboutMe" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-indigo-100 rounded-xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-200 rounded-xl -z-10"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img
                src="/img/about.png"
                alt="About Me"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Passionate Developer with an Eye for Detail
            </h2>
            <p className="text-lg text-gray-600">
              I'm a full stack developer with a passion for creating elegant,
              efficient, and user-friendly web applications. My journey in
              technology started over 5 years ago, and I've been honing my
              skills ever since.
            </p>
            <p className="text-lg text-gray-600">
              I believe in the power of technology to solve real-world problems
              and enhance people's lives. My approach combines technical
              expertise with creative problem-solving to deliver solutions that
              exceed expectations.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Career Highlights
              </h3>
              <ul className="space-y-3">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-indigo-100 p-1 rounded-full">
                      <Check className="h-5 w-5 text-indigo-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
