
const { ADD_TO_CART_CONTROLLER } = require('../../lib/constants/logging-constants');
const addItemToCart = require('../../lib/db-objects/add-item-cart-obj');

const addProductToCart = (req, res) => {
    console.log(ADD_TO_CART_CONTROLLER, `Add product to cart: ${JSON.stringify(req.body)}`);

    const item = addItemToCart(req.body);

    if (!item.id) {
        console.log(ADD_TO_CART_CONTROLLER, `Item not present. ID is NULL`);
        return res.send({
            status: 'FAILED',
            message: 'ITEM_NOT_ADDED',
            description: 'The item was not found. Please try again.'
        })
    }

    console.log(ADD_TO_CART_CONTROLLER, `item to be added in cart: ${JSON.stringify(item)}`);

    let cart = req.session.cart;
    
    console.log(ADD_TO_CART_CONTROLLER, `Cart before adding product: ${JSON.stringify(cart)}`);

    let existingItem = false;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === item.id) {
            console.log(ADD_TO_CART_CONTROLLER, `Item already present in cart. Increasing the item count`);
            existingItem = true;
            cart[i].count += 1;
            break;
        }
    }
    if (!existingItem) {
        console.log(ADD_TO_CART_CONTROLLER, `Item not present in cart. Creating and inserting it`);
        cart.push(item);
    }

    req.session.cart = cart;

    console.log(ADD_TO_CART_CONTROLLER, `updated cart: ${JSON.stringify(req.session.cart)}`);

    res.send({
        status: 'COMPLETED',
        message: 'ITEM_ADDED_TO_CART',
        description: 'The item was added to the cart successfully.'
    })
};

module.exports = addProductToCart;