const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: process.env.NODE_ENV === "development" ? "debug" : "info",

  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.errors({ stack: true }),
    format.colorize(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),

  transports: [new transports.Console()],
});

module.exports = logger;