angular.module("app")
    .service("detailsShoppingService", [ function(){

        var  shoppingCart = [];

        var setShoppingCart = function(sentProduct) {
            if(!isRepeated(sentProduct)){
                shoppingCart.push(addQuantity(sentProduct))
            }
        };
        var getShoppingCart = function() {
            return  shoppingCart;
        };

        var addQuantity = function (product) {
            product.quantity = 1;
            return product;
        };

        var isRepeated = function (product) {
            for (var i=0; i<shoppingCart.length; i++){
                if( shoppingCart[i].id === product.id){
                    shoppingCart[i].quantity ++;
                    return true;
                }
            }
            return false;
        };

        var emptyShoppingCart = function() {
            shoppingCart = [];
        };

        return {
            setShoppingCart: setShoppingCart,
            getShoppingCart: getShoppingCart,
            emptyShoppingCart: emptyShoppingCart
        };

    }]);
