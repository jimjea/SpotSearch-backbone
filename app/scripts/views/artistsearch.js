var ArtistSearchView = Backbone.View.extend({

	events: {},

	initialize: function() {
		this.listenTo(window.searchModel, 'all', function() {
			// console.log(arguments);
		});
		this.listenTo(window.searchModel, 'change', this.render);
	},

	render: function() {
		if (window.searchModel.types === 'artist') {
			var artistSearchTemplate = $('#artist-search-template').html();
			var template = Handlebars.compile(artistSearchTemplate);
			this.$el.html(template(searchModel.toJSON()));
		}
	},

	loading: function() {
		if (window.searchModel.types === 'artist') {
			var loadingTemplate = $('#loading-template').html();
			var template = Handlebars.compile(loadingTemplate);
			this.$el.html(template());
		}
	}
});
