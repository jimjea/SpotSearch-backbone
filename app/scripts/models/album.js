define([
	'backbone'
], function(Backbone) {

	url: function() {
		return 'https://api.spotify.com/v1/albums/' + this.albumId;
	},

	initialize: function() {
		this.albumId = '';
	},

	validate: function(attrs, options) {},

	parse: function(response, options) {
		return reponse;
	}
	
});