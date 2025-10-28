// src/pages/AddProduct.js
import React, { useState } from "react";
import { saveProduct, getAllProducts } from "../utils/db";

/**
 * Add Product Page
 * ----------------
 * Stores products locally in IndexedDB.
 * Later, this data will sync to the cloud when online.
 */
function AddProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  // Handle Save Product button click
  const handleSave = async () => {
    if (!productName || !price) return alert("Please fill all fields");

    // Create product object
    const newProduct = {
      name: productName,
      price: parseFloat(price),
      createdAt: new Date().toISOString(),
    };

    // Save locally in IndexedDB
    await saveProduct(newProduct);

    // Refresh product list
    const all = await getAllProducts();
    setProducts(all);

    // Reset form
    setProductName("");
    setPrice("");
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Add Product</h2>

      {/* Form Inputs */}
      <input
        type="text"
        placeholder="Product Name"
        className="border rounded px-3 py-2 mb-3 w-64"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        className="border rounded px-3 py-2 mb-3 w-64"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleSave}
      >
        Save Product (Offline)
      </button>

      {/* Show Saved Products */}
      <div className="mt-6 w-80 bg-white rounded shadow p-4">
        <h3 className="text-lg font-semibold mb-2">Saved Products</h3>
        {products.length === 0 ? (
          <p className="text-gray-500">No products yet</p>
        ) : (
          <ul>
            {products.map((p) => (
              <li key={p.id} className="border-b py-1">
                {p.name} – ₹{p.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AddProduct;
