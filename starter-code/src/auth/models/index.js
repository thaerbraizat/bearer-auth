'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./users.js');

const DATABASE_URL = "postgres://localhost:5432/thaerbraizat"

const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
  // dialectOptions: {
  //   ssl: true,
  //   rejectUnauthorized: false,
  // }
} : {}
const sequelize = new Sequelize(DATABASE_URL, {});
module.exports = {
  db: sequelize,
  users: userSchema(sequelize, DataTypes),
}