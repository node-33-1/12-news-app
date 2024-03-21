const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Favorite = sequelize.define('favorite', {
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    // userId
    // newsId
});

module.exports = Favorite;