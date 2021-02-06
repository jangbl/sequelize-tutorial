const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports = sequelize;

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'sequelize_tutorial',
  username: 'jgoebel',
  password: null,
  host: 'localhost',
  define: {
    freezeTableName: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = db;

// https://sequelize.org/v5/manual/upgrade-to-v5.html
/*
options.underscored - Converts all camelCased columns to underscored if true
options.underscoredAll - Converts camelCased model names to underscored table names if true
*/
