angular.module("signup").component("signupComponent", {
    templateUrl: 'app/signup/signup.template.html',
    controller: ["$scope", "$location", "$routeParams", "signupService","$timeout",
        function ($scope, $location, $routeParams, signupService, $timeout) {



            $scope.signButton = function () {
                $scope.feedback = "processing";
                $scope.classColor = "alert-warning";
                $scope.showFeedback = true;

                var newUser = {
                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    email: $scope.email,
                    phone: $scope.phone,
                    password: $scope.password,
                    address: $scope.address,
                    postalCode: $scope.postalCode,
                    city: $scope.city
                };

                signupService.createUser(newUser)
                    .then(function (res) {
                        console.log("custom success msg" + res);
                        $scope.feedback = "User created successfully ";
                        $scope.classColor = "alert-success";
                        $timeout(function(){
                            $scope.showFeedback = false;
                        }, 5000);

                    }, function (err) {
                        console.log("custom error msg"+ err);
                        $scope.feedback = "something went wrong, try again";
                        $scope.classColor = "alert-danger";
                        $timeout(function(){
                            $scope.showFeedback = false;
                        }, 5000);
                    });

                $scope.firstName = '';
                $scope.lastName = '';
                $scope.email = '';
                $scope.phone = '';
                $scope.password = '';
                $scope.address = '';
                $scope.postalCode = '';
                $scope.city = '';
                $scope.contactForm.$setPristine();
                $scope.contactForm.$setUntouched();
            };


        }
    ]
});
