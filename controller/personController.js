app.controller('personController', ['$scope', "$timeout", "$state", function($scope, $timeout, $state) {
    console.log('personController')
    $timeout(function() {
        $state.go('person.personlist-content1')
    }, 0);
    $scope.index = 0;
    $scope.personlistFun = function(index) {
        $scope.index = index;
    }

}]);