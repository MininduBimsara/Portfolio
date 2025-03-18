import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MyPortfolio() {
  // Sample data - replace with your actual data import
  const portfolioData = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Built a full-stack e-commerce platform with React, Node.js, and MongoDB",
      image: "/img/sample.png",
      link: "View Project",
      url: "#",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Developed a task management application with authentication and real-time updates",
      image: "/img/sample2.png",
      link: "View Project",
      url: "#",
      category: "Frontend",
      technologies: ["React", "Redux", "Firebase"],
    },
    {
      id: 3,
      title: "Fitness Tracker",
      description:
        "Created a fitness tracking application with data visualization and progress tracking",
      image: "/img/sample3.png",
      link: "View Project",
      url: "#",
      category: "Backend",
      technologies: ["Node.js", "Express", "MySQL"],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(portfolioData);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isGridView, setIsGridView] = useState(true);

  // Filter projects when category changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(portfolioData);
    } else {
      setFilteredProjects(
        portfolioData.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const categories = ["All", "Frontend", "Backend", "Full Stack"];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="MyPortfolio"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center mb-12"
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-indigo-400 font-semibold text-lg mb-2">
              Recent Work
            </h3>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              My Portfolio
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub Profile
            </a>
            <button
              onClick={() => setIsGridView(!isGridView)}
              className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              {isGridView ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              )}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${isGridView}`}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className={
              isGridView
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-8"
            }
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className={`relative group overflow-hidden rounded-2xl transition-all duration-500 ${
                  isGridView
                    ? "bg-gray-800 shadow-xl"
                    : "bg-gray-800 shadow-xl flex flex-col md:flex-row"
                }`}
              >
                <div
                  className={`overflow-hidden relative ${
                    isGridView ? "h-48" : "h-48 md:h-auto md:w-2/5"
                  }`}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-indigo-600/80 text-white text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`${isGridView ? "p-6" : "p-6 md:w-3/5"}`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredProject === project.id ? "40%" : "15%",
                    }}
                    transition={{ duration: 0.5 }}
                    className="h-1 bg-indigo-500 mb-4 rounded-full"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <a
                      href={project.url}
                      className="group flex items-center text-indigo-400 font-medium hover:text-indigo-300 transition-colors duration-300"
                    >
                      {project.link}
                      <motion.svg
                        initial={{ x: 0 }}
                        animate={{ x: hoveredProject === project.id ? 5 : 0 }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </motion.svg>
                    </a>
                    <span className="bg-gray-700 text-xs text-gray-300 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
