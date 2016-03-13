(function () {
	angular.module('angular-thumbnail-grid', [])
	.directive('ogThumbnailGrid', function ($timeout) {
		return {
			scope: {},
			controller: ThumbnailGridCtrl,
			controllerAs: 'vm',
			bindToController: {
				images: '='
			},
			templateUrl: 'ogThumbnailGrid.html',
			link: function (scope, elm, attr) {
				console.log('initiated directive');
				$timeout(function () {
					Grid.addItems(angular.element(elm.children()[0]).children());
				});
			}
		};
	});

	function ThumbnailGridCtrl () {
		var vm = this;
	}
})();