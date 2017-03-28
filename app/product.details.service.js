angular.module("app")
    .service("productDetailsService", [ function(){

        var product = {};
        var setProduct = function(sentProduct) {
            product = sentProduct;
        };
        var getProduct = function() {
            return  product;
        };

        return {
            setProduct: setProduct,
            getProduct: getProduct
        };

    }]);
