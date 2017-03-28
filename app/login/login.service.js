angular.module("login")
    .service("loginService", ["$http", "$q", function($http, $q){

        this.verifyLogin = function (userInfo) {

            var deferred = $q.defer();

            $http.post("http://nackbutik.azurewebsites.net/api/customer/login", userInfo)
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
