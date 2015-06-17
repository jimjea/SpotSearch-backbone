define([
	'backbone',
	'models/playlist'
], function (Backbone, Playlist) {
	var PlaylistCollection = Backbone.Collection.extend({
		model: Playlist,

		initialize: function() {
			this.on('all', function() {
				console.log(arguments);
			});
		},

		localStore: new Backbone.LocalStorage('playlist-localstorage'),

		validate: function(attrs, options) {},

		parse: function(reponse, options) {
			return response;
		}
	});

	return PlaylistCollection;

});