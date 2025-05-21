import React, { useState, useEffect } from "react";
import {
  Code,
  Database,
  Smartphone,
  Layout,
  ChevronLeft,
  ChevronRight,
  BarChart2,
  Users,
  Lightbulb,
  Clipboard,
} from "lucide-react";

// Combined technical and soft skills data with orange theme
const skillsData = [
  // Technical Skills
  {
    icon: <Code />,
    title: "Front-End Development",
    description:
      "Creating responsive and interactive user interfaces using React, Vue, and modern CSS.",
    level: 90,
    color: "#FF6B35", // Vibrant orange
    category: "technical",
  },
  {
    icon: <Database />,
    title: "Database Design",
    description:
      "Designing databases with SQL and NoSQL solutions for efficient data management.",
    level: 80,
    color: "#FF6B35",
    category: "technical",
  },
  {
    icon: <Smartphone />,
    title: "Responsive Design",
    description:
      "Ensuring flawless performance across all devices and screen sizes.",
    level: 95,
    color: "#FF6B35",
    category: "technical",
  },
  {
    icon: <Layout />,
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces and great user experiences.",
    level: 85,
    color: "#FF6B35",
    category: "technical",
  },
  // Soft Skills from the image
  {
    icon: <BarChart2 />,
    title: "Analytics",
    description:
      "Strong analytical and quantitative skills with data-driven approach to problem solving.",
    level: 88,
    color: "#FF6B35",
    category: "soft",
  },
  {
    icon: <Users />,
    title: "Communication",
    description:
      "Excellent communication and interpersonal abilities across technical and non-technical teams.",
    level: 92,
    color: "#FF6B35",
    category: "soft",
  },
  {
    icon: <Users />,
    title: "Collaboration",
    description:
      "Ability to work effectively independently and in cross-functional development teams.",
    level: 90,
    color: "#FF6B35",
    category: "soft",
  },
  {
    icon: <Layout />,
    title: "Full-Stack Development",
    description:
      "Proficient in building full-stack web applications from concept to deployment.",
    level: 85,
    color: "#FF6B35",
    category: "technical",
  },
  {
    icon: <Lightbulb />,
    title: "Problem Solving",
    description:
      "Creative approach to technical challenges with efficient and elegant solutions.",
    level: 93,
    color: "#FF6B35",
    category: "soft",
  },
  {
    icon: <Clipboard />,
    title: "Project Management",
    description:
      "Experience in managing development projects through all phases of the lifecycle.",
    level: 87,
    color: "#FF6B35",
    category: "soft",
  },
];

