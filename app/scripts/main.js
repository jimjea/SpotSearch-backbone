/*global SpotSearch, $*/

'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        handlebars: '../bower_components/handlebars/handlebars',
        text: '../bower_components/requirejs-text/text'
    }
});

require([
    'jquery',
    'backbone',
    'models/search',
    'views/search',
    'views/albumsearch',
    'views/artistsearch'
], function($, Backbone, SearchModel, SearchView, AlbumSearchView, ArtistSearchView) {
    $(document).ready(function () {
        window.searchModel = new SearchModel();
        window.searchModel.fetch();
        window.searchView = new SearchView({
            el: ('#search-container')
        });
        window.albumSearchView = new AlbumSearchView({
            el: ('#album-search-container')
        });
        window.artistSearchView = new ArtistSearchView({
            el: ('#artist-search-container')
        });
    });

});

// window.SpotSearch = {
//     Models: {},
//     Collections: {},
//     Views: {},
//     Routers: {},
//     init: function () {
//         'use strict';
//         console.log('Hello from Backbone!');
//     }
// };
