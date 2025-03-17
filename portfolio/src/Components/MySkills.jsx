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

export default function SkillsSection() {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      title: "Front-End Development",
      description:
        "Creating responsive and interactive user interfaces with React, Vue, and modern CSS frameworks.",
    },
    {
      icon: <Server className="h-8 w-8 text-indigo-600" />,
      title: "Back-End Development",
      description:
        "Building robust server-side applications with Node.js, Express, and other modern frameworks.",
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: "Database Design",
      description:
        "Designing and optimizing databases using SQL and NoSQL solutions for efficient data storage.",
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: "API Development",
      description:
        "Creating RESTful and GraphQL APIs that enable seamless communication between services.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
      title: "Responsive Design",
      description:
        "Ensuring applications work flawlessly across all devices and screen sizes.",
    },
    {
      icon: <Layout className="h-8 w-8 text-indigo-600" />,
      title: "UI/UX Design",
      description:
        "Crafting intuitive interfaces and experiences that delight users and solve real problems.",
    },
    {
      icon: <GitBranch className="h-8 w-8 text-indigo-600" />,
      title: "Version Control",
      description:
        "Managing code with Git and implementing effective branching strategies for team collaboration.",
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: "Performance Optimization",
      description:
        "Fine-tuning applications for speed, accessibility, and overall user experience.",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
            Professional Skillset
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            I've spent years refining my skills across the full stack
            development spectrum. Here's what I bring to the table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-b-4 border-transparent hover:border-indigo-600"
            >
              <div className="bg-indigo-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
