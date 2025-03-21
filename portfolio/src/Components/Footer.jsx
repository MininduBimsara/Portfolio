import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Top Section with Logo, Navigation, and Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">JS</span>
              </div>
              <span className="text-xl font-bold text-orange-400">
                DevPortfolio
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
              Building digital experiences that make a difference through
              creative coding and thoughtful design.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4 text-orange-400">
              Navigation
            </h3>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  activeClass="text-orange-400"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="heroSection"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="text-orange-400"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="MyPortfolio"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 cursor-pointer"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  activeClass="text-orange-400"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="AboutMe"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 cursor-pointer"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  activeClass="text-orange-400"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Contact"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  activeClass="text-orange-400"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="testimonial"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 cursor-pointer"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4 text-orange-400">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-700 hover:bg-orange-500 p-3 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 33 33"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M22.6667 8.65479H18.6667C17.9303 8.65479 17.3333 9.25175 17.3333 9.98812V13.9881H22.6667C22.8183 13.9848 22.9621 14.0553 23.0523 14.1773C23.1424 14.2993 23.1677 14.4575 23.12 14.6015L22.1333 17.5348C22.0424 17.804 21.7908 17.986 21.5067 17.9881H17.3333V27.9881C17.3333 28.3563 17.0348 28.6548 16.6667 28.6548H13.3333C12.9651 28.6548 12.6667 28.3563 12.6667 27.9881V17.9881H10.6667C10.2985 17.9881 10 17.6896 10 17.3215V14.6548C10 14.2867 10.2985 13.9881 10.6667 13.9881H12.6667V9.98812C12.6667 7.0426 15.0545 4.65479 18 4.65479H22.6667C23.0348 4.65479 23.3333 4.95327 23.3333 5.32145V7.98812C23.3333 8.35631 23.0348 8.65479 22.6667 8.65479Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-700 hover:bg-orange-500 p-3 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 33 33"
                  fill="none"
                  className="text-white"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.0001 4.65479H11.3334C7.65152 4.65479 4.66675 7.63956 4.66675 11.3215V21.9881C4.66675 25.67 7.65152 28.6548 11.3334 28.6548H22.0001C25.6819 28.6548 28.6667 25.67 28.6667 21.9881V11.3215C28.6667 7.63956 25.6819 4.65479 22.0001 4.65479ZM26.3334 21.9881C26.3261 24.3783 24.3902 26.3141 22.0001 26.3215H11.3334C8.94321 26.3141 7.0074 24.3783 7.00008 21.9881V11.3215C7.0074 8.93125 8.94321 6.99544 11.3334 6.98812H22.0001C24.3902 6.99544 26.3261 8.93125 26.3334 11.3215V21.9881ZM23.0001 11.6548C23.7365 11.6548 24.3334 11.0578 24.3334 10.3215C24.3334 9.58508 23.7365 8.98812 23.0001 8.98812C22.2637 8.98812 21.6667 9.58508 21.6667 10.3215C21.6667 11.0578 22.2637 11.6548 23.0001 11.6548ZM16.6667 10.6548C13.353 10.6548 10.6667 13.3411 10.6667 16.6548C10.6667 19.9685 13.353 22.6548 16.6667 22.6548C19.9805 22.6548 22.6667 19.9685 22.6667 16.6548C22.6703 15.0624 22.0393 13.5342 20.9133 12.4082C19.7873 11.2822 18.2591 10.6512 16.6667 10.6548ZM13.0001 16.6548C13.0001 18.6799 14.6417 20.3215 16.6667 20.3215C18.6918 20.3215 20.3334 18.6799 20.3334 16.6548C20.3334 14.6297 18.6918 12.9881 16.6667 12.9881C14.6417 12.9881 13.0001 14.6297 13.0001 16.6548Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-700 hover:bg-orange-500 p-3 rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 33 33"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M28.6304 9.61132C28.0112 10.4373 27.2627 11.1579 26.4137 11.7451C26.4137 11.9609 26.4137 12.1767 26.4137 12.4045C26.4205 16.3229 24.8553 20.0803 22.0691 22.8341C19.2827 25.588 15.5083 27.108 11.5921 27.0533C9.32799 27.0609 7.0929 26.544 5.0619 25.5429C4.95238 25.4951 4.88175 25.3868 4.88216 25.2672V25.1353C4.88216 24.9632 5.02164 24.8237 5.1937 24.8237C7.41923 24.7503 9.56536 23.9787 11.3285 22.618C9.31404 22.5773 7.50159 21.384 6.66747 19.5491C6.62535 19.4489 6.63846 19.3339 6.7021 19.2457C6.76572 19.1576 6.87067 19.1091 6.979 19.1176C7.59123 19.1791 8.20958 19.1221 8.80027 18.9497C6.57652 18.4881 4.90562 16.642 4.66648 14.3824C4.65799 14.274 4.70656 14.1691 4.79467 14.1053C4.88276 14.0417 4.99766 14.0285 5.09784 14.0708C5.69459 14.3341 6.33879 14.4728 6.99099 14.4783C5.04246 13.1994 4.20082 10.7669 4.94207 8.55641C5.01859 8.34163 5.20242 8.18295 5.426 8.13871C5.64958 8.09445 5.87995 8.17116 6.03243 8.34064C8.66186 11.1391 12.2747 12.8067 16.1092 12.9918C16.0111 12.5999 15.9628 12.1971 15.9655 11.7931C16.0013 9.67441 17.3123 7.78707 19.2845 7.01461C21.2567 6.24217 23.4999 6.73749 24.964 8.26871C25.9619 8.07859 26.9267 7.74339 27.8276 7.27373C27.8936 7.23253 27.9773 7.23253 28.0433 7.27373C28.0845 7.33976 28.0845 7.42348 28.0433 7.48951C27.6069 8.48881 26.8697 9.32695 25.9345 9.88704C26.7535 9.79207 27.558 9.59888 28.3309 9.31164C28.396 9.26735 28.4815 9.26735 28.5465 9.31164C28.6011 9.33657 28.6419 9.38427 28.658 9.44201C28.6741 9.49976 28.664 9.56169 28.6304 9.61132Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-700 hover:bg-orange-500 p-3 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 33 33"
                  fill="none"
                  className="text-white"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H8.66675C8.29856 13.9881 8.00008 14.2867 8.00008 14.6548V23.9881C8.00008 24.3563 8.29856 24.6548 8.66675 24.6548H11.3334ZM10.0001 12.6548C8.89551 12.6548 8.00008 11.7594 8.00008 10.6548C8.00008 9.55021 8.89551 8.65479 10.0001 8.65479C11.1047 8.65479 12.0001 9.55021 12.0001 10.6548C12.0001 11.7594 11.1047 12.6548 10.0001 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V19.2322C24.7101 17.1423 23.1435 15.4095 21.0568 15.2971C19.4819 15.2322 18.0168 16.0037 17.3334 17.3881V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.0001C13.6319 13.9881 13.3334 14.2867 13.3334 14.6548V23.9881C13.3334 24.3563 13.6319 24.6548 14.0001 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V19.3215C17.3334 18.2169 18.2289 17.3215 19.3334 17.3215C20.4379 17.3215 21.3334 18.2169 21.3334 19.3215V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-700 hover:bg-orange-500 p-3 rounded-full transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 33 33"
                  fill="none"
                  className="text-white"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.3334 4.65479C10.1084 4.65479 5.00008 9.76312 5.00008 15.9881C5.00008 20.9715 8.33341 25.1548 13.0001 26.8048C13.5834 26.9048 13.7501 26.5715 13.7501 26.2881C13.7501 26.0381 13.7501 25.2881 13.7501 24.3215C10.3334 24.9881 9.66675 22.7881 9.66675 22.7881C9.16675 21.6215 8.45008 21.2881 8.45008 21.2881C7.47508 20.6215 8.53341 20.6215 8.53341 20.6215C9.58341 20.7048 10.1667 21.7881 10.1667 21.7881C11.1667 23.3215 12.7501 22.8048 13.7501 22.5548C13.8334 21.8881 14.1667 21.4048 14.5001 21.1215C11.8334 20.8381 9.08341 19.8881 9.08341 15.3215C9.08341 14.0715 9.50008 13.0715 10.1667 12.2381C10.0834 11.9881 9.66675 10.8215 10.2501 9.05479C10.2501 9.05479 11.2501 8.80479 13.7501 10.3048C14.5001 10.0548 15.4167 9.96312 16.3334 9.96312C17.2501 9.96312 18.1667 10.0715 18.9167 10.3048C21.4167 8.80479 22.4167 9.05479 22.4167 9.05479C23.0001 10.8215 22.5834 11.9881 22.5001 12.2381C23.1667 13.0715 23.5834 14.0715 23.5834 15.3215C23.5834 19.8881 20.8334 20.8215 18.1667 21.1048C18.5834 21.4715 18.9167 22.2215 18.9167 23.3048C18.9167 24.8881 18.9167 25.9048 18.9167 26.2881C18.9167 26.5715 19.0834 26.9048 19.6667 26.8048C24.3334 25.1548 27.6667 20.9715 27.6667 15.9881C27.6667 9.76312 22.5584 4.65479 16.3334 4.65479Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section with Newsletter Signup */}
        <div className="border-t border-gray-700 pt-8 pb-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-semibold text-xl mb-3 text-orange-400">
              Subscribe to my newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Stay updated with my latest projects and tech insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orange-400"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section with Copyright and Legal Links */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Jane Smith. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
