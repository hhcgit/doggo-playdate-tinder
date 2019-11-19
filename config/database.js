const env = require('./environment')(process.env.NODE_ENV);
require('../../scripts/config/config');

module.exports = {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    logging: false
}