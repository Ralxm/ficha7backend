var Sequelize = require('sequelize');

/*const sequelize = new Sequelize(
    'postgres', //usei a base de dados default do postgres e criei as tabelas Movies e Genres
    'postgres',
    'postgres',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    }
);*/

const sequelize = new Sequelize(
    'basedados_hqdr', //usei a base de dados default do postgres e criei as tabelas Movies e Genres
    'basedados_hqdr_user',
    'arZpSxn7J1R3FdyBTc0Br37i9CeH8lZv',
    {
        host: 'postgres://basedados_hqdr_user:arZpSxn7J1R3FdyBTc0Br37i9CeH8lZv@dpg-cp75k70l6cac7387enr0-a/basedados_hqdr',
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