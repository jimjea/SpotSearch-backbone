define([
	'models/search'
], function(SearchModel) {
	describe('Search Model', function() {
		beforeEach(function() {
			this.searchModel = new SearchModel();
		});

		it('should update the url whren query is changed', function() {
			this.searchModel.query = 'gas';
			this.searchModel.types = 'album';
			var url = this.searchModel.url();
			expect(url).to.equal('https://api.spotify.com/v1/search?q=gas&type=album');
		});
	});
});

