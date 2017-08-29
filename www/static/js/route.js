angular.module('WIKI', ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
      .when('/preview', {
        templateUrl: "static/template/preview/preview.html"
      })
      .when('/introduction', {
        templateUrl: "static/template/introduction/introduction.html"
      })
      .otherwise({
        redirectTo: '/preview'
      });
  });