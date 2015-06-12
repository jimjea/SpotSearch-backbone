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
			this.listenTo(searchModel, 'all', function() {
				// console.log(arguments);
			});
			this.listenTo(searchModel, 'request', this.loading);
			this.listenTo(searchModel, 'change', this.render);
		},

		render: function() {
			if (searchModel.types === 'album') {
				var template = Handlebars.compile(albumSearchTemplate);
				this.$el.html(template(searchModel.toJSON()));
			}
		},

		loading: function() {
			if (searchModel.types === 'album') {
				var template = Handlebars.compile(loadingTemplate);
				this.$el.html(template());
			}
		}
	});

	return AlbumSearchView;

});

