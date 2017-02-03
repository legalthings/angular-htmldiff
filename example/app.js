angular.module('app', ['htmldiff']);

angular.module('app').controller('AppCtrl', function($scope, $sce, htmldiff) {
    const before = angular.element(document.querySelector('#before'))[0].innerHTML;
    const after = angular.element(document.querySelector('#after'))[0].innerHTML;

    $scope.diff = $sce.trustAsHtml(htmldiff(before, after));
});
