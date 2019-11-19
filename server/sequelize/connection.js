const Sequelize = require('sequelize');

require('../scripts/config/config');

export default (dbName) => 
    new Sequelize(dbName, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false
    })