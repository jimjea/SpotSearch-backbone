define([
	'backbone'
], function(Backbone) {
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
			window.searchModel.query = $('#search-query').val();
			window.searchModel.fetch();
		},

		selectType: function(ev) {
			if ($('#type-select').is(':checked')) {
				window.searchModel.types = 'album';
			} else {
				window.searchModel.types = 'artist';
			}
		}

	});

})

