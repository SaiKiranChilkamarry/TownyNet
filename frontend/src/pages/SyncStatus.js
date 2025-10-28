// src/pages/SyncStatus.js

import React from "react";

/**
 * Sync Status Page
 * ----------------
 * Displays the synchronization state between
 * local (offline) data and cloud database.
 * Later, this will show last sync time and errors.
 */
function SyncStatus() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Sync Status</h2>
      <p className="text-gray-700">
        Data synchronization details will appear here.
      </p>
    </div>
  );
}

export default SyncStatus;
