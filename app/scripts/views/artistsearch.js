define([
	'backbone',
	'jquery',
	'handlebars',
	'text!templates/artistsearch.hbs',
	'text!templates/loading.hbs'
], function(Backbone, $, Handlebars, artistSearchTemplate, loadingTemplate) {
	var ArtistSearchView = Backbone.View.extend({

		events: {},

		initialize: function(options) {
			this.model = options.model;
			this.listenTo(this.model, 'all', function() {
				// console.log(arguments);
			});
			this.listenTo(this.model, 'request', this.loading);
			this.listenTo(this.model, 'change', this.render);
		},

		render: function() {
			if (this.model.types === 'artist') {
				var template = Handlebars.compile(artistSearchTemplate);
				this.$el.html(template(this.model.toJSON()));
			}
		},

		loading: function() {
			if (this.model.types === 'artist') {
				var template = Handlebars.compile(loadingTemplate);
				this.$el.html(template());
			}
		}
	});

	return ArtistSearchView;
});
