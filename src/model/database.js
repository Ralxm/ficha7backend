var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'postgres', //usei a base de dados default do postgres e criei as tabelas Movies e Genres
    'postgres',
    'postgres',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    }
);

/*tabela genres:
* id serial primary key,
* description text
*
* tabela movies:
* id serial priary key,
* title text,
* photo text,
* description, text,
* genreid integer
*
* alter table movies
* add constraint FK_MOVIES_GENRES foreign key (genreid)
* references genres (id)
*/

module.exports = sequelize;