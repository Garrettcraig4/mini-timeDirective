angular.module("app").directive("showTime", function() {
  return {
    scope: {
      parentTime: "@"
    },
    templateUrl: "./js/time.html"
  };
});
