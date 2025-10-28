// src/pages/Dashboard.js

import React from "react";

/**
 * Dashboard Page
 * ----------------
 * The main landing page for vendors.
 * Displays high-level info, quick links, and summary cards.
 */
function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Vendor Dashboard
      </h1>

      {/* Example summary card */}
      <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
        <p className="text-gray-700">Welcome to TownyNet Vendor Panel</p>
        <p className="text-sm text-gray-500 mt-2">
          Navigate using the top menu to manage products and sales.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
