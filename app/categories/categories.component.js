angular.module("categories").component("categoriesComponent", {
    templateUrl: 'app/categories/categories.template.html',
    controller: ["$scope", "$location", "$routeParams", "categoriesService", "productCategoriesService",
        function ($scope, $location, $routeParams, categoriesService, productCategoriesService) {

            var promise = categoriesService.getAllCategories();
            promise.then(function (data) {
                $scope.allCategories = data.data;
            });


            $scope.$watch('foo', function(newValue) {
                productCategoriesService.setSearchWord(newValue);
            });


            $scope.filterByCheck = function() {
                productCategoriesService.setSearchState(this.checkboxCat);
                productCategoriesService.setSearchCatId(this.category.id);
            };
        }
    ]
});
