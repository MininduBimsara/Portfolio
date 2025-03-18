import React from "react";
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
    icon: <Code className="h-10 w-10 text-blue-600" />,
    title: "Front-End Development",
    description:
      "Creating responsive and interactive user interfaces using React, Vue, and modern CSS.",
  },
  {
    icon: <Server className="h-10 w-10 text-blue-600" />,
    title: "Back-End Development",
    description:
      "Building server-side applications with Node.js, Express, and modern frameworks.",
  },
  {
    icon: <Database className="h-10 w-10 text-blue-600" />,
    title: "Database Design",
    description:
      "Designing databases with SQL and NoSQL solutions for efficient data management.",
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-600" />,
    title: "API Development",
    description:
      "Creating RESTful and GraphQL APIs for seamless service communication.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-blue-600" />,
    title: "Responsive Design",
    description:
      "Ensuring flawless performance across all devices and screen sizes.",
  },
  {
    icon: <Layout className="h-10 w-10 text-blue-600" />,
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces and great user experiences.",
  },
  {
    icon: <GitBranch className="h-10 w-10 text-blue-600" />,
    title: "Version Control",
    description:
      "Managing code with Git and implementing effective collaboration strategies.",
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-600" />,
    title: "Performance Optimization",
    description:
      "Fine-tuning apps for speed, accessibility, and user experience.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-gray-100">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
            My Expertise
          </span>
          <h2 className="text-4xl font-bold mt-4 text-gray-900">
            Professional Skills
          </h2>
          <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
            Years of refining my skills across the full stack development.
            Here's my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-b-4 border-transparent hover:border-blue-600"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
