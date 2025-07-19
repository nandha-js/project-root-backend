const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post("/register", authController.register);

// @route   POST /api/auth/login
// @desc    Login user and return JWT token
// @access  Public
router.post("/login", authController.login);

// @route   POST /api/auth/forgot-password
// @desc    Initiate password reset process
// @access  Public
router.post("/forgot-password", authController.forgotPassword);

// @route   POST /api/auth/reset-password/:token
// @desc    Reset password using token
// @access  Public
router.post("/reset-password/:token", authController.resetPassword);

module.exports = router;
