// Fetch your data using an http call that returns a promise. Save the returned data as a property of the $scope object and loop through it to display the guidebook info to the user.


// Directives:
// ng-app="<your module name>"
// ng-controller="bookCtrl"
// ng-repeat="book in books"
// A call to the data folder for guides.json using $http
// Use the $q service to wrap your http call in a promise
// $scope.books = <your array of guide books data>

"use strict";

app.controller("bookCtrl", function ($scope, $q, $http) {
    return $q((resolve, reject) => {
      // instead of retunr new Promise it's return $q
      // we're returning a promise wrapped in an ajax call
      $http.get("../../data/guides.json")
      .success((itemObject) => {
        resolve(itemObject);
        $scope.books = itemObject.guides;
        console.log($scope.books);
      })
      .error((error) => {
        reject(error);
      });
    });
  });



