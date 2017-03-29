angular.module("header").component("headerComponent", {
    templateUrl: 'app/header/header.template.html',
    controller: ["$scope", "$location", "$routeParams","$rootScope", "$state",
        function ($scope, $location, $routeParams, $rootScope, $state ) {

            $scope.sendToShopping = function () {
                if($rootScope.loggedIn){
                    $state.go("header.shopping");
                } else {
                    $state.go("header.login");
                }
            };

            $scope.sendToProducts = function () {
                if($rootScope.loggedIn){
                    $state.go("header.categories.products");
                } else {
                    $state.go("header.categories.login");
                }
            };

            $rootScope.loggedIn = false;
            $rootScope.$watch('loggedIn', function() {
                if ( $rootScope.loggedIn ){
                    $scope.userStatus = "Welcome "+ $rootScope.userInfo.firstName +" "+$rootScope.userInfo.lastName;
                } else {
                    $scope.userStatus = "logged out";
                }
            });

        }
    ]
});
