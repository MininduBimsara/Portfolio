import React, { useState } from "react";
import {
  ArrowUpRight,
  Calendar,
  Award,
  ExternalLink,
  Shield,
  Code,
  Database,
  Globe,
  CheckCircle,
  Star,
} from "lucide-react";

export default function Certifications() {
  const [hoveredCert, setHoveredCert] = useState(null);

  // Your actual certifications
  const certifications = [
    {
      id: 1,
      title: "Java for Beginners",
      provider: "Udemy",
      issueDate: "Jun 2024",
      expiryDate: "Never",
      credentialId: "UC-36788f9ab-66c7-4be0-a58c-c251441d1239",
      verifyUrl:
        "https://www.udemy.com/certificate/UC-36788f9ab-66c7-4be0-a58c-c251441d1239/",
      logo: "",
      category: "Programming",
      status: "Active",
    },
    {
      id: 2,
      title: "CSS for Beginners",
      provider: "Udemy",
      issueDate: "May 2024",
      expiryDate: "Never",
      credentialId: "UC-47d6e1ac-e1cd-4193-9a31-f590ceb4b0fa",
      verifyUrl:
        "https://www.udemy.com/certificate/UC-47d6e1ac-e1cd-4193-9a31-f590ceb4b0fa/",
      logo: "",
      category: "Web Development",
      status: "Active",
    },
    {
      id: 3,
      title: "JavaScript for Beginners",
      provider: "Alison",
      issueDate: "May 2024",
      expiryDate: "Never",
      credentialId: "4139-26683415",
      verifyUrl: "https://alison.com/certification/check/331a01eb09",
      logo: "",
      category: "Programming",
      status: "Active",
    },
    {
      id: 4,
      title: "Python Programming",
      provider: "Udemy",
      issueDate: "May 2024",
      expiryDate: "Never",
      credentialId: "UC-dd9d026e-d6d0-4048-beca-e52617c07af2",
      verifyUrl:
        "https://www.udemy.com/certificate/UC-dd9d026e-d6d0-4048-beca-e52617c07af2/",
      logo: "",
      category: "Programming",
      status: "Active",
    },
    {
      id: 5,
      title: "AWS Educate Introduction to Cloud 101",
      provider: "Amazon Web Services (AWS)",
      issueDate: "May 2025",
      expiryDate: "Never",
      credentialId: "AWS-EDUCATE-2025",
      verifyUrl:
        "https://www.credly.com/badges/61212020-d6d2-4ea0-98f4-80ff390e1d45/public_url",
      logo: "",
      category: "Cloud",
      status: "Active",
    },
    {
      id: 6,
      title: "Angular",
      provider: "Sololearn",
      issueDate: "May 2025",
      expiryDate: "Never",
      credentialId: "SOLOLEARN-ANGULAR-2025",
      verifyUrl: "https://www.sololearn.com/certificates/CC-KT3LWRMW",
      logo: "",
      category: "Web Development",
      status: "Active",
    },
    {
      id: 7,
      title: "Introduction to GitHub",
      provider: "Microsoft",
      issueDate: "May 2025",
      expiryDate: "Never",
      credentialId: "GITHUB-INTRO-2025",
      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/ABEYWARDENAMB-3331/BC6AJEUD?sharingId=699F40254D109152",
      logo: "",
      category: "Development Tools",
      status: "Active",
    },
    {
      id: 8,
      title: "Getting Started with Cybersecurity",
      provider: "IBM",
      issueDate: "Apr 2025",
      expiryDate: "Never",
      credentialId: "IBM-CYBER-2025",
      verifyUrl:
        "https://www.credly.com/badges/19971531-e85a-4eca-8a06-6ff35a31226e/public_url",
      logo: "",
      category: "Security",
      status: "Active",
    },
    {
      id: 9,
      title: "Microsoft Azure Fundamentals: Describe cloud concepts",
      provider: "Microsoft",
      issueDate: "Apr 2025",
      expiryDate: "Never",
      credentialId: "AZURE-FUNDAMENTALS-2025",
      verifyUrl:
        "https://learn.microsoft.com/en-us/users/abeywardenamb-3331/achievements/pldz6534?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      logo: "",
      category: "Cloud",
      status: "Active",
    },
  ];

  const stats = [
    {
      icon: Award,
      number: "9",
      label: "Active Certifications",
    },
    {
      icon: Shield,
      number: "3",
      label: "Cloud Platforms",
    },
    {
      icon: Code,
      number: "5",
      label: "Programming Certs",
    },
    {
      icon: Star,
      number: "100%",
      label: "Pass Rate",
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Cloud":
        return Globe;
      case "Programming":
        return Code;
      case "Web Development":
        return Code;
      case "Development Tools":
        return Database;
      case "Security":
        return Shield;
      default:
        return Award;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Cloud":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Programming":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Web Development":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Development Tools":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Security":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
    }
  };

  const formatDate = (dateString) => {
    if (dateString === "Never") return "Never";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <section
      id="Certifications"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black bg-opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+')] bg-repeat"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-16 right-10 w-20 h-20 border border-orange-500/20 rounded-lg rotate-12 animate-pulse"></div>
      <div
        className="absolute bottom-20 left-16 w-16 h-16 bg-orange-500/10 rounded-full animate-bounce"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-1/3 left-1/4 w-12 h-12 border-2 border-orange-400/30 rotate-45"
        style={{ animation: "spin 10s linear infinite" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="bg-gray-800 text-orange-400 px-4 py-2 rounded-full text-sm font-mono tracking-wider border border-gray-700 inline-block mb-4">
            PROFESSIONAL CERTIFICATIONS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight mb-6">
            Validated{" "}
            <span className="font-bold bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              Expertise
            </span>
            <br />& Credentials
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Industry-recognized certifications that validate my technical skills
            and commitment to staying current with the latest technologies and
            best practices.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm hover:border-orange-500/50 transition-colors duration-300">
                  <div className="flex justify-center mb-3">
                    <div className="bg-orange-500/20 p-3 rounded-full border border-orange-500/30 group-hover:bg-orange-500/30 transition-colors duration-300">
                      <IconComponent className="h-5 w-5 text-orange-400" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-400 font-light">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-light text-white mb-8 text-center">
            <span className="font-mono text-orange-400">{">"}</span> Current
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {certifications.map((cert, index) => {
              const CategoryIcon = getCategoryIcon(cert.category);
              return (
                <article
                  key={cert.id}
                  className="group bg-gray-800/30 border border-gray-700 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
                  onMouseEnter={() => setHoveredCert(cert.id)}
                  onMouseLeave={() => setHoveredCert(null)}
                >
                  {/* Certification Header */}
                  <div className="relative p-6 pb-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                          {cert.logo ? (
                            <img
                              src={cert.logo}
                              alt={`${cert.provider} logo`}
                              className="w-8 h-8 object-contain"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "block";
                              }}
                            />
                          ) : null}
                          <Award className="h-6 w-6 text-orange-400 hidden" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                              cert.category
                            )}`}
                          >
                            {cert.category}
                          </span>
                          {cert.status === "Active" && (
                            <CheckCircle className="h-4 w-4 text-green-400" />
                          )}
                        </div>
                      </div>

                      {/* Hover overlay with external link icon */}
                      <div
                        className={`transition-opacity duration-300 ${
                          hoveredCert === cert.id ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="bg-orange-500/20 backdrop-blur-sm rounded-full p-2">
                          <ExternalLink className="h-4 w-4 text-orange-400" />
                        </div>
                      </div>
                    </div>

                    {/* Title and Provider */}
                    <h4 className="text-lg sm:text-xl font-medium text-white mb-2 group-hover:text-orange-300 transition-colors duration-300 leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 text-sm font-medium mb-3">
                      {cert.provider}
                    </p>
                  </div>

                  {/* Certification Details */}
                  <div className="p-6 pt-4">
                    {/* Dates and Status */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                          <Calendar className="h-3 w-3" />
                          <span>Issued</span>
                        </div>
                        <span className="text-sm text-white font-medium">
                          {formatDate(cert.issueDate)}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                          <Calendar className="h-3 w-3" />
                          <span>Expires</span>
                        </div>
                        <span className="text-sm text-white font-medium">
                          {formatDate(cert.expiryDate)}
                        </span>
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="mb-4">
                      <div className="text-xs text-gray-400 mb-1">
                        Credential ID
                      </div>
                      <span className="text-sm text-gray-300 font-mono bg-gray-700/50 px-2 py-1 rounded">
                        {cert.credentialId}
                      </span>
                    </div>

                    {/* Verify Link */}
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-300 text-sm font-medium w-full justify-center bg-gray-700/30 hover:bg-gray-700/50 py-2 rounded-lg border border-gray-600 hover:border-orange-500/50"
                    >
                      <span>Verify Certification</span>
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com/in/yourprofile/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-3 group shadow-lg hover:shadow-orange-500/25"
            >
              <span>View All Certifications</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>

            <a
              href="mailto:minindubim@gmail.com?subject=Certification Verification"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-orange-500/50 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-3 group"
            >
              <span>Request Verification</span>
              <ArrowUpRight className="h-4 w-4 text-orange-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
