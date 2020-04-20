let btnIn = document.getElementById('btn');
let logIn = document.getElementById('log_in');
let emailInItem = "";
let emailIn = document.getElementById('email_in');
let passwordInItem = "";
let passwordIn = document.getElementById('password');
let clickIn = document.getElementById('click_in');

const user1 = {
    log: 'test@mail.ru',
    pass: 'qwerty'
}


emailIn.addEventListener('keypress', function(kePressed){
    if(kePressed.which == 13){
        emailInItem = this.value; 
    }
})

passwordIn.addEventListener('keypress', function(kePressed){
    if(kePressed.which == 13){
        passwordInItem = this.value; 
        this.value = this.value.replace(/[\s\S]/g, "*") ;
    }
})

function checkUser(){
    if (emailInItem === user1.log && passwordInItem === user1.pass){
        window.location.href = 'personal.html';
        
        /*let products = store.getProducts();
        let productsCart = [];
        for(let i = 0; i < catalogProduct.length; i++){
            if(products.indexOf(catalogProduct[i].id) !== -1){
                productsCart.push(catalogProduct[i]);
            }
        }

        alert(catalogProduct[i].name);*/
        /*for(let i = 0; i < productsCart.length; i++){
            let wrapper = document.createElement('slot');

            let item = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'item'
            });
            let name = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'name',
                nameText: catalogProduct[i].name
            });
            let genre = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'genre',
                nameText: catalogProduct[i].genre
            });
            let img = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'img_small',
                bgImage: `url(${catalogProduct[i].img})`
            });
            let price = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'price',
                nameText: catalogProduct[i].price + '$'
            });

            item.appendChild(name);
            item.appendChild(genre);
            item.appendChild(img);
            item.appendChild(price);
            wrapper.appendChild(item);
        }*/

            
           /* let form1 = document.getElementById('container_cart2').getElementsByTagName('form');
            form1[0].innerHTML = `
            <div class="product_info_personal">
                <div class="text_info_personal" id="personal_details${i}">${catalogProduct[i].name}</div>
                <div class="text_info_personal" id="personal_details${i}">${catalogProduct[i].genre}</div>
                <div class="text_info_personal" id="personal_details${i}"><img src="${catalogProduct[i].img}" alt="logo" width = "300" height = "300"></div>
                <div class="text_info_personal" id="personal_details${i}">${catalogProduct[i].price}$</div>
                </div>
            `;  */      
        
        //let containerProductsPersonal = document.querySelector('container_cart');

        //let wrapper = document.createElement('slot');



        //alert(11);
        //let createOneProductPersonal = new CreateOneProduct('.catalog_counter', catalogProduct);

        //alert(22);
        /*for(let i = 0; i < productsCart.length; i++){
            let item = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'item'
            });
            let name = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'name',
                nameText: productsCart[i].name
            });
            let genre = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'genre',
                nameText: productsCart[i].genre
            });
            let img = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'img_small',
                bgImage: `url(${productsCart[i].img})`
            });
            let price = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'price',
                nameText: productsCart[i].price + '$'
            });
            btn = createOneProduct.getProductItem({
                nameTag: 'button',
                nameClass: 'remove_item',
                nameText: 'Удалить из корзины'
            });

            item.appendChild(name);
            item.appendChild(genre);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
            
        }*/
        ///containerProductsPersonal.appendChild(wrapper);
        //cart2 = new Cart('.container_cart_personal', '.catalog_counter_personal', catalogProduct);

        //alert(11);
        //cart.updateKorz();

    //} else ('Ошибка данных');
    }
}

clickIn.addEventListener('click', checkUser);