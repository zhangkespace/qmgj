app.controller('personlist-content2Controller', ['$scope', function($scope) {
    $scope.arr = ['微电影', '电影', '电视剧', '戏曲', '相声', '话剧', '书画', '戏剧', '音乐剧', '歌剧'];
    $scope.arr2 = [];
    $scope.arr2[0] = $scope.arr2[8] = true;

    $scope.honggouFun = function(index) {
        $scope.arr2[index] = !$scope.arr2[index];
    }
}]);