

"use strict";

app.controller("bookCtrl", function ($scope, guideStorage) {
  // guideStorage is now a dependency on the controller, which means... we can use it here like an IIFE
  // #scope is always a dependency for a controller.
// getGuides is like a little carlot function
  guideStorage.getGuides()
    .then((bookCollection) => {
      $scope.books = bookCollection.guides;
      console.log(bookCollection);
    });
  });



