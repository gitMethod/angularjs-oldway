angular.module("products").component("productsComponent", {
    templateUrl: 'app/products/products.template.html',
    controller: ["$scope", "$location", "$routeParams", "productsService",
        "productCategoriesService", "productDetailsService","$state","$rootScope",
        function ($scope, $location, $routeParams, productsService,
                  productCategoriesService, productDetailsService, $state, $rootScope) {

            $scope.sendToState = function () {
                if($rootScope.loggedIn){
                    $state.go("header.categories.details");
                } else {
                    $state.go("header.categories.login");
                }
            };

            var storedProducts = [];
            $scope.shownProducts = [];

            var promise = productsService.getAllProducts();
            promise.then(function (data) {
                storedProducts = data.data;
                $scope.shownProducts = storedProducts;

            });

            $scope.sendProduct = function (product) {
                productDetailsService.setProduct(product);
            };

            $scope.service = productCategoriesService;



            $scope.$watchGroup(['service.getSearchState()','service.getSearchCatId()'], function() {

                var id = $scope.service.getSearchCatId();
                var state = $scope.service.getSearchState();

                if(state){
                    if($scope.shownProducts.length === storedProducts.length){
                        $scope.shownProducts = [];
                    }
                    for(var i=0; i<storedProducts.length; i++){
                        if(id === storedProducts[i].categoryId){
                            $scope.shownProducts.push(storedProducts[i]);
                        }
                    }

                }  else {
                    for(var j =$scope.shownProducts.length-1 ; j>=0; j--){

                        if(id === $scope.shownProducts[j].categoryId){
                            $scope.shownProducts.splice(j,1);
                        }
                    }
                    if($scope.shownProducts.length === 0){
                        $scope.shownProducts = storedProducts;
                    }
                }


            });

        }
    ]
});
