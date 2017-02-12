app.controller('personlist-content5Controller', ['$scope', '$http', function($scope, $http) {
    $http({
        url: "json/personlist.json"
    }).success(function(res) {
        $scope.personlist = res;
    });
    $scope.Index = 0;
    $scope.personlist5Fn = function(index) {
        $scope.Index = index;
        $scope.personlist5Filter = { status: ['', 0, 1][index] };
    }
}]);