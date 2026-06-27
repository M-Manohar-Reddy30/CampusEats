const app = require("./app");
const env = require("./config/env");
const connectDatabase = require("./config/database");
const logger = require("./core/logger/logger");

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(env.port, () => {
      logger.info("=========================================");
      logger.info("CampusEats Backend Started");
      logger.info(`Environment : ${env.nodeEnv}`);
      logger.info(`Server : http://localhost:${env.port}`);
      logger.info("=========================================");
    });
  } catch (error) {
    logger.error(`Server Startup Failed : ${error.message}`);
    process.exit(1);
  }
};

startServer();