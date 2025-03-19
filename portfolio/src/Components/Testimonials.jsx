import React, { useState, useEffect } from "react";

export default function Testimonials() {
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  // Sample data
  const testimonialData = [
    {
      id: 1,
      content:
        "Working with this developer was an absolute pleasure. They delivered the project on time with excellent quality and attention to detail.",
      author: "Sarah Johnson",
      position: "CEO at TechStart",
      avatar: "/images/avatar1.jpg",
    },
    {
      id: 2,
      content:
        "I was impressed by their technical skills and problem-solving ability. They went above and beyond to make sure our project was successful.",
      author: "Michael Chen",
      position: "CTO at InnovateCorp",
      avatar: "/images/avatar2.jpg",
    },
    {
      id: 3,
      content:
        "One of the most reliable developers I've worked with. They understand requirements quickly and deliver high-quality code consistently.",
      author: "Emily Rodriguez",
      position: "Product Manager at DevSolutions",
      avatar: "/images/avatar3.jpg",
    },
  ];

  // Simulate the testimonials streaming in one by one
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleTestimonials((prev) => {
        if (prev.length < testimonialData.length) {
          return [...prev, testimonialData[prev.length]];
        }
        return prev;
      });
    }, 2000);

    // Reset and start again when all testimonials are visible
    // const resetTimer = setTimeout(() => {
    //   if (visibleTestimonials.length === testimonialData.length) {
    //     setVisibleTestimonials([]);
    //   }
    // }, (testimonialData.length + 1) * 2000);

    // return () => {
    //   clearInterval(timer);
    //   clearTimeout(resetTimer);
    // };
  }, [visibleTestimonials.length]);

  // Waveform animation component
  const Waveform = () => (
    <div className="flex items-center h-4 space-x-1">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-1 bg-indigo-400 rounded-full opacity-80"
          style={{
            height: `${Math.random() * 12 + 4}px`,
            animation: `waveform ${
              0.5 + Math.random() * 0.5
            }s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.1}s`,
          }}
        ></div>
      ))}
    </div>
  );

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-indigo-50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-indigo-600 font-semibold text-lg mb-2">
            Client Reviews
          </h3>
          <h2 className="text-4xl font-bold text-gray-800">What People Say</h2>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes waveform {
            from {
              height: 4px;
            }
            to {
              height: 16px;
            }
          }
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(99, 102, 241, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
            }
          }
        `}</style>

        <div className="flex flex-col space-y-8 max-w-3xl mx-auto">
          {testimonialData.map((testimonial) => {
            const isVisible = visibleTestimonials.some(
              (t) => t.id === testimonial.id
            );
            return (
              <div
                key={testimonial.id}
                className={`flex items-start transition-all duration-500 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  animation: isVisible ? `fadeIn 0.6s ease-out forwards` : "",
                  height: isVisible ? "auto" : "0",
                  margin: isVisible ? "" : "0",
                  overflow: "hidden",
                }}
              >
                {/* Avatar with floating effect */}
                <div className="flex-shrink-0 mr-4 relative">
                  <div
                    className="w-16 h-16 rounded-full overflow-hidden border-2 border-white"
                    style={{
                      animation: `float 6s ease-in-out infinite`,
                      boxShadow:
                        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                      background:
                        "linear-gradient(45deg, rgba(255,255,255,0.8), rgba(255,255,255,0.2))",
                    }}
                  >
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Subtle reflection */}
                  <div
                    className="w-12 h-6 bg-white opacity-20 rounded-full mx-auto -mt-3 blur-sm"
                    style={{ transform: "rotateX(60deg)" }}
                  ></div>
                </div>

                {/* Message capsule */}
                <div
                  className="flex-grow bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-3xl px-6 py-4 shadow-lg relative"
                  style={{
                    borderTopLeftRadius: "4px",
                    animation: `pulse 2s infinite`,
                  }}
                >
                  {/* Waveform animation */}
                  <div className="absolute top-4 right-4">
                    <Waveform />
                  </div>

                  <div className="mb-3 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-700 italic mb-3 leading-relaxed">
                    {testimonial.content}
                  </p>

                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Loading indicator when no testimonials are visible
          {visibleTestimonials.length === 0 && (
            <div className="text-center py-8 text-indigo-500">
              <svg
                className="animate-spin h-8 w-8 mx-auto mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <p>Loading client testimonials...</p>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}
