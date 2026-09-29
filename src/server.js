require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        service: "CloudDrop API",
        timestamp: new Date().toISOString()
    });
});

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to CloudDrop API"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`CloudDrop API running on port ${PORT}`);
});
