var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $http.get('/clients').success(function(response) {
        console.log('Data recieved from the server');
        $scope.clients = response
    });

    $scope.addClient = function() {
        console.log('Adding new client...');
        $http.post('/clients', $scope.client).success(function(response) {
            console.log('Client Added');
            window.location.href='/';
        });
    }
}]);