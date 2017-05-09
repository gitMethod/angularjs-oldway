angular.module("login").component("loginComponent", {
    templateUrl: 'app/login/login.template.html',
    controller: ["$scope", "$location", "$routeParams", "loginService",
                "$state","$rootScope", "$timeout",
        function ($scope, $location, $routeParams, loginService,
                  $state, $rootScope, $timeout ) {

            $scope.logIn = function () {
                $scope.feedback = "processing";
                $scope.classColor = "alert-warning";
                $scope.showFeedback = true;

                loginService.verifyLogin({email: $scope.email, password: $scope.password})
                    .then(function (res) {
                        $rootScope.userInfo = res.data;
                        console.log("custom success msg" + res);
                        $rootScope.loggedIn = true;
                        $state.go("header.categories.products");
                        $scope.feedback = "successfully logged in";
                        $scope.classColor = "alert-success";
                        $timeout(function(){
                            $scope.showFeedback = false;
                        }, 5000);

                    }, function (err) {
                        console.log("custom error msg"+ err);
                        $rootScope.loggedIn = false;

                        $scope.feedback = "wrong email or password";
                        $scope.classColor = "alert-danger";
                        $timeout(function(){
                            $scope.showFeedback = false;
                        }, 5000);

                    });
                $scope.email = '';
                $scope.password = '';
                $scope.signForm.$setPristine();
                $scope.signForm.$setUntouched();
            };
        }
    ]
});
