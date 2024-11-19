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
        this.totalProductCount = {};
    }   

    getTotal(){
        return this.items.reduce((total,cur) => total + cur.price, 0 )
    }
    

    // so when you click "add to cart button", 
    addCart(productid, productlist){
        // 1. first you get product info(id, name, price)
        const selected = productlist.find(item => item.id === productid);
        const {name, price} = selected;
        // 2. push item to this.items array
        this.items.push(selected);
        // 3. add html element in products-container div which is using class product, product-count, product-category. if it is already exist, just count up        
		this.totalProductCount[productid] = (this.totalProductCount[productid] + 1 || 1)		
		this.totalProductCount[productid] > 1
			? document.getElementById(`productcount${productid}`).innerText = `${this.totalProductCount[productid]}x`
			: productsContainer.innerHTML += `			
            <div class="product" id="${productid}">			
                <p><span class="product-count" id="productcount${productid}"></span>${name}</p>
                <p>$${price}</p>            
            </div>
            `        
        // 4. get subtotal, taxes, total, and update this.total, taxrate, and inner text of each span element
        this.total = this.getTotal().toFixed(2);
        
    }
}

const cart = new ShoppingCart();

const addBtns = document.getElementsByClassName("add-to-cart-btn");
[...addBtns].forEach(btn => {
    btn.addEventListener("click",(event)=>{        
        cart.addCart(Number(event.target.id), products);
    })
})


// so when you click "cart" button,
// 1. inner text of span(show-hide-cart) should be inverted
// 2. cartContainer.style.display should be inverted

cartBtn.addEventListener("click", (event) => {    
    isCartShowing = !isCartShowing    
    ShoppingCart.innerText = isCartShowing ? "Hide" : "Show";
    cartContainer.style.display = isCartShowing ? "block": "None";
})