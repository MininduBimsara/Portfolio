// Enhanced skills data with additional properties
const skillsData = [
  // Technical Skills
  {
    icon: <Code />,
    title: "Front-End Development",
    description:
      "Creating responsive and interactive user interfaces using React, Vue, and modern CSS.",
    level: 90,
    color: "#FF6B35",
    category: "technical",
    gradient: "from-orange-500 to-red-500",
    expertise: "Expert",
  },
  {
    icon: <Database />,
    title: "Database Design",
    description:
      "Designing databases with SQL and NoSQL solutions for efficient data management.",
    level: 80,
    color: "#FF6B35",
    category: "technical",
    gradient: "from-orange-500 to-amber-500",
    expertise: "Advanced",
  },
  {
    icon: <Smartphone />,
    title: "Responsive Design",
    description:
      "Ensuring flawless performance across all devices and screen sizes.",
    level: 95,
    color: "#FF6B35",
    category: "technical",
    gradient: "from-orange-500 to-yellow-500",
    expertise: "Expert",
  },
  {
    icon: <Layout />,
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces and great user experiences.",
    level: 85,
    color: "#FF6B35",
    category: "technical",
    gradient: "from-orange-500 to-pink-500",
    expertise: "Advanced",
  },
  {
    icon: <BarChart2 />,
    title: "Analytics",
    description:
      "Strong analytical and quantitative skills with data-driven approach to problem solving.",
    level: 88,
    color: "#FF6B35",
    category: "soft",
    gradient: "from-blue-500 to-purple-500",
    expertise: "Advanced",
  },
  {
    icon: <Users />,
    title: "Communication",
    description:
      "Excellent communication and interpersonal abilities across technical and non-technical teams.",
    level: 92,
    color: "#FF6B35",
    category: "soft",
    gradient: "from-green-500 to-teal-500",
    expertise: "Expert",
  },
  {
    icon: <Users />,
    title: "Collaboration",
    description:
      "Ability to work effectively independently and in cross-functional development teams.",
    level: 90,
    color: "#FF6B35",
    category: "soft",
    gradient: "from-purple-500 to-indigo-500",
    expertise: "Expert",
  },
  {
    icon: <Layout />,
    title: "Full-Stack Development",
    description:
      "Proficient in building full-stack web applications from concept to deployment.",
    level: 85,
    color: "#FF6B35",
    category: "technical",
    gradient: "from-orange-500 to-red-600",
    expertise: "Advanced",
  },
  {
    icon: <Lightbulb />,
    title: "Problem Solving",
    description:
      "Creative approach to technical challenges with efficient and elegant solutions.",
    level: 93,
    color: "#FF6B35",
    category: "soft",
    gradient: "from-yellow-500 to-orange-500",
    expertise: "Expert",
  },
  {
    icon: <Clipboard />,
    title: "Project Management",
    description:
      "Experience in managing development projects through all phases of the lifecycle.",
    level: 87,
    color: "#FF6B35",
    category: "soft",
    gradient: "from-cyan-500 to-blue-500",
    expertise: "Advanced",
  },
];

