define([
	'jquery',
	'backbone',
	'views/search',
	'views/albumsearch',
	'views/artistsearch'
], function($, Backbone, SearchView, AlbumSearchView, ArtistSearchView) {
	var Router = Backbone.Router.extend({

		routes: {
			'': 'homeRoute',
			'search/album/:query': 'albumSearchRoute',
			'search/artist/:query': 'artistSearchRoute'
		},

		initialize: function(options) {
			this.model = options.searchModel;

			this.searchView = new SearchView({
				el: $('#search-container'),
				model: this.model,
				router: this
			});

			this.albumSearchView = new AlbumSearchView({
				el: $('#album-search-container'),
				model: this.model
			});

			this.artistSearchView = new ArtistSearchView({
				el: $('#artist-search-container'),
				model: this.model
			})
		},

		homeRoute: function() {},

		clearResults: function() {
			$('#album-search-container').empty();
			$('#artist-search-container').empty();
			this.model.attributes = {};
		},

		albumSearchRoute: function(query) {
			this.clearResults();
			this.model.query = query;
			// $('#search-query').val(query);
			this.model.types = 'album';
			this.model.fetch();
		},

		artistSearchRoute: function(query) {
			this.clearResults();
			this.model.query = query;
			// $('#search-query').val(query);
			this.model.types = 'artist';
			this.model.fetch();
		}

	});

	return Router;

});
