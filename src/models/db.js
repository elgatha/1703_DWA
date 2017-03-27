//  Requires

const Sequelize = require('sequelize');
require('dotenv').config();

//  Connect to database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

// Create tables
const url = sequelize.define('url', {
  original_url: {
    type: Sequelize.STRING,
  },
  shortened_url: {
    type: Sequelize.STRING,
  },
});

sequelize.sync();

// Export sequelize

exports.sequelize = sequelize;
exports.url = url;
