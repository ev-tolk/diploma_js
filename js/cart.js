let btn;
let markl = false;



class Cart{
    constructor(containerCart, catalogCounter, catalogProduct){
        this.containerCart = document.querySelector(containerCart);
        this.catalogCounter = document.querySelector(catalogCounter);
        this.catalogProduct = catalogProduct;
        this.createCart();
    }

    updateKorz(){
        while (cart.containerCart.firstChild) {
            cart.containerCart.removeChild(cart.containerCart.firstChild);
        }
        let productsCart = cart.getProductCart();
        let wrapper = document.createElement('slot');

        for(let i = 0; i < productsCart.length; i++){
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

            btn.addEventListener('click', function(){
                store.putProduct(productsCart[i].id);    
                cart.updateKorz();
            })
            
        }

        let close = createOneProduct.getProductItem({
            nameTag: 'div',
            nameClass: 'close'
        });

        close.addEventListener('click', function(){
            cart.containerCart.style.display = "none";
            cart.containerCart.innerHTML = '';
        });

        

        cart.containerCart.appendChild(close);
        cart.containerCart.appendChild(wrapper);
    }

    createCart(){
        //this.catalogCounter.addEventListener('click', function(){
            document.getElementById('korz').addEventListener('click', function(){
                if(cart.containerCart.style.display == "block"){
                    cart.containerCart.style.display = "none";
                } else{
                    cart.containerCart.style.display = "block";
                    cart.updateKorz();
                }
            });
    };

    getProductCart(){
        let products = store.getProducts();
        let productsCart = [];
        for(let i = 0; i < this.catalogProduct.length; i++){
            if(products.indexOf(this.catalogProduct[i].id) !== -1){
                productsCart.push(this.catalogProduct[i]);
            }
        }
        return productsCart;
    };

    
}

let cart = new Cart('.container_cart', '.catalog_counter', catalogProduct);
