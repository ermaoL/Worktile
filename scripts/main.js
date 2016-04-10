/**
 * Created by Administrator on 2016/4/9.
 */

var myWork = angular.module('myWork', [
    'ngRoute'
]);
myWork.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/workView', {
        templateUrl: 'views/workView.html',
        controller: 'workCtrl'
    });
    $routeProvider.when('/projectView', {
        templateUrl: 'views/projectView.html',
        controller: 'projectCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/workView'});
}]);
