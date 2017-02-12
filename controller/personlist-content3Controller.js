app.controller('personlist-content3Controller', ['$scope', function($scope) {
    $scope.personlist3Show = 1;
    $scope.personlist3Fun = function(index) {
        $scope.personlist3Show = index;
    }
}]);