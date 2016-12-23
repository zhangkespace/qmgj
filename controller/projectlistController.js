app.controller('projectlistController', ['$scope', '$http', function($scope, $http) {
    $http({
        url: "json/projectfilter.json"
    }).success(function(res) {
        console.log(res);
        $scope.arr1 = res.arr1;
        $scope.arr2 = res.arr2;
        $scope.arr3 = res.arr3;
        $scope.myFilter = { typenumber: '' };
    });
    $scope.filter1index = 0;
    $scope.filter2index = 0;
    $scope.myFilter2 = { plannumber: 0 };
    $scope.filter3index = 0;
    $scope.FilterArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    $scope.filterFun1 = function(index) {
        $scope.filter1index = index;
        $scope.myFilter1 = { typenumber: $scope.FilterArr[index] };
    };
    $scope.filterFun2 = function(index) {
        $scope.filter2index = index;
        $scope.myFilter2 = { plannumber: index };
    };
    $scope.filterFun3 = function(index) {
        $scope.filter3index = index;
    };
    $http({
        url: "json/projectlist.json"
    }).success(function(res2) {
        console.log(res2);
        console.log(res2[0]);
        $scope.listarr = res2;
    });
}]);