var app = angular.module('qmgj', ['ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/homepage');
    $stateProvider
        .state('homepage', {
            url: '/homepage',
            templateUrl: 'view/homepage.html',
            controller: 'homeController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'view/login.html',
            controller: 'loginController'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'view/register.html',
            controller: 'registerController'
        })
        .state('password', {
            url: '/password',
            templateUrl: 'view/password.html',
            controller: 'passwordController'
        })
        .state('project', {
            url: '/project',
            templateUrl: 'view/project.html',
            controller: 'projectController'
        })
        .state('project.project-detailsleft1', {
            url: '/project-details1',
            templateUrl: 'view/project-detailsleft1.html',
            controller: 'project-details1Controller'
        })
        .state('project.project-detailsleft2', {
            url: '/project-details2',
            templateUrl: 'view/project-detailsleft2.html',
            controller: 'project-details2Controller'
        })
        .state('project.project-detailsleft3', {
            url: '/project-details3',
            templateUrl: 'view/project-detailsleft3.html',
            controller: 'project-details3Controller'
        })
        .state('projectlist', {
            url: '/projectlist',
            templateUrl: 'view/projectlist.html',
            controller: 'projectlistController'
        })
        .state('person', {
            url: '/person',
            templateUrl: 'view/person.html',
            controller: 'personController'
        })
        .state('person.personlist-content1', {
            url: '/personlist-content1',
            templateUrl: 'view/personlist-content1.html',
            controller: 'personlist-content1Controller'
        })
        .state('person.personlist-content2', {
            url: '/personlist-content2',
            templateUrl: 'view/personlist-content2.html',
            controller: 'personlist-content2Controller'
        })
        .state('person.personlist-content3', {
            url: '/personlist-content3',
            templateUrl: 'view/personlist-content3.html',
            controller: 'personlist-content3Controller'
        })
        .state('person.personlist-content4', {
            url: '/personlist-content4',
            templateUrl: 'view/personlist-content4.html',
            controller: 'personlist-content4Controller'
        })
        .state('person.personlist-content5', {
            url: '/personlist-content5',
            templateUrl: 'view/personlist-content5.html',
            controller: 'personlist-content5Controller'
        })
        .state('order1', {
            url: '/order1',
            templateUrl: 'view/order1.html',
            controller: 'order1Controller'
        })
        .state('order2', {
            url: '/order2',
            templateUrl: 'view/order2.html',
            controller: 'order2Controller'
        })
        .state('order3', {
            url: '/order3',
            templateUrl: 'view/order3.html',
            controller: 'order3Controller'
        })
}]);