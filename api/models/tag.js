'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tags', {
  	id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
    	type: DataTypes.STRING,
    	allowNull: false,
    },
    alias: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	unique: true
    },
    count: {
    	type: DataTypes.INTEGER,
    	defaultValue: 0
    },
    status: {
      type: DataTypes.ENUM('pending', 'active', 'remove'),
      defaultValue: 'active'
    }
  }, {});
  Tag.associate = function(models) {
  };
  return Tag;
};