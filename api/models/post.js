'use strict';

module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
  	id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    title: {
    	type: DataTypes.STRING,
    	allowNull: false,
    },
    alias: {
    	type: DataTypes.STRING,
    	allowNull: false,
      unique: true
    },
    content: {
    	type: DataTypes.TEXT,
    	allowNull: false
    },
    type: {
    	type: DataTypes.ENUM('post', 'draft'),
      	defaultValue: 'post'
    },
    status: {
      type: DataTypes.ENUM('pending', 'open', 'close', 'trash', 'remove'),
      defaultValue: 'open'
    }
  }, {});
  Post.associate = function(models) {
  };

  return Post;
};