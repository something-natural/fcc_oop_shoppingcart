// buttons
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");


// areas
const cartContainer = document.getElementById("cart-container");
const showHideCart = document.getElementById("show-hide-cart");
let isCartShowing = false;

const productsContainer = document.getElementById("products-container");
const totalNumberSpan = document.getElementById("total-items");
const subTotalSpan = document.getElementById("subtotal");
const taxSpan= document.getElementById("taxes");
const totalSpan = document.getElementById("total");

const dessertCardContainer = document.getElementById("dessert-card-container");


// products

const products = [
    {
	    id: 1,
	    name: "Vanilla Cupcakes (6 Pack)",
	    price: 12.99,
	    category: "Cupcake",
	  },
	  {
	    id:2 ,
	    name: "French Macaron",
	    price: 3.99,
	    category: "Macaron"
	  },
	  {
	    id: 3,
	    name: "Pumpkin Cupcake",
	    price: 3.99,
	    category: "Cupcake"
	  },
	  {
	    id: 4, 
	    name: "Chocolate Cupcake",
	    price: 5.99,
	    category: "Cupcake"
	  },
	  {
	    id: 5,
	    name: "Chocolate Pretzels (4 Pack)",
	    price: 10.99,
	    category: "Pretzel"
	  },
	  {
	    id: 6,
	    name: "Strawberry Ice Cream",
	    price: 2.99,
	    category: "Ice Cream"
	  },
	  {
	    id: 7,
	    name: "Chocolate Macarons (4 Pack)",
	    price: 9.99,
	    category: "Macaron"
	  },
	  {
	    id: 8,
	    name: "Strawberry Pretzel",
	    price: 4.99,
	    category: "Pretzel"
	  },
	  {
	    id: 9,
	    name: "Butter Pecan Ice Cream",
	    price: 2.99,
	    category: "Ice Cream"
	  },
	  {
	    id: 10,
	    name: "Rocky Road Ice Cream",
	    price: 2.99,
	    category: "Ice Cream"
	  },
	  {
	    id: 11,
	    name: "Vanilla Macarons (5 Pack)",
	    price: 11.99,
	    category: "Macaron"
	  },
	  {
	    id: 12 ,
	    name: "Lemon Cupcakes (4 Pack)",
	    price: 12.99,
	    category: "Cupcake"
	  }
]

// display dessert
products.forEach(
    ({id, name, price, category}) => {
        dessertCardContainer.innerHTML += `
            <div class="dessert-card">
                <h2>${name}</h2>
                <p class="dessert-price">${price}</p>
                <p>Category: ${category}</p>
                <button class="btn add-to-cart-btn" id="${id}">Add to cart</button>
            </div>
        `;
        
    });

class ShoppingCart {
    constructor(){
        this.items = [];
        this.total = 0;
        this.taxRate = 0.82;        
    }
    
    addCart(){

    }

}

const cart = new ShoppingCart();
cartBtn.addEventListener("click", (event) => {    
    isCartShowing = !isCartShowing    
    ShoppingCart.innerText = isCartShowing ? "Hide" : "Show";
    cartContainer.style.display = isCartShowing ? "block": "None";
})