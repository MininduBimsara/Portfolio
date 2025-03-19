
const FixedPanel = ({ scrollPosition, heroSectionHeight }) => {
  return (
    // Fixed Panel
    <div
      className={`fixed -left-full md:static md:left-0 md:w-2/5 lg:w-1/3 md:h-screen md:sticky top-0 bg-gradient-to-b from-indigo-50 to-white p-6 md:p-12 md:flex md:flex-col md:justify-center ${
        scrollPosition <= heroSectionHeight
          ? "md:opacity-0"
          : "md:opacity-100 transition-opacity duration-500"
      }`}
    >
      <div className="max-w-md mx-auto">
        {/* Profile Image */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-indigo-200 transform -rotate-6"></div>
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <img
              src="/img/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Your Name
        </h2>
        <p className="text-indigo-600 text-center font-medium mb-6">
          Full Stack Developer
        </p>

        {/* Brief Description */}
        <p className="text-gray-600 text-center mb-8">
          I craft responsive and performant web applications with modern
          technologies and a focus on user experience and clean code.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all flex items-center gap-2">
            Contact Me
          </button>
          <button className="bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600 font-medium py-2 px-4 rounded-lg transition-all">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default FixedPanel;