const SkillsShowcase = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [category, setCategory] = useState("all"); // all, technical, soft

  // Filter skills based on selected category
  const filteredSkills = skillsData.filter((skill) =>
    category === "all" ? true : skill.category === category
  );

  useEffect(() => {
    // Reset active index when category changes
    setActiveIndex(0);
  }, [category]);

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

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === filteredSkills.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredSkills.length]);

  // Trigger animation for circle progress when component mounts
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".skill-progress");
      elements.forEach((el, index) => {
        const skill = filteredSkills[index % filteredSkills.length];
        if (skill) {
          el.style.strokeDashoffset = calculateStrokeDashOffset(
            70,
            skill.level
          );
        }
      });

      // For soft skills horizontal bar animation
      const softSkillBars = document.querySelectorAll(".soft-skill-progress");
      softSkillBars.forEach((el) => {
        el.style.width = el.getAttribute("data-progress") + "%";
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [filteredSkills, activeIndex]);

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === filteredSkills.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? filteredSkills.length - 1 : current - 1
    );
  };

  // Touch handlers for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Swipe threshold (50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left, go to next
        nextSlide();
      } else {
        // Swipe right, go to previous
        prevSlide();
      }
    }

    setTouchStartX(null);
  };

  // Calculate the circumference and stroke dash values for each skill
  const calculateStrokeDashArray = (radius) => {
    return 2 * Math.PI * radius;
  };

  const calculateStrokeDashOffset = (radius, percentage) => {
    const circumference = 2 * Math.PI * radius;
    return circumference * (1 - percentage / 100);
  };

  // Render different card style based on skill category
  const renderSkillCard = (skill, index) => {
    if (skill.category === "technical") {
      // Technical skill - keep the original circular progress design
      return (
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg w-full mx-auto transform transition-transform duration-300 hover:scale-105">
          {/* Category badge */}
          <div className="flex justify-end mb-2">
            <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
              Technical
            </span>
          </div>

          {/* Circular progress indicator */}
          <div className="relative w-40 h-40 mx-auto">
            {/* Fixed SVG with explicit dimensions */}
            <svg
              className="w-full h-full"
              viewBox="0 0 160 160"
              style={{ transform: "rotate(-90deg)" }}
            >
              {/* Background circle */}
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="transparent"
                stroke="#f2f2f2"
                strokeWidth="10"
                strokeLinecap="round"
              />
              {/* Progress circle with animation - Animation now controlled by useEffect */}
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="transparent"
                stroke={skill.color}
                strokeWidth="12"
                strokeDasharray={calculateStrokeDashArray(70)}
                strokeDashoffset={calculateStrokeDashArray(70)} // Start at 0%
                strokeLinecap="round"
                className="skill-progress"
                style={{
                  transition: "stroke-dashoffset 1.5s ease-in-out",
                }}
              />
            </svg>
            {/* Icon and percentage text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-500 mb-2">
                {React.cloneElement(skill.icon, { size: 24 })}
              </div>
              <span className="text-3xl font-bold text-gray-800 dark:text-white">
                {skill.level}%
              </span>
            </div>
          </div>

          {/* Skill title and description */}
          <div className="text-center mt-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {skill.description}
            </p>
          </div>
        </div>
      );
    } else {
      // Soft skill - new horizontal bar design with same color theme
      return (
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg w-full mx-auto transform transition-transform duration-300 hover:scale-105">
          {/* Category badge */}
          <div className="flex justify-end mb-2">
            <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
              Soft Skill
            </span>
          </div>

          {/* Soft skill header with icon */}
          <div className="flex items-center mb-6">
            <div className="p-4 rounded-xl bg-orange-100 text-orange-500 mr-4">
              {React.cloneElement(skill.icon, { size: 28 })}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {skill.title}
              </h3>
              <div className="flex items-center mt-1">
                <span className="font-bold text-orange-500 text-lg mr-2">
                  {skill.level}%
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full mx-0.5 ${
                        i < Math.floor(skill.level / 20)
                          ? "bg-orange-500"
                          : "bg-gray-300 dark:bg-gray-500"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal progress bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-600 h-3 rounded-full overflow-hidden mb-4">
            <div
              className="soft-skill-progress h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full w-0"
              data-progress={skill.level}
              style={{ transition: "width 1.5s ease-in-out" }}
            ></div>
          </div>

          {/* Descriptive text */}
          <p className="text-gray-600 dark:text-gray-300 text-sm border-l-4 border-orange-400 pl-3 mt-4">
            {skill.description}
          </p>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {getSkillTags(skill.title).map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      );
    }
  };

  // Helper function to generate relevant tags for soft skills
  const getSkillTags = (skillTitle) => {
    const tagMap = {
      Analytics: ["Data Analysis", "Insight", "Metrics"],
      Communication: ["Team Communication", "Presentation", "Documentation"],
      Collaboration: ["Teamwork", "Adaptability", "Leadership"],
      "Problem Solving": ["Critical Thinking", "Innovation", "Troubleshooting"],
      "Project Management": ["Planning", "Organization", "Leadership"],
    };

    return tagMap[skillTitle] || ["Professional", "Growth"];
  };

  return (
    <section
      id="skills-section"
      className="py-16 bg-gray-100 dark:bg-gray-800 relative overflow-hidden w-full"
    >
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        {/* Improved Heading at the top of the section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Redesigned header section */}
          <div className="bg-gray-900 rounded-lg p-8 max-w-lg mx-auto shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-orange-500 opacity-10"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-orange-400 opacity-10"></div>

            {/* Pill indicator with animation */}
            <div className="flex justify-center mb-4">
              <div className="px-4 py-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full text-sm font-medium text-white inline-flex items-center gap-2 shadow-md">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
                My Expertise
              </div>
            </div>

            {/* Title with emphasis */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional <span className="text-orange-500">Skills</span>
            </h2>

            {/* Description with improved typography */}
            <p className="text-gray-300 max-w-md mx-auto leading-relaxed">
              Here's a showcase of my technical expertise and professional
              capabilities
            </p>

            {/* Skill category toggle */}
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={() => setCategory("all")}
                className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  category === "all"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                All Skills
              </button>
              <button
                onClick={() => setCategory("technical")}
                className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  category === "technical"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Technical
              </button>
              <button
                onClick={() => setCategory("soft")}
                className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  category === "soft"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Soft Skills
              </button>
            </div>

            {/* Navigation arrow indicators in white */}
            <div className="flex justify-between mt-6">
              <button
                onClick={prevSlide}
                className="text-white hover:text-orange-400 transition-colors duration-300 flex items-center gap-1 group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Previous
                </span>
              </button>
              <button
                onClick={nextSlide}
                className="text-white hover:text-orange-400 transition-colors duration-300 flex items-center gap-1 group"
              >
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Next
                </span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel - Fixed for mobile */}
        <div
          className="relative w-full mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {filteredSkills.map((skill, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex justify-center"
                >
                  <div className="flex flex-col items-center justify-center w-full max-w-xs">
                    {/* Render different card designs based on skill type */}
                    {renderSkillCard(skill, index)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel indicator dots */}
          <div className="flex justify-center mt-8 flex-wrap gap-2">
            {filteredSkills.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`mx-1 h-3 rounded-full transition-all ease-in-out duration-300 ${
                  activeIndex === index
                    ? "bg-orange-500 w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-orange-300 w-3"
                }`}
                aria-label={`Go to skill ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Mobile navigation controls - improved styling */}
        <div className="mt-6 flex justify-center md:hidden">
          <button
            onClick={prevSlide}
            className="mx-2 bg-gray-800 hover:bg-orange-500 text-white px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <button
            onClick={nextSlide}
            className="mx-2 bg-gray-800 hover:bg-orange-500 text-white px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
