import React from "react";
import { Clock, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">

        <div className="flex flex-row pt-12"> 
            {/* Left panel - Fixed */}
            <div className="w-1/4 fixed h-screen p-8">
            <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-white shadow-sm">
                <Clock className="h-6 w-6 text-gray-600" />
                </div>
            </div>
            
            <h1 className="text-5xl font-bold mt-6">John Doe</h1>
            <h2 className="text-xl font-semibold mt-1">CEO, ACME</h2>
            
            <p className="text-gray-600 mt-4">
                Minindu is a visionary. His UI designs are revolutionary 
                and user-centric.
            </p>
            
            <div className="mt-8 text-sm text-gray-500">
                Created in CodeDesign.ai
            </div>
            </div>
            </div>
          {/* Right section - Main content */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            {/* Top row - Featured project and social links */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Featured project image */}
              <div className="w-full md:w-2/3 bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="/api/placeholder/600/400"
                  alt="Featured project"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Social media links */}
              <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
                {/* Instagram */}
                <div className="bg-pink-50 p-4 rounded-lg flex flex-col items-center justify-center">
                  <Instagram className="h-8 w-8 text-pink-600" />
                  <p className="mt-2 font-medium">Instagram</p>
                  <button className="mt-4 bg-purple-900 text-white px-4 py-1 rounded-md text-sm">
                    Follow 5.6K
                  </button>
                </div>

                {/* Twitter/X */}
                <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center">
                  <Twitter className="h-8 w-8 text-black" />
                  <p className="mt-2 font-medium">Twitter</p>
                  <p className="mt-4 text-gray-600">@johndoe</p>
                </div>

                {/* LinkedIn */}
                <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center justify-center">
                  <Linkedin className="h-8 w-8 text-blue-600" />
                  <p className="mt-2 font-medium">Linked in</p>
                  <button className="mt-4 bg-purple-900 text-white px-4 py-1 rounded-md text-sm">
                    Connect
                  </button>
                </div>

                {/* Facebook */}
                <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center justify-center">
                  <Facebook className="h-8 w-8 text-blue-600" />
                  <p className="mt-2 font-medium">Facebook</p>
                  <button className="mt-4 bg-purple-900 text-white px-4 py-1 rounded-md text-sm">
                    Follow
                  </button>
                </div>
              </div>
            </div>

            {/* Projects section */}
                    {/* Right panel - Scrollable */}
        <div className="w-3/4 ml-auto p-8">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Project A - Hourglass */}
            <div className="rounded-lg overflow-hidden shadow-md relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Project A - Hourglass" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <div className="bg-white rounded-full px-4 py-2 shadow-md">
                  Project A
                </div>
              </div>
            </div>
            
            {/* Project X - Pocket Watch */}
            <div className="rounded-lg overflow-hidden shadow-md relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Project X - Pocket Watch" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <div className="bg-white rounded-full px-4 py-2 shadow-md">
                  Project X
                </div>
              </div>
            </div>
            
            {/* Collection of Watches */}
            <div className="rounded-lg overflow-hidden shadow-md relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Collection of Watches" 
                className="w-full h-80 object-cover"
              />
            </div>
            
            {/* Project Z - Laptop */}
            <div className="rounded-lg overflow-hidden shadow-md relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Project Z - Laptop" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <div className="bg-white rounded-full px-4 py-2 shadow-md">
                  Project Z
                </div>
              </div>
            
          
        
      
          </div>
        </div>
      </div>
</div>
</div>
</div>
      {/* Chat button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-indigo-600 text-white p-4 rounded-full shadow-lg">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Reminder notification */}
      <div className="fixed top-0 left-0 right-0 bg-white p-2 text-center text-purple-700 text-sm">
        Don't forget to save your project!
      </div>
    </div>
  );
};

export default Portfolio;
