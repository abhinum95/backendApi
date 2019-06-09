const Sequelize = require('sequelize');
const db = require('../config/database');

const Coupon = db.define('Coupons', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  image: {
    type: Sequelize.STRING
  },
  productDescription: {
    type: Sequelize.STRING
  },
  offerDescription: {
    type: Sequelize.STRING
  },
  startDate: {
    type: Sequelize.DATE
  },
  endDate: {
    type: Sequelize.DATE
  }
});

module.exports = Coupon;