import { Link } from "react-scroll";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Here you would normally send this to an API
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-gray-400 pt-16">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9ImdyYXkiLz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      {/* Simple top border instead of wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-orange-500 to-gray-800"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Brand & Vision Column */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-6 flex items-center">
              <div className="h-12 w-12 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg border-l border-t border-gray-700">
                <span className="text-orange-500 font-bold text-xl">MB</span>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold">
                  <span className="text-orange-500">Minindu's</span>
                  <span className="text-gray-300">Portfolio</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Crafting Digital Experiences
                </div>
              </div>
            </div>

            <p className="text-gray-500 mb-6 max-w-sm">
              I transform ideas into exceptional digital experiences through
              creative coding, innovative design, and a passion for building
              meaningful solutions.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">
              Site Map
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="heroSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-500 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="AboutMe"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-500 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="skills-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-500 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="MyPortfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-500 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="MediumBlogs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-500 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-500 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-500 hover:text-orange-500 transition-colors cursor-pointer">
                Web Development
              </li>
              <li className="text-gray-500 hover:text-orange-500 transition-colors cursor-pointer">
                UI/UX Design
              </li>
              <li className="text-gray-500 hover:text-orange-500 transition-colors cursor-pointer">
                Mobile Apps
              </li>
              <li className="text-gray-500 hover:text-orange-500 transition-colors cursor-pointer">
                E-Commerce
              </li>
              <li className="text-gray-500 hover:text-orange-500 transition-colors cursor-pointer">
                SEO Optimization
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">
              Get In Touch
            </h3>

            <div className="mb-4 flex items-center">
              <div className="h-10 w-10 rounded-md bg-gray-800 flex items-center justify-center mr-3 border-l border-t border-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 text-xs">Email</p>
                <a
                  href="mailto:jane@devportfolio.com"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  minindubim@gmail.com
                </a>
              </div>
            </div>

            <div className="mb-4 flex items-center">
              <div className="h-10 w-10 rounded-md bg-gray-800 flex items-center justify-center mr-3 border-l border-t border-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 text-xs">Phone</p>
                <a
                  href="tel:+123456789"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  +94 71 588 1536
                </a>
              </div>
            </div>

            <div className="mb-6 flex items-center">
              <div className="h-10 w-10 rounded-md bg-gray-800 flex items-center justify-center mr-3 border-l border-t border-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 text-xs">Location</p>
                <span className="text-gray-400">Kegalle , Sri Lanka</span>
              </div>
            </div>

            {/* Social Media Icons - Simplified and consistent */}
            <div className="flex space-x-3 mt-auto">
              <a
                href="https://github.com/MininduBimsara"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-md transition-all duration-300 border-l border-t border-gray-700"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/minindu-abeywardena"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-md transition-all duration-300 border-l border-t border-gray-700"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                  />
                </svg>
              </a>
              {/* <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-md transition-all duration-300 border-l border-t border-gray-700"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <path
                    fill="currentColor"
                    d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                  />
                </svg>
              </a>
              <a
                href="https://www.dribbble.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-md transition-all duration-300 border-l border-t border-gray-700"
                aria-label="Dribbble"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.23 6.53c1.12 1.36 1.8 3.08 1.86 4.94-1.19-.24-2.28-.35-3.29-.35-.56 0-1.11.04-1.65.11-.54-1.4-1.17-2.72-1.88-3.96 1.96-.5 3.5-1.04 4.96-.74zM15.98 7.54c-1.3-.28-2.71.18-4.51.63.74 1.17 1.33 2.43 1.79 3.76-1.23.65-2.15 1.54-2.74 2.61-1-.6-2.03-1.06-3.12-1.35.22-2.47 1.36-4.97 3.14-6.72 1.65.66 3.21 1.75 5.44 1.07zM6.34 14.6c1.21.3 2.36.8 3.43 1.5-.21.81-.29 1.65-.22 2.49-1.12.2-2.25.31-3.43.31-1.54 0-3.04-.23-4.45-.68.54-2.63 2.27-4.67 4.67-5.62zM4.45 17.55c1.24.39 2.57.6 3.93.6 1.06 0 2.1-.11 3.09-.34-.07-1.04.14-2.07.65-3.01.43-.8 1.08-1.4 1.85-1.85-.4 1.3-.48 2.56-.21 3.91-.8.93-1.11 2.11-.89 3.28-2.49-.47-4.67-1.9-6.25-3.92-.41-.66-.74-1.37-.97-2.11.51 1.09 1.14 2.1 1.9 3.01-1.1-.25-2.15-.73-3.1-1.57z"
                  />
                </svg>
              </a> */}
            </div>
          </div>
        </div>

        {/* Copyright Bar & Bottom Links */}
        <div className="border-t border-gray-800 pt-8 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © {currentYear} Minindu's Portfolio. All rights reserved.
            </div>

            {/* <div className="flex flex-wrap justify-center space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-orange-500 text-sm transition-colors mb-2 md:mb-0"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-500 text-sm transition-colors mb-2 md:mb-0"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-500 text-sm transition-colors mb-2 md:mb-0"
              >
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Subtle backdrop decoration */}
      <div className="absolute bottom-10 right-20 opacity-5 z-0">
        <svg
          width="200"
          height="200"
          viewBox="0 0 100 100"
          className="text-gray-700"
        >
          <path
            fill="currentColor"
            d="M50 5L60 40H95L67 62L77 97L50 75L23 97L33 62L5 40H40L50 5Z"
          />
        </svg>
      </div>
    </footer>
  );
}

export default Footer;
