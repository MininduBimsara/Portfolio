import React, { useState, useEffect } from "react";
import {
  Code,
  Globe,
  Database,
  Smartphone,
  Layout,
  Zap,
  GitBranch,
  Server,
} from "lucide-react";

const skillsData = [
  {
    icon: <Code />,
    title: "Front-End Development",
    description:
      "Creating responsive and interactive user interfaces using React, Vue, and modern CSS.",
    level: 90,
    color: "#3B82F6",
  },
  {
    icon: <Server />,
    title: "Back-End Development",
    description:
      "Building server-side applications with Node.js, Express, and modern frameworks.",
    level: 85,
    color: "#10B981",
  },
  {
    icon: <Database />,
    title: "Database Design",
    description:
      "Designing databases with SQL and NoSQL solutions for efficient data management.",
    level: 80,
    color: "#8B5CF6",
  },
  {
    icon: <Globe />,
    title: "API Development",
    description:
      "Creating RESTful and GraphQL APIs for seamless service communication.",
    level: 88,
    color: "#EC4899",
  },
  {
    icon: <Smartphone />,
    title: "Responsive Design",
    description:
      "Ensuring flawless performance across all devices and screen sizes.",
    level: 92,
    color: "#F59E0B",
  },
  {
    icon: <Layout />,
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces and great user experiences.",
    level: 78,
    color: "#6366F1",
  },
  {
    icon: <GitBranch />,
    title: "Version Control",
    description:
      "Managing code with Git and implementing effective collaboration strategies.",
    level: 83,
    color: "#14B8A6",
  },
  {
    icon: <Zap />,
    title: "Performance Optimization",
    description:
      "Fine-tuning apps for speed, accessibility, and user experience.",
    level: 87,
    color: "#EF4444",
  },
];

// Get skill level label based on percentage
const getSkillLabel = (level) => {
  if (level >= 90) return "Master";
  if (level >= 80) return "Expert";
  if (level >= 70) return "Advanced";
  return "Proficient";
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="skills-section"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Heading at the top of the section */}
      <div
        className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex justify-center">
          <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-sm font-medium text-white inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
            My Expertise
          </span>
        </div>
        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
          Professional <span className="text-blue-400">Skills</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Years of experience across the full stack development spectrum.
        </p>
      </div>

      {/* Cards container with full width */}
      <div className="container mx-auto px-4 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="rounded-lg overflow-hidden bg-gray-800/80 h-full hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border-t border-gray-700 shadow-lg hover:shadow-xl hover:shadow-blue-900/20">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="p-3 rounded-lg text-white transform transition-transform duration-500 hover:rotate-6"
                      style={{ backgroundColor: skill.color }}
                    >
                      {React.cloneElement(skill.icon, { size: 24 })}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {skill.title}
                      </h3>
                      <div
                        className="text-sm font-medium px-2 py-1 rounded-full inline-block"
                        style={{
                          backgroundColor: skill.color + "20",
                          color: skill.color,
                        }}
                      >
                        {getSkillLabel(skill.level)}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-5">
                    {skill.description}
                  </p>

                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Proficiency</span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1500 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          backgroundColor: skill.color,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
