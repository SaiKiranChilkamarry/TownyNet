// src/pages/SalesEntry.js

import React from "react";

/**
 * Sales Entry Page
 * ----------------
 * Used to record daily sales transactions.
 * Later this will connect to IndexedDB to save data offline.
 */
function SalesEntry() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-purple-600">Sales Entry</h2>

      {/* Example inputs */}
      <input
        type="text"
        placeholder="Product ID"
        className="border rounded px-3 py-2 mb-3 w-64"
      />
      <input
        type="number"
        placeholder="Quantity Sold"
        className="border rounded px-3 py-2 mb-3 w-64"
      />
      <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
        Record Sale
      </button>
    </div>
  );
}

export default SalesEntry;
