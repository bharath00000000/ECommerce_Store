const products=[
    {id:1,name:'Product1',price:10},
    {id:2,name:'Product2',price:20},
    {id:3,name:'Product3',price:30},
    {id:4,name:'Product4',price:40},
    {id:5,name:'Product4',price:50},
    {id:6,name:'Product6',price:60},
    {id:7,name:'Product7',price:70},
    // add more products
];

const productContainer=document.getElementById('products');
const cartContainer=document.getElementById('cartItems');
const cartLink=document.getElementById('cart');
const cart=[];
// create in the product listings

products.forEach(product=>{
    const productElement=document.createElement('div');
    productElement.className='product';
    productElement.innerHTML=`
    <h2>${product.name}</h2>
    <p>${product.price}</p>
    <button class="add-to-cart">Add to Cart</button>`;
    const addToCartButton=productElement.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click',()=>addToCart(product));
    productContainer.appendChild(productElement);
})

// add product to cart

function addToCart(product){
    cart.push(product);
    updateCart();

}
// updating the shopping cart
function updateCart(){
    cartContainer.innerHTML='';
    cart.forEach(product=>{
        const cartItem=document.createElement('div');
        cartItem.className='cart-item';
        cartItem.innerHTML=`
        <p>${product.name}-₹${product.price}</p>
        <button class="remove-from-cart">Remove</button>`;

        const removeButton=cartItem.querySelector('.remove-from-cart');
        removeButton.addEventListener('click',()=>removeFromCart(product));
        cartContainer.appendChild(cartItem);
       
    })
    cartLink.textContent=`Cart(${cart.length})`;
}
// rEMOVE PRODUCT FROM CART
function removeFromCart(product){
    const index=cart.indexOf(product);
    if(index>-1){
        cart.splice(index,1);
        updateCart();
    }
}