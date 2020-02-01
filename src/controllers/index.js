module.exports = {
    apiAuthenticator: require('./api-authenticator'),
    addProduct: require('./add-product'),
    editProductById: require('./edit-product-by-id'),
    removeProductById: require('./remove-product-id'),
    getProductById: require('./get-product-by-id'),
    getFeaturedProducts: require('./get-featured-products'),
    getProducts: require('./get-products'),

    addProductToCart: require('./cart/add-product-to-cart'),
    removeProductFromCart: require('./cart/remove-product-from-cart'),
    editProductInCart: require('./cart/edit-product-in-cart'),
    getCart: require('./cart/get-cart'),

    validateUserSession: require('./validate-user-session')
}