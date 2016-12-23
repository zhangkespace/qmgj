app.controller('order2Controller', ['$scope','$http',function($scope,$http) {
     $http({
        url:"json/banklist.json"
     }).success(function(res){
        $scope.banklist = res;
     });
     $scope.bankindex=0;
     $scope.bankFun=function(index){
         $scope.bankindex=index;
     };
     $scope.zhifuindex=0;
     $scope.zhifuFun=function(index){
         $scope.zhifuindex=index;
     };
}]);