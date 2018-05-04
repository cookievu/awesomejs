'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
        isEmail: true,
        max: 120
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      facebookId: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
      },
      googleId: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
      },
      githubId: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
      },
      first: {
        type: Sequelize.STRING,
        min: 2,
        max: 16
      },
      last: {
        type: Sequelize.STRING,
        min: 2,
        max: 16
      },
      avatar: Sequelize.TEXT,
      alias: {
        type: Sequelize.STRING,
        min: 2,
        max: 32
      },
      position: {
        type: Sequelize.ENUM('member', 'admin', 'superAdmin'),
        defaultValue: 'member'
      },
      status: {
        type: Sequelize.ENUM('pending', 'unactive', 'active', 'block', 'removed'),
        defaultValue: 'unactive'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};