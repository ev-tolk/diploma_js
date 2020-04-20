
function updatePersona(){
    alert(7);
    let products = store.getProducts();
    alert(8);
    let productsCart = [];
    for(let i = 0; i < catalogProduct.length; i++){
        if(products.indexOf(catalogProduct[i].id) !== -1){
            productsCart.push(catalogProduct[i]);
        }
    }
    alert(productsCart.length);
    for(let i = 0; i < productsCart.length; i++){
        alert(3);
        let form = document.getElementsByClassName('container_cart');//.getElementsByTagName('form');
        alert(4);
        form[0].innerHTML = `
        <div class="product_info_personal">
            <div class="text_info_personal" id="personal_details${i}">${catalogProduct[i].name}</div>
            <div class="text_info_personal" id="personal_details${i}">${catalogProduct[i].genre}</div>
            <div class="text_info_personal" id="personal_details${i}"><img src="${catalogProduct[i].img}" alt="logo" width = "300" height = "300"></div>
            <div class="text_info_personal" id="personal_details${i}">${catalogProduct[i].price}$</div>
            </div>
        `;        
    }
}

//updatePersona();
