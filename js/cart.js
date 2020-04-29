
let markl = false;
let sum2 = 0;
let sum = document.createElement('div');
class Cart{
    constructor(containerCart, catalogCounter, allProductcatalog){
        this.containerCart = document.querySelector(containerCart);
        this.catalogCounter = document.querySelector(catalogCounter);
        this.allProductcatalog = allProductcatalog;
        this.createCart();
    }

    updateCorz(){
        while (cart.containerCart.firstChild) {
            cart.containerCart.removeChild(cart.containerCart.firstChild);
        }
        closePage();
        closeCatalog();
        let btn;
        let productsCart = cart.getProductCart();
        let wrapper = document.createElement('slot');
        
        sum.id = 'allSum';
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
            let img = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'img',
                bgImage: `url(${productsCart[i].img})`
            });
            let price = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'price',
                nameText: productsCart[i].price + 'BYN'
            });
            btn = createOneProduct.getProductItem({
                nameTag: 'button',
                nameClass: 'remove_item',
                nameText: 'Удалить из корзины'
            });
            let allCounter =  document.createElement('div');
            allCounter.id = 'allCounter';
            let counter1 = document.createElement('div');
            counter1.id = 'counter1';
            counter1.innerHTML = '+1';
            let counter2 = document.createElement('div');
            counter2.id = 'counter2';
            counter2.innerHTML = '-1';
            let counter3 = document.createElement('div');
            let cont3 = 1;
            counter3.id = 'counter3';
            counter3.innerHTML = 'Количество: ' + cont3;

            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            item.appendChild(counter3);
            item.appendChild(allCounter);
            allCounter.appendChild(counter1);
            allCounter.appendChild(counter2);
            wrapper.appendChild(item);
            wrapper.appendChild(sum);
            
            btn.addEventListener('click', function(){
                let result = store.putProduct(productsCart[i].id);
                cart.updateCorz();
                allProducts.catalogCounter.innerHTML = result.products.length;
                
                
                window.location.reload();

            })
           
            let summ = 0;
            for(let i in productsCart) {
             summ += productsCart[i].price;
            }
            sum2 = summ;
            sum.innerHTML ='Общая сумма: ' + summ + " BYN";
            counter1.addEventListener('click', function(){      
                sum2 += productsCart[i].price;
                sum.innerHTML ='Общая сумма: ' + sum2+ " BYN";
                cont3 +=1;
                counter3.innerHTML = 'Количество: ' + cont3;
               
            })
                counter2.addEventListener('click', function(){
                    sum2 -= productsCart[i].price;
                    sum.innerHTML ='Общая сумма: ' + sum2+ " BYN";
                    cont3 -=1;
                    counter3.innerHTML = 'Количество: ' + cont3;
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
            document.getElementById('corz').addEventListener('click', function(){
                if(cart.containerCart.style.display == "flex"){
                    cart.containerCart.style.display = "none";
                    openAllpage();
                } else{
                    cart.containerCart.style.display = "flex";
                    cart.updateCorz();
                }
            });
    };

    getProductCart(){
        let products = store.getProducts();
        let productsCart = [];
        for(let i = 0; i < this.allProductcatalog.length; i++){
            if(products.indexOf(this.allProductcatalog[i].id) !== -1){
                productsCart.push(this.allProductcatalog[i]);
            }
        }
        return productsCart;
    };

    
}

let cart = new Cart('.container_cart', '.catalog_counter', allProductcatalog);

