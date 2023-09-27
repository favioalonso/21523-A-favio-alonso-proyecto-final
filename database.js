const { Sequelize, DataTypes } = require('sequelize');

// Instancia de conexión a la base de datos
const sequelize = new Sequelize('pruebadb1', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3309,
});


module.exports = {
    sequelize,
    Sequelize,
    DataTypes
}