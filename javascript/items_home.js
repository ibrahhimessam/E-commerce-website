fetch("./javascript/items.json")
    .then((response) => response.json())
    .then((data) => {
        // console.log(data)
        const swiper_item_sale = document.querySelector("#swiper_item_sale");
        const other_product_swiper = document.querySelector("#other_product_swiper");
        const other_product_swiper2 =  document.querySelector("#other_product_swiper2")
        allProduct_json = data ;

        data.forEach((product) => {

            if (product.old_price) {

                const percent_desc = Math.floor((product.old_price - product.price) / product.old_price * 100)
                swiper_item_sale.innerHTML += `
            
            <div class="product swiper-slide">
                <div class="icon">
                <span><i  onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><i class="fa-solid fa-share"></i></span>
                </div>
                <span class="sale_persoent">${percent_desc}%</span>
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
                <p class="old_price">$${product.old_price}</p>
                </div>
            </div>
            `;
            }
        });


        data.forEach((product) => {

                other_product_swiper.innerHTML += `
            
            <div class="product swiper-slide">
                <div class="icon">
                <span><i  onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><i class="fa-solid fa-share"></i></span>
                </div>
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
                </div>
            </div>
            `;

        });


        data.forEach((product) => {

            other_product_swiper2.innerHTML += `
        
        <div class="product swiper-slide">
            <div class="icon">
            <span><i  onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
            <span><i class="fa-solid fa-heart"></i></span>
            <span><i class="fa-solid fa-share"></i></span>
            </div>
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
            </div>
        </div>
        `;

    });
    });