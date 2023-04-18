// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: category_id,
  onDelete: CASCASE
})

// Categories have many Products
Category.hasMany(Product,{
  foreignKey: category_id,
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: ProductTag}, {
  foreignKey: product_id,
  // test optional fk category id or no other fk below
  otherKey: tag_id,
  onDelete: CASCADE

})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag}, {
 foreignKey: tag_id,
 onDelete: CASCADE
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
