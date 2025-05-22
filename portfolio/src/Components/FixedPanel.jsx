import React from "react";

const FixedPanel = ({ scrollPosition, heroSectionHeight }) => {
  const isVisible = scrollPosition > heroSectionHeight;

  // Split complex className into readable parts
  const baseClasses =
    "hidden md:block md:w-2/5 lg:w-1/3 md:h-screen md:sticky top-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-6 md:p-12 md:flex md:flex-col md:justify-center shadow-lg relative transition-opacity duration-500";
  const visibilityClasses = isVisible
    ? "md:opacity-100"
    : "md:opacity-0 md:pointer-events-none";
  const combinedClasses = `${baseClasses} ${visibilityClasses}`;

  return (
    <div className={combinedClasses}>
      {/* Background dot texture pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-black bg-opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Profile Image with enhanced styling */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-orange-400 transform -rotate-6 shadow-md"></div>
          <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img
              src="/img/hero.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = "/api/placeholder/160/160";
              }}
            />
          </div>
        </div>

        {/* Name and Title with refined typography */}
        <h2 className="text-3xl font-bold text-center text-white mb-2 font-sans">
          Your Name
        </h2>
        <p className="text-orange-500 text-center font-medium mb-6 tracking-wide">
          Full Stack Developer
        </p>

        {/* Brief Description with better readability */}
        <p className="text-gray-300 text-center mb-8 leading-relaxed">
          I craft responsive and performant web applications with modern
          technologies and a focus on user experience and clean code.
        </p>

        {/* Call to Action Buttons with enhanced styling */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg">
            Contact Me
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-orange-400 border border-orange-400 border-opacity-30 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
            Download CV
          </button>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://www.facebook.com/share/1AN798rrEy/"
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <title>Facebook</title>
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.342v21.316C0 23.4.6 24 1.325 24h11.495v-9.294H9.69V11.01h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.658V1.342C24 .6 23.4 0 22.675 0z" />
            </svg>
          </a>

          <a
            href="https://github.com/MininduBimsara"
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <title>GitHub</title>
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/bimxara_01?igsh=MW1lMzRtZXZtbjh3cQ=="
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <title>Instagram</title>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.003.24 2.466.403a4.924 4.924 0 011.675 1.092 4.924 4.924 0 011.092 1.675c.163.463.347 1.26.403 2.466.058 1.266.07 1.645.07 4.849s-.012 3.584-.07 4.85c-.056 1.206-.24 2.003-.403 2.466a4.924 4.924 0 01-1.092 1.675 4.924 4.924 0 01-1.675 1.092c-.463.163-1.26.347-2.466.403-1.266.058-1.645.07-4.85.07s-3.584-.012-4.849-.07c-1.206-.056-2.003-.24-2.466-.403a4.924 4.924 0 01-1.675-1.092 4.924 4.924 0 01-1.092-1.675c-.163-.463-.347-1.26-.403-2.466C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.056-1.206.24-2.003.403-2.466a4.924 4.924 0 011.092-1.675 4.924 4.924 0 011.675-1.092c.463-.163 1.26-.347 2.466-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.737 0 8.332.012 7.052.07 5.775.127 4.85.308 4.042.617a7.075 7.075 0 00-2.57 1.67A7.075 7.075 0 00.617 4.042C.308 4.85.127 5.775.07 7.052.012 8.332 0 8.737 0 12c0 3.263.012 3.668.07 4.948.057 1.277.238 2.202.547 3.01a7.075 7.075 0 001.67 2.57 7.075 7.075 0 002.57 1.67c.808.309 1.733.49 3.01.547 1.28.058 1.685.07 4.948.07s3.668-.012 4.948-.07c1.277-.057 2.202-.238 3.01-.547a7.075 7.075 0 002.57-1.67 7.075 7.075 0 001.67-2.57c.309-.808.49-1.733.547-3.01.058-1.28.07-1.685.07-4.948s-.012-3.668-.07-4.948c-.057-1.277-.238-2.202-.547-3.01a7.075 7.075 0 00-1.67-2.57A7.075 7.075 0 0019.958.617c-.808-.309-1.733-.49-3.01-.547C15.668.012 15.263 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/minindu-abeywardena"
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <title>LinkedIn</title>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FixedPanel;
