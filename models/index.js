// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag }, {
  foreignKey: 'product_id',
  // otherKey: 'tag_id'
  // testing optional otherKey fk tag_id or no other fk may be needed when using API get/ posts/puts
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag }, {
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