const SkillsShowcase = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [category, setCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Filter skills based on selected category
  const filteredSkills = skillsData.filter((skill) =>
    category === "all" ? true : skill.category === category
  );

  useEffect(() => {
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
    }, 6000);

    return () => clearInterval(interval);
  }, [filteredSkills.length]);

  // Enhanced progress animation
  useEffect(() => {
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

      const softSkillBars = document.querySelectorAll(".soft-skill-progress");
      softSkillBars.forEach((el) => {
        el.style.width = el.getAttribute("data-progress") + "%";
      });
    }, 500);

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

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setTouchStartX(null);
  };

  const calculateStrokeDashArray = (radius) => {
    return 2 * Math.PI * radius;
  };

  const calculateStrokeDashOffset = (radius, percentage) => {
    const circumference = 2 * Math.PI * radius;
    return circumference * (1 - percentage / 100);
  };

  const renderSkillCard = (skill, index) => {
    const isHovered = hoveredCard === index;

    if (skill.category === "technical") {
      return (
        <div
          className={`group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-2xl w-full mx-auto transform transition-all duration-500 hover:scale-105 hover:rotate-1 border border-gray-200 dark:border-gray-700 overflow-hidden ${
            isHovered ? "shadow-orange-500/25" : ""
          }`}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-0 group-hover:opacity-50"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 10}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: "2s",
                }}
              ></div>
            ))}
          </div>

          {/* Enhanced category badge */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-lg">
              Technical
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                {skill.expertise}
              </span>
            </div>
          </div>

          {/* Enhanced circular progress */}
          <div className="relative w-48 h-48 mx-auto">
            <svg
              className="w-full h-full"
              viewBox="0 0 180 180"
              style={{ transform: "rotate(-90deg)" }}
            >
              {/* Outer glow effect */}
              <circle
                cx="90"
                cy="90"
                r="80"
                fill="transparent"
                stroke="url(#glowGradient)"
                strokeWidth="2"
                className="animate-pulse"
              />
              {/* Background circle */}
              <circle
                cx="90"
                cy="90"
                r="75"
                fill="transparent"
                stroke="#f3f4f6"
                strokeWidth="8"
                strokeLinecap="round"
              />
              {/* Progress circle */}
              <circle
                cx="90"
                cy="90"
                r="75"
                fill="transparent"
                stroke="url(#progressGradient)"
                strokeWidth="10"
                strokeDasharray={calculateStrokeDashArray(75)}
                strokeDashoffset={calculateStrokeDashArray(75)}
                strokeLinecap="round"
                className="skill-progress drop-shadow-lg"
                style={{
                  transition:
                    "stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)",
                  filter: "drop-shadow(0 0 8px rgba(255, 107, 53, 0.3))",
                }}
              />
              {/* Gradient definitions */}
              <defs>
                <linearGradient
                  id="progressGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FF6B35" />
                  <stop offset="50%" stopColor="#FF8E53" />
                  <stop offset="100%" stopColor="#FFB370" />
                </linearGradient>
                <linearGradient
                  id="glowGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FFB370" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Enhanced center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div
                className={`p-4 rounded-2xl bg-gradient-to-br ${skill.gradient} text-white mb-3 shadow-xl transform transition-transform duration-300 group-hover:scale-110`}
              >
                {React.cloneElement(skill.icon, { size: 32 })}
              </div>
              <span className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                {skill.level}%
              </span>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full mx-0.5 transition-colors duration-300 ${
                      i < Math.floor(skill.level / 20)
                        ? "bg-orange-500"
                        : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced title and description */}
          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
              {skill.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {skill.description}
            </p>
          </div>

          {/* Skill level indicator */}
          <div className="mt-6 flex justify-center">
            <div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full text-white text-xs font-medium shadow-lg">
              {skill.level >= 90
                ? "Expert Level"
                : skill.level >= 80
                ? "Advanced"
                : "Proficient"}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={`group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-2xl w-full mx-auto transform transition-all duration-500 hover:scale-105 hover:-rotate-1 border border-gray-200 dark:border-gray-700 overflow-hidden ${
            isHovered ? "shadow-green-500/25" : ""
          }`}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Enhanced category badge */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium shadow-lg">
              Soft Skill
            </span>
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                {skill.expertise}
              </span>
            </div>
          </div>

          {/* Enhanced soft skill header */}
          <div className="flex items-center mb-8">
            <div
              className={`p-5 rounded-2xl bg-gradient-to-br ${skill.gradient} text-white mr-6 shadow-xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
            >
              {React.cloneElement(skill.icon, { size: 32 })}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-green-600 transition-colors duration-300">
                {skill.title}
              </h3>
              <div className="flex items-center mt-2">
                <span className="font-bold text-green-600 text-xl mr-3">
                  {skill.level}%
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 mx-0.5 transition-colors duration-300 ${
                        i < Math.floor(skill.level / 20)
                          ? "text-yellow-500 fill-current"
                          : "text-gray-300 dark:text-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced progress bar with animation */}
          <div className="relative w-full bg-gray-200 dark:bg-gray-600 h-4 rounded-full overflow-hidden mb-6 shadow-inner">
            <div
              className={`soft-skill-progress h-full bg-gradient-to-r ${skill.gradient} rounded-full w-0 relative shadow-lg`}
              data-progress={skill.level}
              style={{ transition: "width 2s cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm border-l-4 border-green-400 pl-4 mt-6 leading-relaxed italic">
            {skill.description}
          </p>

          {/* Enhanced skill tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {getSkillTags(skill.title).map((tag, i) => (
              <span
                key={i}
                className={`px-3 py-1 bg-gradient-to-r ${skill.gradient} text-white text-xs rounded-full shadow-md transform transition-transform duration-300 hover:scale-105`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Floating achievement badge */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-4 h-4 text-white fill-current" />
            </div>
          </div>
        </div>
      );
    }
  };

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
      className="py-20 relative overflow-hidden w-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"
    >
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0">
        {/* Animated background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Enhanced dot pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] bg-repeat"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        {/* Enhanced header section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-gray-900 to-slate-900 rounded-2xl p-10 max-w-2xl mx-auto shadow-2xl relative overflow-hidden border border-gray-700">
            {/* Enhanced decorative elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"></div>
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-20 blur-xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl"></div>

            {/* Animated expertise indicator */}
            <div className="flex justify-center mb-6">
              <div className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-sm font-medium text-white inline-flex items-center gap-3 shadow-xl">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-white animate-bounce"></div>
                  <div
                    className="h-2 w-2 rounded-full bg-white animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="h-2 w-2 rounded-full bg-white animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                Professional Expertise
              </div>
            </div>

            {/* Enhanced title */}
            <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            {/* Enhanced description */}
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              A comprehensive showcase of my technical expertise and
              professional capabilities, refined through years of hands-on
              experience and continuous learning.
            </p>

            {/* Enhanced category toggle */}
            <div className="flex justify-center gap-3 mb-8">
              {[
                {
                  key: "all",
                  label: "All Skills",
                  icon: <Star className="w-4 h-4" />,
                },
                {
                  key: "technical",
                  label: "Technical",
                  icon: <Code className="w-4 h-4" />,
                },
                {
                  key: "soft",
                  label: "Soft Skills",
                  icon: <Users className="w-4 h-4" />,
                },
              ].map(({ key, label, icon }) => (
                <button
                  key={key}
                  onClick={() => setCategory(key)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    category === key
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl transform scale-105"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white shadow-lg"
                  }`}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>

            {/* Enhanced navigation controls */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevSlide}
                className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Previous
                </span>
              </button>

              <div className="text-gray-400 text-sm">
                {activeIndex + 1} / {filteredSkills.length}
              </div>

              <button
                onClick={nextSlide}
                className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group hover:scale-110"
              >
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Next
                </span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced carousel */}
        <div
          className="relative w-full mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out w-full"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {filteredSkills.map((skill, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex justify-center px-4"
                >
                  <div className="flex flex-col items-center justify-center w-full max-w-md">
                    {renderSkillCard(skill, index)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced indicator dots */}
          <div className="flex justify-center mt-12 flex-wrap gap-3">
            {filteredSkills.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all ease-in-out duration-500 transform hover:scale-125 ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-orange-500 to-red-500 w-12 shadow-lg"
                    : "bg-gray-600 hover:bg-orange-300 w-3 hover:w-8"
                }`}
                aria-label={`Go to skill ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Enhanced mobile controls */}
        <div className="mt-10 flex justify-center gap-4 md:hidden">
          <button
            onClick={prevSlide}
            className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-orange-500 hover:to-red-500 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-xl transform hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" /> Previous
          </button>
          <button
            onClick={nextSlide}
            className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-orange-500 hover:to-red-500 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-xl transform hover:scale-105"
          >
            Next <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
