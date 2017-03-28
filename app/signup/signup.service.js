angular.module("signup")
    .service("signupService", ["$http", "$q", function($http, $q){

        this.createUser = function (newUser) {

            var deferred = $q.defer();

            $http.post("http://nackbutik.azurewebsites.net/api/customer", newUser)
                .then( function (data) {
                    deferred.resolve(data);
                })
                .catch(function (err) {
                    deferred.reject(err);
                }
            );
            return deferred.promise;
        };

    }]);
