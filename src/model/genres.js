const Sequelize = require('sequelize');
const sequelize = require('./database');

var Genre = sequelize.define('genre', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: Sequelize.STRING
    },
    {
    timestamps: false,
    }
);

module.exports = Genre