import { useState } from "react";
import { Send, Phone, Mail, User, Clock, Sparkles } from "lucide-react";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
  });

  const [suggestions, setSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // AI-assisted suggestions based on input
    if (name === "message" && value.length > 10) {
      setSuggestions([
        "Can you provide more details about your project?",
        "What is your expected timeline?",
        "Do you have a specific budget in mind?",
      ]);
    } else if (name === "message" && value.length <= 10) {
      setSuggestions([]);
    }
  };

  const handleFieldFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleFieldBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData((prev) => ({
      ...prev,
      message: prev.message ? `${prev.message} ${suggestion}` : suggestion,
    }));
  };

  return (
    <section
      id="Contact"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Background dot texture pattern - same as hero section */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black bg-opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+')] bg-repeat"></div>
      </div>


      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-400 text-white px-4 py-1.5 rounded-full mb-4 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Let's Connect</span>
          </div>
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact info card */}
          <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-orange-500/30">
            <h3 className="text-2xl font-semibold text-white mb-8 border-b border-gray-700/50 pb-4">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-gray-700/50 p-3 rounded-lg group-hover:bg-orange-500/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-orange-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Email</p>
                  <p className="text-white group-hover:text-orange-400 transition-colors">
                    contact@yourname.com
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-gray-700/50 p-3 rounded-lg group-hover:bg-orange-500/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Phone</p>
                  <p className="text-white group-hover:text-orange-400 transition-colors">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-gray-700/50 p-3 rounded-lg group-hover:bg-orange-500/20 transition-all duration-300">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">
                    Availability
                  </p>
                  <p className="text-white group-hover:text-orange-400 transition-colors">
                    Mon-Fri: 9AM-6PM EST
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-medium text-white mb-6">
                Connect with Me
              </h4>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a
                  href="#"
                  className="bg-gray-700/50 hover:bg-orange-500/20 p-3 rounded-lg transition-all duration-300 hover:scale-110 transform"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 text-orange-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="bg-gray-700/50 hover:bg-orange-500/20 p-3 rounded-lg transition-all duration-300 hover:scale-110 transform"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5 text-orange-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="bg-gray-700/50 hover:bg-orange-500/20 p-3 rounded-lg transition-all duration-300 hover:scale-110 transform"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5 text-orange-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="#"
                  className="bg-gray-700/50 hover:bg-orange-500/20 p-3 rounded-lg transition-all duration-300 hover:scale-110 transform"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5 text-orange-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-orange-500/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <label
                    htmlFor="firstName"
                    className={`block text-sm font-medium mb-1 transition-colors ${
                      activeField === "firstName"
                        ? "text-orange-400"
                        : "text-gray-300 group-hover:text-orange-300"
                    }`}
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={() => handleFieldFocus("firstName")}
                      onBlur={handleFieldBlur}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border bg-gray-800/50 border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 transition-all"
                      placeholder="Your first name"
                      required
                    />
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-orange-400" />
                  </div>
                </div>

                <div className="relative group">
                  <label
                    htmlFor="lastName"
                    className={`block text-sm font-medium mb-1 transition-colors ${
                      activeField === "lastName"
                        ? "text-orange-400"
                        : "text-gray-300 group-hover:text-orange-300"
                    }`}
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onFocus={() => handleFieldFocus("lastName")}
                      onBlur={handleFieldBlur}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border bg-gray-800/50 border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 transition-all"
                      placeholder="Your last name"
                      required
                    />
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-orange-400" />
                  </div>
                </div>

                <div className="relative group">
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-1 transition-colors ${
                      activeField === "email"
                        ? "text-orange-400"
                        : "text-gray-300 group-hover:text-orange-300"
                    }`}
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFieldFocus("email")}
                      onBlur={handleFieldBlur}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border bg-gray-800/50 border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 transition-all"
                      placeholder="your.email@example.com"
                      required
                    />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-orange-400" />
                  </div>
                </div>

                <div className="relative group">
                  <label
                    htmlFor="phoneNumber"
                    className={`block text-sm font-medium mb-1 transition-colors ${
                      activeField === "phoneNumber"
                        ? "text-orange-400"
                        : "text-gray-300 group-hover:text-orange-300"
                    }`}
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      onFocus={() => handleFieldFocus("phoneNumber")}
                      onBlur={handleFieldBlur}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border bg-gray-800/50 border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 transition-all"
                      placeholder="Your phone number"
                      required
                    />
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-orange-400" />
                  </div>
                </div>
              </div>

              <div className="relative group">
                <label
                  htmlFor="topic"
                  className={`block text-sm font-medium mb-1 transition-colors ${
                    activeField === "topic"
                      ? "text-orange-400"
                      : "text-gray-300 group-hover:text-orange-300"
                  }`}
                >
                  Choose a Topic
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  onFocus={() => handleFieldFocus("topic")}
                  onBlur={handleFieldBlur}
                  className="w-full px-4 py-3 rounded-xl border bg-gray-800 border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 appearance-none"
                  required
                >
                  <option value="" className="bg-gray-800 text-gray-400">
                    Select a topic
                  </option>
                  <option
                    value="projectInquiry"
                    className="bg-gray-800 text-white"
                  >
                    Project Inquiry
                  </option>
                  <option
                    value="jobOpportunity"
                    className="bg-gray-800 text-white"
                  >
                    Job Opportunity
                  </option>
                  <option
                    value="collaboration"
                    className="bg-gray-800 text-white"
                  >
                    Collaboration
                  </option>
                  <option value="other" className="bg-gray-800 text-white">
                    Other
                  </option>
                </select>
              </div>

              <div className="relative group">
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-1 transition-colors ${
                    activeField === "message"
                      ? "text-orange-400"
                      : "text-gray-300 group-hover:text-orange-300"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFieldFocus("message")}
                  onBlur={handleFieldBlur}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border bg-gray-800/50 border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 resize-y"
                  placeholder="Tell me about your project, goals, or questions..."
                  required
                ></textarea>
              </div>

              {suggestions.length > 0 && (
                <div className="bg-gray-700/50 rounded-xl p-4 border border-orange-500/20 shadow-lg">
                  <p className="text-sm text-orange-400 mb-3 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI Suggestions:
                  </p>
                  <div className="space-y-2">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-4 py-2 bg-gray-800/70 text-gray-300 rounded-lg hover:bg-gray-700 border border-gray-600/50 hover:border-orange-500/50 transition-all hover:text-orange-200"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg shadow-orange-600/20 hover:shadow-xl hover:shadow-orange-600/30 transform hover:translate-y-px"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
