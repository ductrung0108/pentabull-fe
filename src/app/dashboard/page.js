import React from "react";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#0B0D1A] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#15182B] p-4">
        <div className="text-lg font-bold mb-8">
          <span className="text-purple-400">Pentabull</span>
        </div>
        <nav className="space-y-4">
          <div>
            <h3 className="text-gray-400 text-sm">Assets</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Overview</li>
              <li className="hover:text-white cursor-pointer">Spot</li>
              <li className="hover:text-white cursor-pointer">Margin</li>
              <li className="hover:text-white cursor-pointer">Futures</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 text-sm">Orders</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Spot Order</li>
              <li className="hover:text-white cursor-pointer">P2P Order</li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-8">
          <nav className="space-x-6">
            <a className="text-purple-400 font-medium" href="#">
              Dashboard
            </a>
            <a className="text-gray-300 hover:text-white" href="#">
              Trade
            </a>
            <a className="text-gray-300 hover:text-white" href="#">
              Orders
            </a>
            <a className="text-gray-300 hover:text-white" href="#">
              Classroom
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-yellow-500 px-4 py-2 rounded">Deposit</button>
            <div className="bg-gray-700 p-2 rounded-full">🔍</div>
            <div className="bg-gray-700 p-2 rounded-full">⚙️</div>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-16 h-16 bg-gray-500 rounded-full"></div>
          <div>
            <h1 className="text-xl font-semibold">johndoe123 • student</h1>
            <a className="text-purple-400 text-sm hover:underline" href="#">
              Edit account information
            </a>
          </div>
        </div>

        {/* Balance Section */}
        <div className="bg-[#15182B] p-6 rounded-lg mb-8">
          <h2 className="text-lg font-semibold mb-4">Balance</h2>
          <div className="flex justify-between">
            <span className="text-4xl font-bold">100,000.00 USDT</span>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>BTC Bitcoin</span>
                <span>0.0001</span>
              </div>
              <div className="flex justify-between items-center">
                <span>BTC Bitcoin</span>
                <span>0.0001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Markets Section */}
        <div className="bg-[#15182B] p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Markets</h2>
          <div className="space-y-4">
            {Array(5)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-700 pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                    <div>
                      <span className="block font-bold">BTC</span>
                      <span className="text-sm text-gray-400">Bitcoin</span>
                    </div>
                  </div>
                  <div className="text-gray-300">97,640</div>
                  <div className={index % 2 === 0 ? "text-red-400" : "text-green-400"}>
                    {index % 2 === 0 ? "-0.13%" : "+0.13%"}
                  </div>
                  <button className="text-purple-400 hover:underline">Trade</button>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
