define([
	'backbone'
], function(Backbone) {

	var AlbumModel = Backbone.Model.extend({

		url: function() {
			return 'https://api.spotify.com/v1/albums/' + this.albumId;
		},

		initialize: function() {
			this.albumId = '52PLNrXUMtPUZwcueV75J1';
		},

		validate: function(attrs, options) {},

		parse: function(response, options) {
			return response;
		}
	
	});

	return AlbumModel;

	
});