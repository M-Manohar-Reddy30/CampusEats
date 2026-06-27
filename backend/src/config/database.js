const mongoose = require("mongoose");
const env = require("./env");
const logger = require("../core/logger/logger");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(env.mongodb.uri);

    logger.info(`MongoDB Connected`);
    logger.info(`Database : ${connection.connection.name}`);
    logger.info(`Host : ${connection.connection.host}`);
  } catch (error) {
    logger.error(`MongoDB Connection Failed : ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDatabase;