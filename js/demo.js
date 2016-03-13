(function () {
	angular.module('demo-angular-thumbnail-grid', ['angular-thumbnail-grid'])
	.controller('DemoCtrl', function () {
		var vm = this;

		vm.images = [{
			largesrc: 'images/1.jpg',
			thumbnailsrc: 'images/thumbs/1.jpg',
			template: '<div class="og-details"><h3>Dandelion horseradish</h3><p>Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.</p><a href="#">Visit website</a></div>'
		}, {
			largesrc: 'images/2.jpg',
			thumbnailsrc: 'images/thumbs/2.jpg',
			template: '<div class="og-details"><h3>Veggies sunt bona vobis</h3><p>Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.</p><a href="#">Visit website</a></div>'
		}, {
			largesrc: 'images/3.jpg',
			thumbnailsrc: 'images/thumbs/3.jpg',
			template: '<div class="og-details"><h3>Sea lettuce</h3><p>Bell pepper eggplant water spinach bell pepper radicchio kale artichoke earthnut pea beet greens carrot celtuce peanut radish mustard jícama tomato bamboo shoot quandong.</p><a href="#">Visit website</a></div>'
		}];
	});
})();