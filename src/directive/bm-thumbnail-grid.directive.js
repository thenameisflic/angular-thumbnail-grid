(function () {
	angular.module('angular-thumbnail-grid')
	.directive('bmThumbnailGrid', function ($window, $timeout) {
		return {
			scope: {},
			controller: ThumbnailGridCtrl,
			controllerAs: 'vm',
			bindToController: {

			},
			templateUrl: '../dist/directive/bm-thumbnail-grid.directive.html',
			link: function (scope, elem, attrs) {
				var current = -1,
				previewPos = -1,
				scrollExtra = 0,
				marginExpanded = 10;
				
			}
		};
	});

	function ThumbnailGridCtrl () {
		var vm = this;
	}
})();