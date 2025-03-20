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
  const [isVisible, setIsVisible] = useState(false);

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

  // Add intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("MyPortfolio");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const categories = ["All", "Frontend", "Backend", "Full Stack"];

  return (
    <section
      id="MyPortfolio"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-navy-900 text-white relative overflow-hidden"
    >
      {/* Heading at the top of the section - aligned with MySkills style */}
      <div className="py-24 relative">
        {/* Abstract background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-600/20 blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-emerald-600/20 blur-3xl"></div>
        </div>

        {/* Content container */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col justify-center items-center">
            {/* Main heading with gradient */}
            <h2 className="font-bold text-5xl md:text-6xl tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500">
                Portfolio
              </span>
            </h2>
            {/* Descriptive text with animation potential */}
            <div className=" max-w-xl mt-4 text-center z-100">
              <p className="text-white text-lg leading-relaxed">
                <span className="text-white">
                  Exploring the intersection of design and technology through
                thoughtful solutions</span>
              </p>
            </div>
          </div>

          {/* Optional count indicators */}
          <div className="mt-12 flex gap-12 flex-wrap">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">12+</span>
              <span className="text-gray-400 text-sm">Projects Completed</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">8</span>
              <span className="text-gray-400 text-sm">Technologies</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">4</span>
              <span className="text-gray-400 text-sm">Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls and Filters Section */}
      <div className="container mx-auto px-4 max-w-full mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Category filters with tech styling */}
          <div
            className={`flex flex-wrap gap-3 justify-center md:justify-start transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 backdrop-blur-sm ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-amber-500/20 to-amber-400/10 border border-amber-500/50 text-amber-300 shadow-lg shadow-amber-500/10"
                    : "bg-gray-800/40 border border-gray-700/30 text-gray-400 hover:bg-gray-700/50 hover:border-gray-600/50 hover:text-gray-300"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="flex items-center gap-2">
                  {selectedCategory === category && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      className="w-1.5 h-1.5 rounded-full bg-amber-400"
                    />
                  )}
                  {category}
                </span>
              </button>
            ))}
          </div>

          {/* View toggle and GitHub link */}
          <div
            className={`flex flex-wrap gap-3 justify-center md:justify-end transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <button
              onClick={() => setIsGridView(!isGridView)}
              className="p-3 rounded-lg bg-gray-800/60 backdrop-blur-sm hover:bg-gray-700/80 border border-gray-700/50 transition-colors"
            >
              {isGridView ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                  width="20"
                  height="20"
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
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gray-800/60 hover:bg-gray-700/80 backdrop-blur-sm text-white py-2 px-4 rounded-lg border border-gray-700/50 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:scale-110 transition-transform duration-300"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span className="relative group-hover:pr-5 transition-all duration-300">
                GitHub
                <motion.span
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-0"
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Project cards with consistent styling */}
      <div className="container mx-auto px-4 max-w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${isGridView}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={
              isGridView
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                : "flex flex-col gap-8"
            }
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className={`relative group overflow-hidden rounded-lg transition-all duration-500 backdrop-blur-sm border border-gray-800/80 h-full hover:shadow-xl hover:shadow-amber-900/10 ${
                    isGridView
                      ? "bg-gray-800/80"
                      : "bg-gray-800/80 flex flex-col md:flex-row"
                  }`}
                >
                  {/* Glowing edge effect on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    className="absolute inset-0 rounded-lg border-2 border-amber-400/20 -m-0.5 pointer-events-none"
                    style={{
                      boxShadow: "0 0 15px 1px rgba(251, 191, 36, 0.2)",
                    }}
                  />

                  <div
                    className={`overflow-hidden relative ${
                      isGridView ? "h-48" : "md:w-2/5 h-48 md:h-auto"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0.4,
                      }}
                      className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"
                    />
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      style={{
                        filter: "saturate(0.8) contrast(1.1)",
                      }}
                    />
                  </div>

                  <div
                    className={`${
                      isGridView ? "p-6" : "p-6 md:w-3/5"
                    } relative flex flex-col`}
                  >
                    <motion.div
                      initial={{ width: "15%" }}
                      animate={{
                        width: hoveredProject === project.id ? "40%" : "15%",
                      }}
                      transition={{ duration: 0.5 }}
                      className="h-0.5 bg-gradient-to-r from-amber-400/70 to-amber-400/0 mb-4 rounded-full"
                    />

                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>

                    <span className="bg-gray-700/60 text-xs text-gray-300 px-3 py-1 rounded-full border border-gray-700/50 w-fit mb-3">
                      {project.category}
                    </span>

                    <p className="text-gray-400 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-700/60 backdrop-blur-sm text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      className="group flex items-center text-amber-300 font-medium hover:text-amber-200 transition-colors duration-300 w-fit mt-auto"
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
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </motion.svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
