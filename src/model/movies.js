const Sequelize = require('sequelize');
const sequelize = require('./database');
const Genre = require('./genres');

var Movie = sequelize.define('movie', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: Sequelize.STRING,
    photo: Sequelize.STRING,
    description: Sequelize.STRING,
    genreid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'genres',
            key: 'id'
        }
    }
},
{
timestamps: false,
});

Movie.belongsTo(Genre, { foreignKey: 'genreid' });

module.exports = Movie;