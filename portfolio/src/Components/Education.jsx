import React, { useState, useEffect } from "react";
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
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black bg-opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="relative">
        {/* Header Section */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
          <div className="flex flex-col justify-center items-center">
            <h2
              className={`font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4 text-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600">
                Education
              </span>
            </h2>
            <div
              className={`max-w-xl text-center px-4 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                Building expertise through rigorous academic pursuit and
                continuous learning across diverse technological domains.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-7"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-600 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center group-hover:border-orange-500/50 transition-colors duration-300">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-orange-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-orange-400 text-xs sm:text-sm font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-xs">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
          <div
            className={`flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 max-w-md mx-auto transition-all duration-600 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            {[
              { id: "timeline", label: "Academic Timeline", icon: Calendar },
              { id: "achievements", label: "Key Achievements", icon: Trophy },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 backdrop-blur-sm text-sm sm:text-base ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-orange-500/20 to-orange-600/10 border border-orange-500/50 text-orange-300 shadow-lg shadow-orange-500/10"
                    : "bg-gray-800/40 border border-gray-700/30 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600/50 hover:text-orange-200"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {activeTab === "timeline" && (
            <div
              className={`transition-all duration-500 ${
                activeTab === "timeline" ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Mobile-First Timeline */}
              <div className="relative">
                {/* Timeline Line - Simplified for mobile */}
                <div className="absolute left-6 sm:left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/60 via-orange-500/40 to-transparent lg:transform lg:-translate-x-0.5"></div>

                {educationData.map((education, index) => (
                  <div
                    key={education.id}
                    className={`relative mb-12 sm:mb-16 transition-all duration-800 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: `${1000 + index * 200}ms` }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute lg:top-10 left-6 sm:left-8 lg:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full border-2 sm:border-4 border-gray-900 lg:transform lg:-translate-x-2 shadow-lg shadow-orange-500/30 z-10"></div>

                    {/* Year Badge */}
                    <div className="absolute left-12 sm:left-16 top-0 lg:left-1/2 lg:top-10 lg:transform lg:-translate-x-1/2 lg:-translate-y-12">
                      <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {education.year}
                      </div>
                    </div>

                    {/* Content Card - Mobile-first approach */}
                    <div className="ml-16 sm:ml-20 lg:ml-0 lg:w-full">
                      {/* Desktop: Alternating layout */}
                      <div
                        className={`lg:flex lg:items-center ${
                          index % 2 === 0
                            ? "lg:flex-row"
                            : "lg:flex-row-reverse"
                        }`}
                      >
                        <div
                          className={`lg:w-5/12 ${
                            index % 2 === 0
                              ? "lg:mr-auto lg:pr-12"
                              : "lg:ml-auto lg:pl-12"
                          }`}
                        >
                          <div
                            className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-orange-500/30 transition-all duration-500 group cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
                            onClick={() =>
                              setSelectedInstitution(
                                selectedInstitution === education.id
                                  ? null
                                  : education.id
                              )
                            }
                          >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-lg flex items-center justify-center border border-orange-500/20 flex-shrink-0">
                                  <education.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-xs sm:text-sm text-orange-400 font-medium truncate">
                                    {education.level}
                                  </div>
                                  <div className="text-xs text-gray-400 truncate">
                                    {education.period}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 ${
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
                            <h3 className="text-base sm:text-lg font-semibold text-white mb-1 group-hover:text-orange-200 transition-colors leading-tight">
                              {education.degree}
                            </h3>
                            {education.field && (
                              <div className="text-orange-400 font-medium mb-2 text-sm sm:text-base">
                                {education.field}
                              </div>
                            )}
                            <div className="flex items-center text-gray-400 text-xs sm:text-sm mb-3">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                              <span className="truncate">
                                {education.institution}
                              </span>
                            </div>

                            {education.gpa && (
                              <div className="flex items-center gap-2 mb-3">
                                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
                                  <TrendingUp className="w-3 h-3" />
                                  GPA: {education.gpa}
                                </div>
                              </div>
                            )}

                            <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                              {education.description}
                            </p>

                            {/* Expandable Content */}
                            {selectedInstitution === education.id && (
                              <div className="border-t border-gray-700/50 pt-3 sm:pt-4 mt-3 sm:mt-4 animate-fadeIn">
                                <h4 className="text-orange-400 font-medium mb-3 flex items-center gap-2 text-sm sm:text-base">
                                  <Target className="w-4 h-4" />
                                  Key Achievements
                                </h4>
                                <div className="grid grid-cols-1 gap-2">
                                  {education.achievements.map(
                                    (achievement, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-start gap-2 text-xs sm:text-sm text-gray-300"
                                      >
                                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="leading-relaxed">
                                          {achievement}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Click Indicator */}
                            <div className="flex justify-center mt-3 sm:mt-4">
                              <div
                                className={`h-0.5 bg-gradient-to-r from-orange-500/60 to-transparent rounded-full transition-all duration-300 ${
                                  selectedInstitution === education.id
                                    ? "w-8"
                                    : "w-4"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 transition-all duration-500 ${
                activeTab === "achievements" ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Academic Excellence Card */}
              <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-6 sm:p-8 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-full flex items-center justify-center border border-orange-500/20 flex-shrink-0">
                    <Trophy className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-orange-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Academic Excellence
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Outstanding Performance Record
                    </p>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm sm:text-base">
                      Current University GPA
                    </span>
                    <span className="text-green-400 font-semibold text-sm sm:text-base">
                      3.81/4.0
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm sm:text-base">
                      O/L Examination
                    </span>
                    <span className="text-orange-400 font-semibold text-sm sm:text-base">
                      9 A Grades
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm sm:text-base">
                      A/L Performance
                    </span>
                    <span className="text-blue-400 font-semibold text-sm sm:text-base">
                      3 B Grades
                    </span>
                  </div>
                </div>
              </div>

              {/* Learning Journey Card */}
              <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-6 sm:p-8 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-full flex items-center justify-center border border-orange-500/20 flex-shrink-0">
                    <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-orange-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Learning Journey
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Continuous Skill Development
                    </p>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm sm:text-base">
                      Software Engineering Focus
                    </span>
                    <span className="text-purple-400 font-semibold text-sm sm:text-base">
                      Current
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm sm:text-base">
                      IT Foundation
                    </span>
                    <span className="text-blue-400 font-semibold text-sm sm:text-base">
                      Completed
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm sm:text-base">
                      Academic Foundation
                    </span>
                    <span className="text-green-400 font-semibold text-sm sm:text-base">
                      Excellence
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 1000px;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
