define([
	'backbone',
	'jquery',
	'handlebars',
	'text!templates/albumsearch.hbs',
	'text!templates/loading.hbs'
], function(Backbone, $, Handlebars, albumSearchTemplate, loadingTemplate) {
	var AlbumSearchView = Backbone.View.extend({

		events: {},

		initialize: function() {
			this.listenTo(this.model, 'all', function() {
				// console.log(arguments);
			});
			this.listenTo(this.model, 'request', this.loading);
			this.listenTo(this.model, 'change', this.render);
		},

		render: function() {
			if (this.model.types === 'album') {
				var template = Handlebars.compile(albumSearchTemplate);
				this.$el.html(template(this.model.toJSON()));
			}
		},

		loading: function() {
			if (this.model.types === 'album') {
				var template = Handlebars.compile(loadingTemplate);
				this.$el.html(template());
			}
		}
	});

	return AlbumSearchView;

});
