 function saveBasket(basket){
   localStorage.setItem("basket", JSON.stringify(basket));
}

function getBasket(){
    let basket = localStorage.getItem("basket");
    if (basket == null){
        return [];
    }else{
        return JSON.parse(basket);
    }
}

function addBasket(product){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if (foundProduct != undefined){
        foundProduct.quantity++;
    }else{
        product.quantity = 1
        basket.push(product);
    }
    saveBasket(basket);
}

function removeFromBasket(product){
    let basket = getBasket();
    basket = basket.filter(p => p.id != product.id);
    saveBasket(  )
}

function changeQuantity(product, quantity){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if (foundProduct != undefined){
        foundProduct.quantity+= quantity;
    }
    saveBasket(basket);
}

