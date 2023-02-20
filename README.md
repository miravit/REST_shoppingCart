###CART

getCartById: GET http://localhost:4000/api/v1/cart/:cartId

createNewCart: GET http://localhost:4000/api/v1/cart

deleteCart: POST http://localhost:4000/api/v1/cart/cartId

###PRODUCTS

getAllProducts: GET http://localhost:4000/api/v1/product

getProductById: GET http://localhost:4000/api/v1/product/:productId

addProductToCart: POST http://localhost:4000/api/v1/product/:productId
{
"cartId":""
}

deleteProductFromCart: PUT http://localhost:4000/api/v1/product/:productId
{
"cartId":""
}
