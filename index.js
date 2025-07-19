const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Updated allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://stately-maamoul-72ee22.netlify.app",
  "https://guileless-dodol-54e12a.netlify.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        const msg = `The CORS policy does not allow access from the specified Origin: ${origin}`;
        return callback(new Error(msg), false);
      }
    },
    credentials: true,
  })
);

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("Allowed CORS origins:", allowedOrigins);
});
