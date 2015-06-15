define([
	'jquery',
	'backbone'
], function($, Backbone) {
	var SearchView = Backbone.View.extend({
		
		events: {
			'click #submit': 'search',
			'submit form': 'search',
			'change input[name=type]': 'selectType'
		},

		initialize: function(options) {
			this.model = options.model;
		},

		search: function(ev) {
			ev.preventDefault();
			this.model.query = $('#search-query').val();
			this.model.fetch();
		},

		selectType: function(ev) {
			if ($('#type-select').is(':checked')) {
				this.model.types = 'album';
			} else {
				this.model.types = 'artist';
			}
		}

	});

	return SearchView;

});
