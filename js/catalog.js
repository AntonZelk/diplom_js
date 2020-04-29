

class AllProducts{
    constructor(containerProducts, catalogProduct, catalogCounter){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProduct = catalogProduct;
        this.catalogCounter = document.querySelector(catalogCounter);
        this.createProducts();
    }

    /*<slot>
        <div class="item">
            <div class="name">Product1</div>
            <div class="img"></div>
            <div class="price">111</div>
            <button>Купить</button>
        </div>
    </slot>
        */

    createProducts(){
        let wrapper = document.createElement('slot');
        let products = store.getProducts();
        this.catalogCounter.innerHTML = products.length;
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
            let price = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'price',
                nameText: `${this.catalogProduct[i].price} BYN`
            });
            let button = createOneProduct.getProductItem({
                nameTag: 'button',
                nameClass: 'btn',
                nameText: activeText,
                id: this.catalogProduct[i].id
            });
            let btn2 = createOneProduct.getProductItem({
                nameTag: 'button',
                nameClass: 'btn2',
                nameText: 'Подробнее',
                id: this.catalogProduct[i].id
            });

            button.addEventListener('click', function(){
                let id = this.getAttribute('id');
                let result = store.putProduct(id);

                allProducts.catalogCounter.innerHTML = result.products.length;

                if(result.statusProduct){
                    this.innerHTML = 'Удалить из корзины';
                } else{
                    this.innerHTML = 'Добавить в корзину';
                }
            })
           
               
    
         

            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(button);
            item.appendChild(btn2);
            wrapper.appendChild(item);
        };
        this.containerProducts.appendChild(wrapper);
    };

   
}

let allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter');
let allProductsOwn = new AllProducts('.container_products_Own', catalogProductOwn, '.catalog_counter');
let allProductsFont = new AllProducts('.container_products_Font', catalogProductFont, '.catalog_counter');
let allProductsSmoke = new AllProducts('.container_products_Smoke', catalogProductSmoke, '.catalog_counter');
let allProductsPiu = new AllProducts('.container_products_Piu', catalogProductPiu, '.catalog_counter');