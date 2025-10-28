// src/utils/db.js
// =======================================================
// IndexedDB setup for TownyNet
// Handles offline storage of products and sales data
// =======================================================

import { openDB } from 'idb';

// Open or create a database named "townynetDB" with version 1
export const initDB = async () => {
  return openDB('townynetDB', 1, {
    upgrade(db) {
      // Create object stores if they don't exist
      if (!db.objectStoreNames.contains('products')) {
        db.createObjectStore('products', { keyPath: 'id', autoIncrement: true });
      }
      if (!db.objectStoreNames.contains('sales')) {
        db.createObjectStore('sales', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

// Save a product locally
export const saveProduct = async (product) => {
  const db = await initDB();
  const tx = db.transaction('products', 'readwrite');
  await tx.store.add(product);
  await tx.done;
};

// Get all products
export const getAllProducts = async () => {
  const db = await initDB();
  return db.getAll('products');
};

// Save a sale locally
export const saveSale = async (sale) => {
  const db = await initDB();
  const tx = db.transaction('sales', 'readwrite');
  await tx.store.add(sale);
  await tx.done;
};

// Get all sales
export const getAllSales = async () => {
  const db = await initDB();
  return db.getAll('sales');
};
