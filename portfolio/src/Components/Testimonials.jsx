import React from "react";

export default function Testimonials() {
  // Sample data - replace with your actual data import
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

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-indigo-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-indigo-600 font-semibold text-lg mb-2">
            Client Reviews
          </h3>
          <h2 className="text-4xl font-bold text-gray-800">What People Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="mb-4 flex justify-start">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 flex-grow">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
