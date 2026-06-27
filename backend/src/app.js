const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const { successResponse } = require("./core/response/apiResponse");

const app = express();

// Security Middleware
app.use(helmet());

// CORS
app.use(cors());

// Compression
app.use(compression());

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie Parser
app.use(cookieParser());

// Health Check
app.get("/api/v1/health", (req, res) => {
  return successResponse(res, {
    message: "CampusEats Backend is running.",
    data: {
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString(),
    },
  });
});

module.exports = app;