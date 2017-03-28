angular.module("shopping")
    .service("shoppingService", ["$http", "$q", function($http, $q){

        this.sendOrder = function (newOrder) {

            var deferred = $q.defer();

            $http.post("http://nackbutik.azurewebsites.net/api/order", newOrder)
                .then(function (res) {
                        deferred.resolve(res);
                })
                .catch(function (err) {
                        deferred.reject(err);
                    }
                );
            return deferred.promise;
        };

    }]);
