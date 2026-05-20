const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// allow JSON data
app.use(express.json());

// serve your frontend (HTML/CSS/JS)
app.use(express.static(path.join(__dirname)));

// test API route
app.get("/api", (req, res) => {
  res.json({ message: "Backend is working 🚀" });
});

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// allow JSON data
app.use(express.json());

// serve your frontend (HTML/CSS/JS)
app.use(express.static(path.join(__dirname)));

// test API route
app.get("/api", (req, res) => {
  res.json({ message: "Backend is working 🚀" });
});

// ── ADD STEP 2 STARTING HERE ─────────────────────────────────
// Auth API Route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Dummy credential check for your local testing
  if (email === "demo@tripgenie.com" && password === "password123") {
    return res.status(200).json({ 
      success: true, 
      user: { name: "John Doe", email: email } 
    });
  }

  // Fallback if credentials don't match
  return res.status(401).json({ 
    success: false, 
    message: "Invalid email or password combination." 
  });
});
// ── END OF STEP 2 ────────────────────────────────────────────

// sample trips API (fake data for now)
app.get("/api/trips", (req, res) => {
  res.json([
    { id: 1, destination: "Paris", budget: 3000 },
    { id: 2, destination: "Tokyo", budget: 4500 }
  ]);
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// sample trips API (fake data for now)
app.get("/api/trips", (req, res) => {
  res.json([
    { id: 1, destination: "Paris", budget: 3000 },
    { id: 2, destination: "Tokyo", budget: 4500 }
  ]);
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
