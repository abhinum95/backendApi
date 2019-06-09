const Sequelize = require('sequelize');
const sqlite = require('sqlite3');
const db = new sqlite.Database('/sqlite3/sqlite3.exe');
module.exports = new Sequelize({
  dialect: 'sqlite',
  storage: '../sqlite3/Coupons.db'
});