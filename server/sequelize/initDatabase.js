import connection from './connection';
const config = require('../src/config/database');
const env = require('../src/config/environment');

module.exports = async (dbName = config.database) => {
    const sequelize = connection();

    await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``)

    await sequelize.close();
}