angular.module("WIKI")
  .directive("navTop", function() {
    return {
      scope: false,
      restrict: "A",
      link: function(scope, ielm, iattrs) {
        console.log(ielm);
      }
    }
  });