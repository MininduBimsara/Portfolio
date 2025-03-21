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
    acceptTerms: false,
  });

  const [suggestions, setSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-orange-400 opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-400 text-white px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Let's Connect</span>
          </div>
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact info card */}
          <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-700/50 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-orange-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Email</p>
                  <p className="text-white">contact@yourname.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-700/50 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Phone</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-700/50 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">
                    Availability
                  </p>
                  <p className="text-white">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-medium text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                {["github", "twitter", "linkedin", "instagram"].map(
                  (platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="bg-gray-700/50 hover:bg-gray-600 p-3 rounded-full transition-colors"
                    >
                      <span className="sr-only">{platform}</span>
                      <div className="w-5 h-5 text-orange-400"></div>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label
                    htmlFor="firstName"
                    className={`block text-sm font-medium mb-1 transition-colors ${
                      activeField === "firstName"
                        ? "text-orange-400"
                        : "text-gray-300"
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
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="lastName"
                    className={`block text-sm font-medium mb-1 transition-colors ${
                      activeField === "lastName"
                        ? "text-orange-400"
                        : "text-gray-300"
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
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-1 transition-colors ${
                      activeField === "email"
                        ? "text-orange-400"
                        : "text-gray-300"
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
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="phoneNumber"
                    className={`block text-sm font-medium mb-1 transition-colors ${
                      activeField === "phoneNumber"
                        ? "text-orange-400"
                        : "text-gray-300"
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
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="topic"
                  className={`block text-sm font-medium mb-1 transition-colors ${
                    activeField === "topic"
                      ? "text-orange-400"
                      : "text-gray-300"
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
                  className="w-full px-4 py-3 rounded-xl border bg-gray-800 border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-gray-700 placeholder-gray-400 appearance-none"
                  required
                >
                  <option value="" className="bg-gray-800">
                    Select a topic
                  </option>
                  <option value="projectInquiry" className="bg-gray-800">
                    Project Inquiry
                  </option>
                  <option value="jobOpportunity" className="bg-gray-800">
                    Job Opportunity
                  </option>
                  <option value="collaboration" className="bg-gray-800">
                    Collaboration
                  </option>
                  <option value="other" className="bg-gray-800">
                    Other
                  </option>
                </select>
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-1 transition-colors ${
                    activeField === "message"
                      ? "text-orange-400"
                      : "text-gray-300"
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
                <div className="bg-gray-700/50 rounded-xl p-4">
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
                        className="w-full text-left px-4 py-2 bg-gray-800/70 text-gray-300 rounded-lg hover:bg-gray-700 border border-gray-600/50 hover:border-orange-500/50 transition-all"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="w-5 h-5 text-orange-600 rounded border-gray-600 focus:ring-orange-500 bg-gray-700"
                  required
                />
                <label
                  htmlFor="acceptTerms"
                  className="ml-2 text-sm text-gray-300"
                >
                  I agree to the{" "}
                  <a href="#" className="text-orange-400 hover:underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-orange-400 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg shadow-orange-600/20"
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
