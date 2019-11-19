const config = {
    local: {
        PORT: 5432,
        DB_NAME: 'doggo_app_schema',
        dialect: 'postgres',
        operatorsAliases: false
    }
};

module.exports = function(env) {
    return Object.assign(config[env], common);
}