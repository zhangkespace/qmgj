app.controller('loginController', ['$scope', '$http', '$state', '$timeout', '$rootScope', function($scope, $http, $state, $timeout, $rootScope) {

    $scope.formValid = function() {
        console.log("验证结果：" + $scope.myForm.$valid);
        if ($scope.myForm.$valid) {
            $http({
                url: '',
                type: 'get',
                data: {
                    phone: $scope.phone,
                    password: $scope.password
                }
            }).success(function(res) {
                alert('登录成功');
                $timeout(function() {
                    $state.go('homepage')
                }, 0);
                $rootScope.qqq = 1;

            })
        }

    }
}]);