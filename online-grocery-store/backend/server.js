// backend/server.js
const express = require('express');
const app = express();
const PORT = 3000;

const groceries = [
  { id: 1, name: "Apples", price: 120 },
  { id: 2, name: "Bananas", price: 60 },
  { id: 3, name: "Milk", price: 45 },
  { id: 4, name: "Bread", price: 30 },
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Online Grocery Store Backend!');
});

// API route for groceries
app.get('/api/groceries', (req, res) => {
  res.json(groceries);
});

// Start server
app.listen(PORT, () => {
  console.log(`🛒 Grocery Store Backend running at http://localhost:${PORT}`);
});
