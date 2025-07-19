const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail app password
  },
});

// Optional: verify transporter only in development
if (process.env.NODE_ENV === "development") {
  transporter.verify((error, success) => {
    if (error) {
      console.error("❌ Email transporter configuration error:", error);
    } else {
      console.log("✅ Email transporter is ready to send messages");
    }
  });
}

module.exports = transporter;
