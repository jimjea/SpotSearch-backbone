define([
	'backbone'
], function(Backbone) {

	var Playlist = Backbone.Model.extend({

		initialize: function() {

		},

		validate: function(attrs, options) {

		},

		parse: function(response, options) {
			return response;
		}

	});

	return Playlist;
});
