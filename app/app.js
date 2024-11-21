var app = angular.module('LuxeVoyage', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/yogyakarta', {
            templateUrl: 'app/views/yogyakarta.html',
            controller: 'yogyakartaController'
        })
        .otherwise({
            redirectTo: '/yogyakarta'
        });
});
