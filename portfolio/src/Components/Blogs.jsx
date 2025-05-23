import React, { useState } from "react";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  BookOpen,
  ExternalLink,
  Zap,
  PenTool,
  TrendingUp,
} from "lucide-react";

export default function MediumBlogs() {
  const [hoveredBlog, setHoveredBlog] = useState(null);

  // Sample blog data - replace with your actual Medium articles
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Spring Boot",
      publishDate: "Apr 1, 2025",
      readTime: "4 min read",
      tags: ["Java", "Spring boot", "Backend"],
      url: "https://medium.com/@minindubim/getting-started-with-spring-boot-960be3665fc2",
      image: "/img/springboot.png",
    },
    {
      id: 2,
      title: "Understanding the MVC Architecture in Web Development",
      publishDate: "Dec 3, 2024",
      readTime: "4 min read",
      tags: ["Full-Stack", "Technology", "Trends"],
      url: "https://medium.com/@minindubim/understanding-the-mvc-architecture-in-web-development-c704771184d5",
      image: "/img/MVC.png",
    },
    {
      id: 3,
      title: "Exploring the World of Software Licensing; An In Depth Overview",
      publishDate: "Jun 21, 2024",
      readTime: "4 min read",
      tags: ["Software", "Security", "Licensing "],
      url: "https://medium.com/@minindubim/exploring-the-world-of-software-licensing-an-in-depth-overview-e9f412fa664e",
      image: "/img/Licence.png",
    },
    {
      id: 4,
      title:
        "MySQL Stored Procedures: A Guide to Increasing Database Performance",
      publishDate: "Feb 23, 2024",
      readTime: "4 min read",
      tags: ["MySQL", "Database Management ", "Data Handling"],
      url: "https://medium.com/@minindubim/mysql-stored-procedures-a-guide-to-increasing-database-performance-077d0f731c2b",
      image: "/img/db.png",
    },
    {
      id: 5,
      title: "Understanding the CIA Triad in Cyber Security.",
      publishDate: "Sep 29, 2023",
      readTime: "3 min read",
      tags: ["CIA Triad", "Cybersecurity", "Trending"],
      url: "https://medium.com/@minindubim/understanding-the-cia-triad-in-cyber-security-5e275ac51eef",
      image: "/img/CIA.png",
    },
    {
      id: 6,
      title:
        "Navigating the Database Realm: Unraveling the Roles and Responsibilities",
      publishDate: "Dec 27, 2023",
      readTime: "3 min read",
      tags: ["Data Management", "Career Opportunities", "DBMS"],
      url: "https://medium.com/@minindubim/navigating-the-database-realm-unraveling-the-roles-and-responsibilities-58fa053db5e3",
      image: "/img/roles.png",
    },
  ];

  const stats = [
    {
      icon: PenTool,
      number: "6",
      label: "Articles Published",
    },
    {
      icon: BookOpen,
      number: "120+",
      label: "Total Reads",
    },
    {
      icon: TrendingUp,
      number: "25+",
      label: "Followers",
    },
    {
      icon: Zap,
      number: "8.5",
      label: "Avg Read Time",
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section
      id="MediumBlogs"
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
            MEDIUM ARTICLES
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight mb-6">
            Sharing{" "}
            <span className="font-bold bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              Knowledge
            </span>
            <br />
            Through Writing
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I regularly share insights, tutorials, and experiences about web
            development, technology trends, and best practices through detailed
            articles on Medium.
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

        {/* Blog Grid */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-light text-white mb-8 text-center">
            <span className="font-mono text-orange-400">{">"}</span> Latest
            Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogs.map((blog, index) => (
              <article
                key={blog.id}
                className="group bg-gray-800/30 border border-gray-700 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
                onMouseEnter={() => setHoveredBlog(blog.id)}
                onMouseLeave={() => setHoveredBlog(null)}
              >
                {/* Blog Image */}
                <div className="relative overflow-hidden h-48 bg-gray-700">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/400/250";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Hover overlay with external link icon */}
                  <div
                    className={`absolute inset-0 bg-orange-500/20 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredBlog === blog.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <ExternalLink className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(blog.publishDate)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-medium text-white mb-3 group-hover:text-orange-300 transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs border border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-300 text-sm font-medium"
                  >
                    <span>Read on Medium</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="https://medium.com/@minindubim"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-3 group shadow-lg hover:shadow-orange-500/25"
            >
              <span>Follow on Medium</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>

            <a
              href="mailto:minindubim@gmail.com?subject=Article Collaboration"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-orange-500/50 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-3 group"
            >
              <span>Collaborate</span>
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
