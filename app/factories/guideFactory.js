// Separate the database interactions from the DOM interactions, and make your guidebook data available to your controller (and other, future controllers) by moving the http call for guides.json from bookCtrl.js into guideFactory.js
// Inject your factory into bookCtrl.js as a dependency
"use strict";
app.factory("guideStorage", ($q, $http) =>  {
  let getGuides = () => {
    let books = [];
    return $q ((resolve, reject) => {
      $http.get("../../data/guides.json")
      .success((itemObject) => {
        resolve(itemObject);
      })
      .error((error) => {
      reject(error);
      });
    });
  };
  return {getGuides};
});


// getGuides is like a little carlot function