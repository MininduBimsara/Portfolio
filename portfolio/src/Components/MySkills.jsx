import React, { useState, useEffect } from "react";
import { Code, Database, Smartphone, Layout } from "lucide-react";

// Skill data with consistent orange theme colors
const skillsData = [
  {
    icon: <Code />,
    title: "Front-End Development",
    description:
      "Creating responsive and interactive user interfaces using React, Vue, and modern CSS.",
    level: 90,
    color: "#FF7E33", // Primary orange
  },
  {
    icon: <Database />,
    title: "Database Design",
    description:
      "Designing databases with SQL and NoSQL solutions for efficient data management.",
    level: 80,
    color: "#FF9248", // Secondary orange
  },
  {
    icon: <Smartphone />,
    title: "Responsive Design",
    description:
      "Ensuring flawless performance across all devices and screen sizes.",
    level: 92,
    color: "#FF7E33", // Primary orange
  },
  {
    icon: <Layout />,
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces and great user experiences.",
    level: 78,
    color: "#FF9248", // Secondary orange
  },
];

// Get skill level label based on percentage
const getSkillLabel = (level) => {
  if (level >= 90) return "Master";
  if (level >= 80) return "Expert";
  if (level >= 70) return "Advanced";
  return "Proficient";
};

const SkillsShowcase = () => {
  const [isVisible, setIsVisible] = useState(true);

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
      className="py-16 bg-gray-100 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Heading at the top of the section */}
      <div
        className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex justify-center">
          <span className="px-4 py-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full text-sm font-medium text-white inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
            My Expertise
          </span>
        </div>
        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Professional <span className="text-orange-500">Skills</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Here's a showcase of my technical expertise and professional
          capabilities
        </p>
      </div>

      {/* Cards container with grid layout */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
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
              <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-700 h-full hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="p-3 rounded-lg text-white transform transition-transform duration-500 hover:rotate-6"
                      style={{ backgroundColor: skill.color }}
                    >
                      {React.cloneElement(skill.icon, { size: 24 })}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
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

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-5">
                    {skill.description}
                  </p>

                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Proficiency
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1500 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          backgroundColor: skill.color,
                          boxShadow: isVisible
                            ? `0 0 10px ${skill.color}40`
                            : "none",
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

export default SkillsShowcase;
