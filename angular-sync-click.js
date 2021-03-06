(function () {
'use strict';
angular.module('app')
  .directive('ngSyncClick', ngSyncClick);

function ngSyncClick($parse) {
  var directive = {
    link: link,
    restrict: 'A',
  };

  return directive;

  function link(scope, element, attr) {
    element[0].addEventListener('click', function (event) {
      var invoker = $parse(attr.ngSyncClick);
      scope.isDisabled = true;
      invoker(scope)
      .then().finally(function () {
        scope.isDisabled = false;
      });
    }, true);
  };
}
})();
