import React, { useState, useEffect } from "react";
import {
  Code,
  Database,
  Smartphone,
  Layout,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Skill data with orange theme
const skillsData = [
  {
    icon: <Code />,
    title: "Front-End Development",
    description:
      "Creating responsive and interactive user interfaces using React, Vue, and modern CSS.",
    level: 90,
    color: "#FF6B35", // Vibrant orange
  },
  {
    icon: <Database />,
    title: "Database Design",
    description:
      "Designing databases with SQL and NoSQL solutions for efficient data management.",
    level: 80,
    color: "#FF6B35",
  },
  {
    icon: <Smartphone />,
    title: "Responsive Design",
    description:
      "Ensuring flawless performance across all devices and screen sizes.",
    level: 95,
    color: "#FF6B35",
  },
  {
    icon: <Layout />,
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces and great user experiences.",
    level: 85,
    color: "#FF6B35",
  },
];

const SkillsShowcase = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

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
        current === skillsData.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === skillsData.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? skillsData.length - 1 : current - 1
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

        {/* Carousel - FIXED THE MOBILE ALIGNMENT ISSUES */}
        <div
          className="relative w-full mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel container - Fixed the centering and overflow issues */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex justify-center"
                >
                  <div className="flex flex-col items-center justify-center w-full max-w-xs">
                    {/* Skill card with circular progress */}
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg w-full mx-auto transform transition-transform duration-300 hover:scale-105">
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
                          {/* Progress circle with animation */}
                          <circle
                            cx="80"
                            cy="80"
                            r="70"
                            fill="transparent"
                            stroke={skill.color}
                            strokeWidth="12"
                            strokeDasharray={calculateStrokeDashArray(70)}
                            strokeDashoffset={calculateStrokeDashOffset(
                              70,
                              skill.level
                            )}
                            strokeLinecap="round"
                            className="skill-progress"
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel indicator dots */}
          <div className="flex justify-center mt-8">
            {skillsData.map((_, index) => (
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

      {/* CSS for the progress animation */}
      <style jsx>{`
        .skill-progress {
          transition: stroke-dashoffset 2s ease-in-out;
          stroke-dashoffset: ${calculateStrokeDashArray(70)}; /* Start at 0% */
        }

        section.py-16:hover .skill-progress {
          stroke-dashoffset: ${skillsData.map((skill) =>
            calculateStrokeDashOffset(70, skill.level)
          )[activeIndex]};
        }
      `}</style>
    </section>
  );
};

export default SkillsShowcase;
