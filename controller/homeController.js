app.controller('homeController', ['$scope', '$interval', '$timeout', function($scope, $interval, $timeout) {
    $scope.bannerindex = 0;
    $scope.bannerArr1 = ['《晚秋》再现舞台', '《犹太人在上海》音乐剧']
    $scope.bannerArr2 = ['汤唯、玄彬继电影后，首次在话剧舞台合作，重现美国西雅图两名男女身在异国他乡的爱情故事。', '中国、以色列联合创作的大型音乐剧《犹太人在上海》以音乐剧这一公认最具挑战性的艺术形式...']
    $scope.bannerh1 = $scope.bannerArr1[$scope.bannerindex];
    $scope.bannerp = $scope.bannerArr2[$scope.bannerindex];
    var bannerFun = function() {
        if ($scope.bannerindex == 1) {
            $scope.bannerindex = -1;
        }
        $scope.bannerindex++;
        $scope.bannerh1 = $scope.bannerArr1[$scope.bannerindex];
        $scope.bannerp = $scope.bannerArr2[$scope.bannerindex];
        // console.log('1223')                  
    }
    var timer = $interval(bannerFun, 2000)
    $scope.prev = function() {
        if ($scope.bannerindex == 0) {
            $scope.bannerindex = 2;
        }
        $scope.bannerindex = $scope.bannerindex - 1;
        $scope.bannerh1 = $scope.bannerArr1[$scope.bannerindex];
        $scope.bannerp = $scope.bannerArr2[$scope.bannerindex];
    }
    $scope.next = function() {
        // $interval.cancel(timer);
        if ($scope.bannerindex == 1) {
            $scope.bannerindex = -1;
        }
        $scope.bannerindex = $scope.bannerindex + 1;
        $scope.bannerh1 = $scope.bannerArr1[$scope.bannerindex];
        $scope.bannerp = $scope.bannerArr2[$scope.bannerindex];
    }

}]);