var app = angular.module('LuxeVoyage', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/bali', {
            templateUrl: 'app/views/bali.html',
            controller: 'baliController'
        })
        .otherwise({
            redirectTo: '/bali'
        });
});
