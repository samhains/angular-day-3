app.directive('error', function () {
	return {
		restrict: 'E',
		transclude: true,
		template: '<span ng-transclude></span>'
	};
});