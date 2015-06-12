define([
	'backbone',
	'jquery',
	'handlebars',
	'text!templates/artistsearch.hbs',
	'text!templates/loading.hbs'
], function(Backbone, $, Handlebars, artistSearchTemplate, loadingTemplate) {
	var ArtistSearchView = Backbone.View.extend({

		events: {},

		initialize: function() {
			this.listenTo(searchModel, 'all', function() {
				// console.log(arguments);
			});
			this.listenTo(searchModel, 'change', this.render);
		},

		render: function() {
			if (searchModel.types === 'artist') {
				var template = Handlebars.compile(artistSearchTemplate);
				this.$el.html(template(searchModel.toJSON()));
			}
		},

		loading: function() {
			if (searchModel.types === 'artist') {
				var template = Handlebars.compile(loadingTemplate);
				this.$el.html(template());
			}
		}
	});

	return ArtistSearchView;
});
