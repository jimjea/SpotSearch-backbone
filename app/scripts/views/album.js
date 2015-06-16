define([
	'backbone',
	'jquery',
	'handlebars',
	'text!templates/loading.hbs',
	'text!templates/album.hbs'
], function(Backbone, $, Handlebars, loadingTemplate, albumTemplate) {

	var AlbumView = Backbone.View.extend({

		events: {
			'click .track': 'playTrack'
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
		}

	});

	return AlbumView;
});
