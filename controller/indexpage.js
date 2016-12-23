

app.controller('indexpageContrller', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
    $rootScope.qqq = 0;
    $scope.persontuichuFun = function() {
        var aaa = confirm("确定退出吗");
        if (aaa == true) {
            $rootScope.qqq = 0;
            $state.go('homepage');
        }

    };
    $scope.navindex = 0;
    $scope.navFun = function(index) {
        $scope.navindex = index;
    };
}]);
