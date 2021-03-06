module.exports = {
    whoami: require('./whoami'),
    apiAuthenticator: require('./api-authenticator'),
    checkUserAPIPermission: require('./check-user-api-permission'),
    createSessionWithFacebook: require('./create-session-with-facebook'),
    logoutSession: require('./logout-session'),
    addProduct: require('./add-product'),
    editProductById: require('./edit-product-by-id'),
    removeProductById: require('./remove-product-id'),
    getProductById: require('./get-product-by-id'),
    getFeaturedProducts: require('./get-featured-products'),
    getProducts: require('./get-products'),
    getFilteredProducts: require('./get-filtered-products'),
    getProductsByCategory: require('./get-products-by-category'),
    addProductToCart: require('./cart/add-product-to-cart'),
    removeProductFromCart: require('./cart/remove-product-from-cart'),
    editProductInCart: require('./cart/edit-product-in-cart'),
    getCart: require('./cart/get-cart'),
    validateUserSession: require('./validate-user-session'),
    createInstantOrder: require('./create-instant-order'),
    getOrderById: require('./get-order-by-id'),
    patchOrderById: require('./patch-order-by-id'),
    getPaymentPlan: require('./get-payment-plan'),
    razorpayPaymentComplete: require('./razorpay-payment-complete'),
    updateDeliveryPincode: require('./update-delivery-pincode'),
    getPaymentActivity: require('./get-payment-activity'),
    getPaymentActivityInternal: require('./get-payment-activity-internal'),
    searchTransactions: require('./search-transactions'),
    getBusinessKPIs: require('./get-business-kpis'),
    injectLogger: require('./inject-logger'),
    getLogsById: require('./get-logs-by-id'),
    loginController: require('./login-controller'),
    getAllPurchases: require('./get-all-purchases'),
    getPurchaseById: require('./get-purchase-by-id')
};