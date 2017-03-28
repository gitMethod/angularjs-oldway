angular.module("shopping").component("shoppingComponent", {
    templateUrl: 'app/shopping/shopping.template.html',
    controller: ["$scope", "$location", "$routeParams", "productsService", "detailsShoppingService",
        "shoppingService","$rootScope","$timeout",
        function ($scope, $location, $routeParams, productsService, detailsShoppingService,
                  shoppingService, $rootScope, $timeout) {

            $scope.shoppingCart = detailsShoppingService.getShoppingCart();

            $scope.setTotal = function () {
                $scope.total = 0;
                if($scope.shoppingCart.length > 0) {
                    for (var i = 0; i<$scope.shoppingCart.length; i++) {
                        $scope.total += $scope.shoppingCart[i].price * $scope.shoppingCart[i].quantity;
                    }
                }
            };
            $scope.setTotal();

            $scope.removeItem = function(index){
                $scope.shoppingCart.splice(index, 1);
                $scope.setTotal();
            };

            $scope.setNewQuantity = function () {
               $scope.setTotal();
            };

            var filterCart = function () {
                var arrayToSend = [];
                for (var i=0; i<$scope.shoppingCart.length; i++){
                    var productId = $scope.shoppingCart[i].id;
                    var quantity = $scope.shoppingCart[i].quantity;
                    arrayToSend.push({productId: productId, quantity: quantity});
                }
                return arrayToSend;
            };

            $scope.orderButton = function () {
                $scope.feedback = "processing";
                $scope.classColor = "alert-warning";
                $scope.showFeedback = true;

                if ($scope.shoppingCart.length <= 0){
                    $scope.feedback = "Your cart is empty";
                    $scope.classColor = "alert-danger";
                    $timeout(function(){
                        $scope.showFeedback = false;
                    }, 5000);

                } else {

                    var order = {
                        customerId: $rootScope.userInfo.customerId,
                        products: filterCart()
                    };

                    shoppingService.sendOrder(order)
                        .then(function (res) {
                            console.log("custom success msg" + res);
                            $rootScope.loggedIn = true;
                            $scope.feedback = "Order sent successfully";
                            $scope.classColor = "alert-success";
                            $timeout(function () {
                                $scope.showFeedback = false;
                            }, 5000);

                        }, function (err) {
                            console.log("custom error msg" + err);
                            $rootScope.loggedIn = false;

                            $scope.feedback = "something went wrong try again";
                            $scope.classColor = "alert-danger";
                            $timeout(function () {
                                $scope.showFeedback = false;
                            }, 5000);
                        });
                    $scope.shoppingCart = [];
                    detailsShoppingService.emptyShoppingCart();
                    $scope.total = 0;
                }
            };

        }
    ]
});
