angular.module("products")
    .service("productsService", ["$http", "$q", function($http, $q){

        var deferred = $q.defer();

        $http.get("http://nackbutik.azurewebsites.net/api/product").then(
            function (data) {
                deferred.resolve(data);
            },
            function (error) {
                console.log(error);
            }
        );
        
        this.getAllProducts = function () {
            return deferred.promise;
        }

    }]);
