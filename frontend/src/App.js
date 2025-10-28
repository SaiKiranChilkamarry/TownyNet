// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Importing pages
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import SalesEntry from "./pages/SalesEntry";
import SyncStatus from "./pages/SyncStatus";

/**
 * Main App Component
 * ------------------
 * Sets up navigation and page routing.
 * Each page is connected via React Router.
 */
function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="flex justify-center space-x-6 bg-blue-600 p-4 text-white">
        <Link to="/">Dashboard</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/sales-entry">Sales Entry</Link>
        <Link to="/sync-status">Sync Status</Link>
      </nav>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/sales-entry" element={<SalesEntry />} />
        <Route path="/sync-status" element={<SyncStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
