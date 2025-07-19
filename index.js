const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middlewares
app.use(express.json());

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173", // local development
  process.env.FRONTEND_URL, // production Netlify URL from .env
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g., mobile apps, Postman, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        const msg = `❌ CORS blocked for origin: ${origin}`;
        console.error(msg);
        return callback(new Error(msg), false);
      }
    },
    credentials: true, // include credentials (cookies, authorization headers)
  })
);

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// Global error handler (optional best practice)
app.use((err, req, res, next) => {
  console.error("Global error handler:", err.stack);
  res.status(500).json({ error: "Something went wrong on the server." });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("✅ Allowed CORS origins:", allowedOrigins);
});
