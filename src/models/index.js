const Category = require("./Category");
const News = require("./News");

Category.hasMany(News);
News.belongsTo(Category);
