// Open & Close Cart

let cart = document.querySelector(".cart");

function open_cart(){
    cart.classList.add("active");
}

function colse_cart(){
    cart.classList.remove("active");
}

// Open & Close Menu
let menu =document .querySelector("#menu")
function open_menu(){
    menu.classList.add("active");
}

function colse_menu(){
    menu.classList.remove("active");
}


//  Change Item Images Details

    let big_img = document.querySelector ("#big_img");

    function changeItemImage(img){
        big_img.src = img
    }


// add item In Cart 

let allProduct_json;

let items_in_cart = document.querySelector('.items_in_cart');

let proudct_cart = [];

function addToCart(id , btn) {
    proudct_cart.push(allProduct_json[id])
    btn.classList.add("active")

    console.log( proudct_cart)
    getCartItems()
}


let countItem =  document.querySelector('.count_items');
let priceItemHeader = document.querySelector('.price_cart_header');
let countItemCart = document.querySelector('.count_items_cart');
let totalPriceInCart =document.querySelector('.price_cart_tota');

function getCartItems(){
    let totalPrice =0;
    let items_cart ="";
    for(let i = 0 ; i< proudct_cart.length ; i++){

        items_cart += `
        <div class="item_cart">
            <img src="${proudct_cart[i].img}" alt="" />
            <div class="content">
            <h4>${proudct_cart[i].name}</h4>
            <p class="price_cart">$${proudct_cart[i].price}</p>
            </div>
            <button onclick="removeFromCart(${i})" class="delete_item"><i class="fa-solid fa-trash"></i></button>
        </div>
        `
        totalPrice += proudct_cart[i].price
    }
    items_in_cart.innerHTML = items_cart

    priceItemHeader.innerHTML = '$' + totalPrice;
    countItem.innerHTML= proudct_cart.length;
    
    totalPriceInCart.innerHTML = '$' + totalPrice;
    countItemCart.innerHTML= `( ${proudct_cart.length} Item In cart)`;
}


function removeFromCart(index){
    proudct_cart.splice(index,1)
    getCartItems()
    let addToCartButton = document.querySelectorAll(".fa-cart-plus");

    for(let i = 0 ; i < addToCartButton.length ; i++){

        addToCartButton[i].classList.remove("active")

        proudct_cart.forEach(product => {
            if(product.id == i){
                addToCartButton[i].classList.add("avtive")
            }
        })
    }
};

// back_to_top js

let back_to_top =document.querySelector(".back_to_top");

back_to_top.addEventListener("click" , function(){
    window.scrollTo({
        top:0,
        behavior: "smooth",
    })
});
