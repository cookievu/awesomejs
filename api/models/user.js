// 'use strict';
const BcryptService = require('../services/BcryptService')

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
      isEmail: true,
      max: 120
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    facebookId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    googleId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    githubId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    first: {
      type: DataTypes.STRING,
      allowNull: false,
      min: 2,
      max: 16
    },
    last: {
      type: DataTypes.STRING,
      allowNull: true,
      min: 2,
      max: 16
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    alias: {
      type: DataTypes.STRING,
      min: 2,
      max: 32
    },
    position: {
      type: DataTypes.ENUM('member', 'admin', 'superAdmin'),
      defaultValue: 'member'
    },
    status: {
      type: DataTypes.ENUM('pending', 'unactive', 'active', 'block', 'removed'),
      defaultValue: 'unactive'
    },
  }, {})
  User.associate = (models) => {
    // associations can be defined here
  }
  User.prototype.toJSON = function() {
    const values = Object.assign({}, this.get())

    delete values.password
    delete values.position
    return values
  }
  User.beforeCreate((user, options) => {
    return BcryptService.encrypt(user.password)
      .then(hashPassword => user.password = hashPassword)
      .catch(err => console.log(err))
  })
  User.beforeUpdate((user, options) => {
    return BcryptService.encrypt(user.password)
      .then(hashPassword => user.password = hashPassword)
      .catch(err => console.log(err))
  })
  return User;
};