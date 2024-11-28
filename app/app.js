var app = angular.module('LuxeVoyage', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/contactUs', {
            templateUrl: 'app/views/contactUs.html',
            controller: 'contactUsController'
        })
        .otherwise({
            redirectTo: '/contactUs'
        });
});
