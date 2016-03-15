(function () {
	angular.module('angular-thumbnail-grid', [])
	.directive('ogThumbnailGrid', ['$timeout', function ($timeout) {
		return {
			scope: {},
			controller: ThumbnailGridCtrl,
			controllerAs: 'vm',
			bindToController: {
				images: '='
			},
			template: '<ul id="og-grid" class="og-grid"><li ng-repeat="image in vm.images"><a href="#" data-largesrc="{{image.largesrc}}" data-title="{{image.title}}" data-description="{{image.description}}" data-details="{{image.template}}"><img ng-src="{{image.thumbnailsrc}}" alt="img01"/></a></li></ul>',
			link: function (scope, elm, attr) {
				$timeout(function () {
					Grid.addItems(angular.element(elm.children()[0]).children());
				});
			}
		};
	}]);

	function ThumbnailGridCtrl () {
		var vm = this;
	}
})();