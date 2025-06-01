import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Trophy,
  Calendar,
  MapPin,
  TrendingUp,
  Star,
  Award,
  GraduationCap,
  Zap,
  Target,
} from "lucide-react";

export default function EducationSection() {
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("timeline");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("education");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science Honors",
      field: "Software Engineering",
      institution: "University of Kelaniya",
      period: "2023 - Present",
      status: "In Progress",
      gpa: "3.81/4.0",
      level: "Undergraduate",
      year: 2023,
      icon: GraduationCap,
      color: "orange",
      achievements: [
        "Maintaining High Academic Standing",
        "Software Engineering Specialization",
        "Advanced Programming Concepts",
        "System Design & Architecture",
      ],
      description:
        "Pursuing comprehensive software engineering education with focus on modern development practices, system design, and emerging technologies.",
    },
    {
      id: 2,
      degree: "Pearson Diploma",
      field: "Information Technology",
      institution: "ESOFT Metro Campus",
      period: "2022 - 2023",
      status: "Completed",
      level: "Diploma",
      year: 2022,
      icon: BookOpen,
      color: "orange",
      achievements: [
        "Industry-Standard Curriculum",
        "Practical IT Skills",
        "Professional Development",
        "Technology Foundations",
      ],
      description:
        "Comprehensive IT foundation covering programming, databases, networking, and modern web technologies with hands-on practical experience.",
    },
    {
      id: 3,
      degree: "GCE Advanced Level",
      field: "University Preparation",
      institution: "Trinity College Kandy",
      period: "Completed",
      status: "3B's",
      level: "A/L",
      year: 2021,
      icon: Award,
      color: "orange",
      achievements: [
        "Strong Academic Performance",
        "University Qualification",
        "Subject Mastery",
        "Analytical Thinking",
      ],
      description:
        "Achieved excellent results in Advanced Level examinations, demonstrating strong analytical and problem-solving capabilities.",
    },
    {
      id: 4,
      degree: "GCE Ordinary Level",
      field: "Foundation Studies",
      institution: "Trinity College Kandy",
      period: "Completed",
      status: "9A's",
      level: "O/L",
      year: 2019,
      icon: Trophy,
      color: "orange",
      achievements: [
        "Outstanding Academic Excellence",
        "9 Distinction Grades",
        "Top Performance",
        "Academic Foundation",
      ],
      description:
        "Exceptional performance with 9 A grades, establishing a strong academic foundation across diverse subjects and disciplines.",
    },
  ];

  const stats = [
    {
      label: "Current GPA",
      value: "3.81",
      subtext: "Honors Standing",
      icon: TrendingUp,
    },
    {
      label: "Academic Years",
      value: "6+",
      subtext: "Continuous Learning",
      icon: Calendar,
    },
    {
      label: "Distinctions",
      value: "9",
      subtext: "A Grades Achieved",
      icon: Star,
    },
    {
      label: "Institutions",
      value: "3",
      subtext: "Educational Journey",
      icon: MapPin,
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black bg-opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="py-24 relative">
        {/* Header Section */}
        <div className="w-full px-4 mb-16">
          <div className="flex flex-col justify-center items-center">
            <motion.h2
              className="font-bold text-5xl md:text-6xl tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600">
                Education
              </span>
            </motion.h2>
            <motion.div
              className="max-w-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-200 text-lg leading-relaxed">
                Building expertise through rigorous academic pursuit and
                continuous learning across diverse technological domains.
              </p>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center group-hover:border-orange-500/50 transition-colors duration-300">
                  <stat.icon className="w-7 h-7 text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-orange-400 text-sm font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-xs">{stat.subtext}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="container mx-auto px-4 max-w-6xl mb-8">
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { id: "timeline", label: "Academic Timeline", icon: Calendar },
              { id: "achievements", label: "Key Achievements", icon: Trophy },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-orange-500/20 to-orange-600/10 border border-orange-500/50 text-orange-300 shadow-lg shadow-orange-500/10"
                    : "bg-gray-800/40 border border-gray-700/30 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600/50 hover:text-orange-200"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatePresence mode="wait">
            {activeTab === "timeline" && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Modern Vertical Timeline */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/60 via-orange-500/40 to-transparent transform md:-translate-x-0.5"></div>

                  {educationData.map((education, index) => (
                    <motion.div
                      key={education.id}
                      className={`relative flex items-center mb-16 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{
                        opacity: isVisible ? 1 : 0,
                        x: isVisible ? 0 : index % 2 === 0 ? -50 : 50,
                      }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900 transform md:-translate-x-2 shadow-lg shadow-orange-500/30 z-10"></div>

                      {/* Year Badge */}
                      <div className="absolute left-16 md:left-1/2 top-6 md:top-auto md:transform md:-translate-x-1/2 md:-translate-y-12">
                        <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
                          {education.year}
                        </div>
                      </div>

                      {/* Content Card */}
                      <div
                        className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                          index % 2 === 0
                            ? "md:mr-auto md:pr-12"
                            : "md:ml-auto md:pl-12"
                        }`}
                      >
                        <motion.div
                          className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-500 group cursor-pointer"
                          whileHover={{
                            y: -4,
                            boxShadow: "0 20px 40px rgba(249, 115, 22, 0.1)",
                          }}
                          onClick={() =>
                            setSelectedInstitution(
                              selectedInstitution === education.id
                                ? null
                                : education.id
                            )
                          }
                        >
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-lg flex items-center justify-center border border-orange-500/20">
                                <education.icon className="w-6 h-6 text-orange-400" />
                              </div>
                              <div>
                                <div className="text-sm text-orange-400 font-medium">
                                  {education.level}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {education.period}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                education.status === "In Progress"
                                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                  : education.status.includes("A")
                                  ? "bg-green-500/20 text-green-300 border border-green-500/30"
                                  : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
                              }`}
                            >
                              {education.status}
                            </div>
                          </div>

                          {/* Content */}
                          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-orange-200 transition-colors">
                            {education.degree}
                          </h3>
                          {education.field && (
                            <div className="text-orange-400 font-medium mb-2">
                              {education.field}
                            </div>
                          )}
                          <div className="flex items-center text-gray-400 text-sm mb-3">
                            <MapPin className="w-4 h-4 mr-1" />
                            {education.institution}
                          </div>

                          {education.gpa && (
                            <div className="flex items-center gap-2 mb-3">
                              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" />
                                GPA: {education.gpa}
                              </div>
                            </div>
                          )}

                          <p className="text-gray-300 text-sm mb-4">
                            {education.description}
                          </p>

                          {/* Expandable Content */}
                          <AnimatePresence>
                            {selectedInstitution === education.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-gray-700/50 pt-4 mt-4"
                              >
                                <h4 className="text-orange-400 font-medium mb-3 flex items-center gap-2">
                                  <Target className="w-4 h-4" />
                                  Key Achievements
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {education.achievements.map(
                                    (achievement, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-center gap-2 text-sm text-gray-300"
                                      >
                                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                                        {achievement}
                                      </div>
                                    )
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Click Indicator */}
                          <div className="flex justify-center mt-4">
                            <motion.div
                              className="w-8 h-0.5 bg-gradient-to-r from-orange-500/60 to-transparent rounded-full"
                              animate={{
                                width:
                                  selectedInstitution === education.id
                                    ? "2rem"
                                    : "1rem",
                              }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "achievements" && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {/* Academic Excellence Card */}
                <motion.div
                  className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-orange-500/30 transition-all duration-500"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 20px 40px rgba(249, 115, 22, 0.1)",
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-full flex items-center justify-center border border-orange-500/20">
                      <Trophy className="w-8 h-8 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Academic Excellence
                      </h3>
                      <p className="text-gray-400">
                        Outstanding Performance Record
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">
                        Current University GPA
                      </span>
                      <span className="text-green-400 font-semibold">
                        3.81/4.0
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">O/L Examination</span>
                      <span className="text-orange-400 font-semibold">
                        9 A Grades
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">A/L Performance</span>
                      <span className="text-blue-400 font-semibold">
                        3 B Grades
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Learning Journey Card */}
                <motion.div
                  className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-orange-500/30 transition-all duration-500"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 20px 40px rgba(249, 115, 22, 0.1)",
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-full flex items-center justify-center border border-orange-500/20">
                      <Zap className="w-8 h-8 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Learning Journey
                      </h3>
                      <p className="text-gray-400">
                        Continuous Skill Development
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">
                        Software Engineering Focus
                      </span>
                      <span className="text-purple-400 font-semibold">
                        Current
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">IT Foundation</span>
                      <span className="text-blue-400 font-semibold">
                        Completed
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Academic Foundation</span>
                      <span className="text-green-400 font-semibold">
                        Excellence
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
