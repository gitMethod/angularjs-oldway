angular.module("categories")
    .service("categoriesService", ["$http", "$q", function($http, $q){

        var deferred = $q.defer();

        $http.get("http://nackbutik.azurewebsites.net/api/category").then(
            function (data) {
                deferred.resolve(data);
            },
            function (error) {
                console.log(error);
            }
        );

        this.getAllCategories = function () {
            return deferred.promise;
        }

    }]);
