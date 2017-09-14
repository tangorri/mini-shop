'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'mini-shop',
  'mini-shop',
  'mini-shop', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
);



const User = sequelize.define('user', {
  email: { type: Sequelize.STRING }, password: { type: Sequelize.STRING }
});
const Cart = sequelize.define('cart', {});
const CartItem = sequelize.define('cart_item', { qty: Sequelize.INTEGER.UNSIGNED });

const Product = sequelize.define('product', {
  name: { type: sequelize.STRING },
  desc: { type: sequelize.STRING },
  price: { type: sequelize.FLOAT.UNSIGNED }
});

// Déclaration des associations.
User.hasOne(Cart);
Cart.belongsTo(User);
Product.belongsToMany(Cart, { through: CartItem });
Cart.belongsToMany(Product, { through: CartItem });

User.sync()
  .then(() => Product.sync())
  .then(() => Cart.sync())
  .then(() => CartItem.sync())
  .then(
  () => {
    // export, façon ES6 : prop: prop -> prop
    module.export = {
      sequelize,
      User,
      Cart,
      CartItem,
      Product
    };
  }
  );