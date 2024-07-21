
// open && Cloes Filter 

let filter = document.querySelector(".filter");
    function open_cloes_filter(){
        filter.classList.toggle("active")
    }

fetch("./javascript/items.json")
    .then((response) => response.json())
    .then((data) => {
        const prodcuts_dev= document.querySelector("#prodcuts_dev")
        allProduct_json = data ;

        data.forEach((product) => {
            // Math.floor((product.old_price - product.price) / product.old_price * 100)
            const old_price_pragrahp = product.old_price ? `<p class="old_price">$${product.old_price}</p>`: "";

                const percent_desc_div = product.old_price ? `<span class="sale_persoent">${ Math.floor((product.old_price - product.price) / product.old_price * 100)}%</span>` : "";

                prodcuts_dev.innerHTML += `
            <div class="product products swiper-slide">
                <div class="icon">
                <span><i  onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><i class="fa-solid fa-share"></i></span>
                </div>
                ${percent_desc_div}
                <div class="img_product">
                <img src="${product.img}" alt="" />
                <img src="${product.img_hover}" class="img_hover" alt="" />
                </div>
                <h3 class="name_product">
                <a href="#">
                ${product.name}
                </a>
                </h3>
                <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                <p><span>$${product.price}</span></p>
                ${old_price_pragrahp}
                </div>
            </div>
            `;
            
        });

    });