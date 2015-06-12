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
			this.model = searchModel;
		},

		search: function(ev) {
			ev.preventDefault();
			searchModel.query = $('#search-query').val();
			searchModel.fetch();
		},

		selectType: function(ev) {
			if ($('#type-select').is(':checked')) {
				searchModel.types = 'album';
			} else {
				searchModel.types = 'artist';
			}
		}

	});

	return SearchView;

});
