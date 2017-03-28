angular.module("app")
    .config(["$urlRouterProvider", "$stateProvider",
        function ($urlRouterProvider, $stateProvider) {

            $stateProvider
                .state('header',{
                    url: '/header',
                    template: "<header-component></header-component>"
                })
                .state('header.categories',{
                    url: '/categories',
                    template: "<categories-component></categories-component>"
                })
                .state('header.categories.products',{
                    url: '/products',
                    template: "<products-component></products-component>"
                })
                .state('header.categories.details',{
                    url: '/details',
                    template: "<details-component></details-component>"
                })
                .state('header.categories.signup',{
                    url: '/signup',
                    template: "<signup-component></signup-component>"
                })
                .state('header.categories.login',{
                    url: '/login',
                    template: "<login-component></login-component>"
                })
            .state('header.categories.shopping',{
                url: '/shopping',
                template: "<shopping-component></shopping-component>"
            });

            $urlRouterProvider.otherwise("/header/categories/login");

        }]);
