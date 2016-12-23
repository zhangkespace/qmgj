app.controller('projectController', ['$scope', "$timeout", "$state", function($scope, $timeout, $state) {
    console.log('projectController')
    $timeout(function() {
        $state.go('project.project-detailsleft1')
    }, 0);
    $scope.showIndex = 0;
    $scope.Fun = function(index) {
        $scope.showIndex = index;
    }
}]);