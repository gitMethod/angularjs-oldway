angular.module("details").component("detailsComponent", {
    templateUrl: 'app/details/details.template.html',
    controller: ["$scope", "$location", "$routeParams","productDetailsService", "detailsShoppingService", "$timeout",
        function ($scope, $location, $routeParams, productDetailsService, detailsShoppingService, $timeout) {
            $scope.product = productDetailsService.getProduct();

            $scope.sendProduct = function (product) {
                detailsShoppingService.setShoppingCart(product);
                $scope.showFeedback = true;
                $timeout(function(){
                    $scope.showFeedback = false;
                }, 5000);
            };
        }
    ]
});
