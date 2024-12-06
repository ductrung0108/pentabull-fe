import React from "react";

export default function DashboardPage() {
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
          <a href="#" className="text-purple-400 font-medium">
            Classroom
          </a>
        </div>
        <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-500">
          Log out
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center py-12">
        {/* User Profile Section */}
        <div className="w-full max-w-4xl">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-gray-500"></div>
            <div>
              <h1 className="text-xl font-semibold">johndoe123 • student</h1>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white underline"
              >
                Edit account information
              </a>
            </div>
          </div>
        </div>

        {/* Balance Section */}
        <div className="w-full max-w-4xl mt-8 bg-[#15182B] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Balance</h2>
          <div className="mt-4 flex justify-between items-center">
            <div className="text-3xl font-bold">100,000.00 USDT</div>
            <div className="flex space-x-4">
              {/* Toggle */}
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="balanceToggle"
                  id="btc1"
                  className="hidden"
                />
                <label
                  htmlFor="btc1"
                  className="flex items-center cursor-pointer space-x-1"
                >
                  <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                  <span className="text-sm">BTC Bitcoin</span>
                  <span className="text-sm font-bold">0.0001</span>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="balanceToggle"
                  id="btc2"
                  className="hidden"
                />
                <label
                  htmlFor="btc2"
                  className="flex items-center cursor-pointer space-x-1"
                >
                  <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                  <span className="text-sm">BTC Bitcoin</span>
                  <span className="text-sm font-bold">0.0001</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Markets Section */}
        <div className="w-full max-w-4xl mt-8 bg-[#15182B] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Markets</h2>
          <div className="mt-4">
            <div className="grid grid-cols-4 text-gray-400 border-b border-gray-600 pb-2">
              <span>Coin</span>
              <span>Price</span>
              <span>24H Change</span>
              <span></span>
            </div>
            {/* Sample Rows */}
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-4 items-center py-2 border-b border-gray-600"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <div>
                    <div className="text-white">BTC</div>
                    <div className="text-gray-400 text-sm">Bitcoin</div>
                  </div>
                </div>
                <span className="text-white">97,640</span>
                <span
                  className={`${
                    index % 2 === 0 ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {index % 2 === 0 ? "-0.13%" : "+0.13%"}
                </span>
                <button className="text-purple-500 hover:underline">
                  Trade
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
