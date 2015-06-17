define([
	'backbone',
	'jquery',
	'handlebars',
	'models/playlist',
	'text!templates/loading.hbs',
	'text!templates/album.hbs'
], function(Backbone, $, Handlebars, PlaylistModel, loadingTemplate, albumTemplate) {

	var AlbumView = Backbone.View.extend({

		events: {
			'click .track': 'playTrack',
			'click #add-playlist': 'addPlaylist'
		},

		initialize: function() {
			this.listenTo(this.model, 'request', this.loading);
			this.listenTo(this.model, 'change', this.render);
		},

		render: function() {
			var model = this.model.toJSON();
			var template = Handlebars.compile(albumTemplate);
			this.$el.html(template(model));
		},

		loading: function() {
			var template = Handlebars.compile(loadingTemplate);
			this.$el.html(template({}));
		},

		playTrack: function(e) {
			e.preventDefault();
			$('#player').attr({'src': e.currentTarget.attributes.href.value});
			$('#player').trigger('play');
		},

		addPlaylist: function(e) {
			e.preventDefault();
			var dateString = new Date().toISOString();
			var newPlaylistName = "Playlist "+ dateString;
			var newPlaylistTrack = {
			  name: 'dummy track name',
			  artist: 'Some Artist',
			  album: 'Some Album'
			};
			var newPlaylist = new PlaylistModel({name: newPlaylistName});
			newPlaylist.set('tracks', [newPlaylistTrack]);
			this.collection.add(newPlaylist);
			newPlaylist.save();
		}

	});

	return AlbumView;
});
