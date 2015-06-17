define([
	'jquery',
	'backbone',
	'views/search',
	'views/albumsearch',
	'views/artistsearch',
	'views/album'
], function($, Backbone, SearchView, AlbumSearchView, ArtistSearchView, AlbumView) {
	var Router = Backbone.Router.extend({

		routes: {
			'': 'homeRoute',
			'search/album/:query': 'albumSearchRoute',
			'search/artist/:query': 'artistSearchRoute',
			'album/:albumid': 'albumViewRoute'

		},

		initialize: function(options) {
			this.searchModel = options.searchModel;
			this.albumModel = options.albumModel;
			this.playlistCollection = options.playlistCollection;

			this.searchView = new SearchView({
				el: $('#search-container'),
				model: this.searchModel,
				router: this
			});

			this.albumSearchView = new AlbumSearchView({
				el: $('#album-search-container'),
				model: this.searchModel
			});

			this.artistSearchView = new ArtistSearchView({
				el: $('#artist-search-container'),
				model: this.searchModel
			});

			this.albumView = new AlbumView({
				el: $('#album-container'),
				model: this.albumModel,
				collection: this.playlistCollection
			})
		},

		homeRoute: function() {},

		clearResults: function() {
			$('#album-search-container').empty();
			$('#artist-search-container').empty();
			this.searchModel.attributes = {};
		},

		albumSearchRoute: function(query) {
			this.clearResults();
			this.searchModel.query = query;
			$('#search-query').val(query);
			this.searchModel.types = 'album';
			this.searchModel.fetch();
		},

		artistSearchRoute: function(query) {
			this.clearResults();
			this.searchModel.query = query;
			$('#search-query').val(query);
			this.searchModel.types = 'artist';
			this.searchModel.fetch();
		},

		albumViewRoute: function(albumId) {
			console.log(albumId)
			this.clearResults();
			this.albumModel.albumId = albumId;
			this.albumModel.fetch({
				reset: true
			});
		}

	});

	return Router;

});
