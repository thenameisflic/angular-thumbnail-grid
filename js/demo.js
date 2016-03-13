(function () {
	angular.module('demo-angular-thumbnail-grid', ['angular-thumbnail-grid'])
	.controller('DemoCtrl', function () {
		var vm = this;

		vm.images = [{
			largesrc: 'images/1.jpg',
			title: 'WiGo',
			description: 'Plataforma de gerenciamento de tempo.',
			thumbnailsrc: 'images/thumbs/1.jpg',
			template: '<div class="og-details"><h3>Dandelion horseradish</h3><p>Plataforma de gerenciamento de tempo.</p><a href="#">Visit website</a></div>'
		}, {
			largesrc: 'images/2.jpg',
			title: 'Bloom',
			description: 'A melhor empresa de software!',
			thumbnailsrc: 'images/thumbs/2.jpg',
			template: '<div class="og-details"><h3>Dandelion horseradish</h3><p>Plataforma de gerenciamento de tempo.</p><a href="#">Visit website</a></div>'
		}, {
			largesrc: 'images/3.jpg',
			title: 'Rainbow Night',
			description: 'Um ótimo jogo de plataforma.',
			thumbnailsrc: 'images/thumbs/3.jpg',
			template: '<div class="og-details"><h3>Dandelion horseradish</h3><p>Plataforma de gerenciamento de tempo.</p><a href="#">Visit website</a></div>'
		}];
	});
})();