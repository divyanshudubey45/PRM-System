const express = require("express");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Patient Report System Backend is Running!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});