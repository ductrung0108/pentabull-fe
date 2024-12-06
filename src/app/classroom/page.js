import React from "react";

export default function ClassroomPage() {
  return (
    <div className="flex flex-col h-screen bg-[#0B0D1A] text-white">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-[#15182B]">
        <div className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">
            Dashboard
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Trade
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Orders
          </a>
          <a href="#" className="text-[#C831FF] font-medium">
            Classroom
          </a>
        </div>
        <button className="bg-[#611540] px-4 py-2 rounded hover:bg-red-500">
          Log out
        </button>
      </nav>

      {/* Main Content */}

      <div className="flex-1 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center " style={{ backgroundImage: 'url("../assets/classroom.svg")' }}></div>

        {/* Class Details Section */}
        <div className="relative z-10 mx-auto max-w-4xl mt-16 p-6 bg-[#15182B] rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            {/* Class Info */}
            <div>
              <h1 className="text-2xl font-semibold">Name of The Class</h1>
              <p className="text-gray-400">Instructor: <span className="text-white">johndoe123</span></p>
            </div>
            {/* Member Count */}
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-1a4 4 0 00-3-3.87M9 20H4v-1a4 4 0 013-3.87m9-2a4 4 0 01-8 0m8 0a4 4 0 00-8 0M16 3.13a4 4 0 010 7.75m4-3.38a4 4 0 11-4-3.37"
                />
              </svg>
              <span className="text-gray-400">5 members</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="flex items-center space-x-2 bg-[#C3008F] hover:bg-purple-400 px-4 py-2 rounded text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
              <span>Create a post</span>
            </button>
            <button className="flex items-center space-x-2 bg-[#00443F] hover:bg-green-400 px-4 py-2 rounded text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span>Add a student</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
