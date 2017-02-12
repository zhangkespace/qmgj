app.controller('registerController', ['$scope', '$http', function($scope, $http) {
    $scope.button1 = "发送验证码";
    $scope.clickFn1 = function() {
        $scope.button1 = "已发送.....";
    }
    $scope.formValid = function() {
        console.log("验证结果：" + $scope.myForm.$valid);
        if ($scope.myForm.$valid) {
            $http({
                url: 'http://localhost:8090/day07',
                type: 'get',
                data: {
                    phone: $scope.phone,
                    password: $scope.password
                }
            }).success(function(res) {
                alert('注册成功')
            })
        }
    }
}]);