(function () {
	angular.module('angular-thumbnail-grid')
	.directive('bmThumbnailLi', function ($window, $timeout) {
		return {
			restrict: 'EA',
			scope: {
				expanded: '=',
				marginExpanded: '=',
				settings: '='
			},
			link: function (scope, elem, attrs) {
				if (!attrs.marginExpanded)
					attrs.marginExpanded = '100';
				if (!attrs.settings) {
					attrs.settings = {
						minHeight: '10'
					};
				}
				
				var self = this;
				self.heightPreview = 0;
				self.heightItem = 0;
				self.originalItemHeight = elem[0].offsetHeight;

				var winsize = { width : $window.innerWidth, height : $window.innerHeight };
				var item = angular.element(elem[0]);
				var expander = angular.element(elem[0].querySelector('.ng-expander'));

				scope.$watch('expanded', function (newVal, oldVal) {
					calcHeight();
					if (scope.expanded) {
						expander.css('height', self.heightPreview.toString() + 'px');
						item.css('height', self.heightItem.toString() + 'px');
					} else {
						self.heightPreview = 0;
						self.heightItem = 0;
						item.css('height', originalItemHeight.toString() + 'px');
					}
					console.log({winheight: winsize.height, itemHeight: elem[0].offsetHeight, marginExpanded: attrs.marginExpanded});
				});

				function calcHeight () {
					var heightPreview = parseInt(winsize.height) - parseInt(elem[0].offsetHeight) - parseInt(attrs.marginExpanded);
					var itemHeight = parseInt(winsize.height);

					if (heightPreview < parseInt(attrs.settings.minHeight)) {
						heightPreview = parseInt(attrs.settings.minHeight);
						itemHeight = parseInt(attrs.settings.minHeight) + parseInt(elem[0].offsetHeight) + parseInt(attrs.marginExpanded);
					}

					self.heightPreview = heightPreview;
					self.heightItem = itemHeight;
				}
			}
		};
	});
})();