const User = require('../model/orm').User;
const Product = require('../model/orm').Product;
const Cart = require('../model/orm').Cart;
const CartItem = require('../model/orm').CartItem;

User.sync({ force: true })
    .then(() => Product.sync({ force: true }))
    .then(() => Cart.sync({ force: true }))
    .then(() => CartItem.sync({ force: true }));