# 🛠️ Project Root Backend

A Node.js + Express + MongoDB backend for user authentication with JWT, bcrypt password hashing, and secure password reset functionality.

---

## 🚀 **Tech Stack**

- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT, bcryptjs
- **Email:** Nodemailer (Gmail)
- **Security:** Helmet, CORS

---

## 📁 **Project Structure**

project-root-backend/
├── config/
│ └── db.js
├── controllers/
│ └── authController.js
├── models/
│ └── User.js
├── routes/
│ └── authRoutes.js
├── utils/
│ └── email.js
├── .env
├── index.js
├── package.json
└── README.md


🌐 Available API Routes
Base URL: /api/auth

Method	Endpoint	Description
POST	/register	Register a new user
POST	/login	Login user and return JWT token
POST	/forgot-password	Send password reset email
POST	/reset-password/:token	Reset password with token


🔒 Security & Environment
Uses JWT for stateless authentication.

Passwords are hashed with bcryptjs.

Password reset tokens are securely hashed before storing in DB.

Helmet is used for HTTP header security.

CORS configured for specific frontend origins.


🚀 Deployment Notes
For production deployment:

Ensure environment variables are set securely.

Use PM2 or similar process managers if deploying on a VPS.

If deploying to Render or Railway:

Set build/start commands and environment variables in their dashboard.

Update FRONTEND_URL to your deployed frontend URL.





