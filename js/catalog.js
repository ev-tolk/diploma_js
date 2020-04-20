//document.getElementsByClassName('product_info').style.display = 'none';

let allProducts;

function Sort(arr){
    let sortName = document.getElementById('value_name').value;
    //let arrCopy = arr;
    switch(sortName){
        case 'a_z_name':
            return arr.slice().sort((a, b) => a.name > b.name ? 1 : -1);
        break;
        case 'z_a_name':
            return arr.slice().sort((a, b) => a.name < b.name ? 1 : -1);
        break;
        case 'a_z_price':
            return arr.slice().sort((a, b) => a.price > b.price ? 1 : -1);
        break;
        case 'z_a_price':
            return arr.slice().sort((a, b) => a.price < b.price ? 1 : -1);
        break;
        case 'a_z_genre':
            return arr.slice().sort((a, b) => a.genre > b.genre ? 1 : -1);
        break;
        case 'z_a_genre':
            return arr.slice().sort((a, b) => a.genre < b.genre ? 1 : -1);
        break;
        default:
            return arr;
    }
}

document.getElementById('value_name').addEventListener('change', function(){
    //Sort(catalogProduct);
    allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter');
});

class AllProducts{
    constructor(containerProducts, catalogProduct, catalogCounter){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProduct = Sort(catalogProduct);
        this.catalogCounter = document.querySelector(catalogCounter);
        this.createProducts(); //вызываемый метод этого класса
    }

    /* <div class="item">
        <div class="name">Product1</div>
        <div class="img"></div>
        <div class="price">999</div>
        <button>Купить</button>
    </div> */

    //метод, в котором мы создаем отображение элементов на странице
    createProducts(){
        let wrapper = document.createElement('slot');
        let products = store.getProducts();
        this.catalogCounter.innerHTML = products.length;
        while (this.containerProducts.firstChild) {
            this.containerProducts.removeChild(this.containerProducts.firstChild);
        }

        for(let i = 0; i < this.catalogProduct.length; i++){
            let index = products.indexOf(this.catalogProduct[i].id);
            let activeText;

            if(index === -1){
                activeText = 'Добавить в корзину';
            } else{
                activeText = 'Удалить из корзины';
            }

            let item = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'item'
            });
            let name = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'name',
                nameText: this.catalogProduct[i].name
            });
            let img = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'img',
                bgImage: `url(${this.catalogProduct[i].img})`
            });
            let genre = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'genre',
                nameText: this.catalogProduct[i].genre
            });
            let price = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'price',
                nameText: this.catalogProduct[i].price + '$'
            });
            let btn = createOneProduct.getProductItem({
                nameTag: 'button',
                nameClass: 'btn',
                nameText: activeText,
                id: this.catalogProduct[i].id
            });

            btn.addEventListener('click', function(){
                let id = this.getAttribute('id');
                let result = store.putProduct(id);
                cart.updateKorz();

                allProducts.catalogCounter.innerHTML = result.products.length;

                if(result.statusProduct){
                    this.innerHTML = 'Удалить из корзины';
                } else{
                    this.innerHTML = 'Добавить в корзину';
                }
            })

            item.appendChild(name);
            item.appendChild(genre);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);

            let name1 = this.catalogProduct[i].name;
            let genre1 = this.catalogProduct[i].genre;
            let img1 = this.catalogProduct[i].img;
            let price1 = this.catalogProduct[i].price;
            name.addEventListener('click', function(){
                document.getElementById('catalog_counter').style.display = 'none';
                document.getElementById('info_pro').style.display = 'block';
                document.getElementById('active').style.display = 'none';
                document.getElementById('active1').style.display = 'block';
                document.getElementById('product_info').style.display = 'block';
                document.getElementById('catalog_pr').style.display = 'none';
                let form = document.getElementById('product_info').getElementsByTagName('form');
                form[0].innerHTML = `
                <div class="product_info">
                <div class="text_info" id="details${i}">${name1}</div>
                <div class="text_info" id="details${i}">${genre1}</div>
                <div class="text_info" id="details${i}"><img src="${img1}" alt="logo" width = "250" height = "250"></div>
                <div class="text_info" id="details${i}">${price1}$</div>
                </div>
                <div class="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam.
                </div>
                <div class="comment">
                    <input class="comment_name" type="text" value="Введите ваше имя">
                    <input class="comment_comm" type="text" value="Введите ваш отзыв">
                    <input type="button" value="Отправить отзыв">
                </div>
                `;
                

                /*document.location.href = "./productPage.html";

                let form1 = document.getElementById('abcde').getElementsByTagName('form');
                //alert(form);
                form1.form[0].innerHTML = '<br><h1>Таблица растений</h1><br>';

                //let form = document.getElementsByClassName('product_page');//.getElementsByTagName('form');
                //let selector = document.querySelector('.descr');
                //alert(form);
                //form.write(wrapper);
                //selector.appendChild(wrapper);*/
                
            });

        };
        this.containerProducts.appendChild(wrapper);
    };
}

allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter');
