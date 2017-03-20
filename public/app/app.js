angular.module('app', ['ngRoute', 'ngResource'])

.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
        .when('/', {
            'templateUrl' : '/partials/main',
            'controller': 'mainCtrl',
        });
})


.controller('mainCtrl', function ($scope) {
    $scope.myVar = "Hello Angular Js";
});