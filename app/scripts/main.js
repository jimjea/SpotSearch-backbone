/*global SpotSearch, $*/


window.SpotSearch = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    window.searchModel = new SearchModel();
    window.searchModel.fetch();
    window.searchView = new SearchView({
        el: ('#search-container')
    });
    window.albumSearchView = new AlbumSearchView({
        el: ('#album-search-container')
    });

});
