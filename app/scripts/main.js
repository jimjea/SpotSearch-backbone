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
        text: '../bower_components/requirejs-text/text',
        localstorage: '../bower_components/Backbone.localStorage/backbone.localStorage'
    }
});

require([
    'jquery',
    'backbone',
    'localstorage',
    'models/search',
    'models/album',
    'collections/playlists'
    'router/router'
], function($, Backbone, localStorage, SearchModel, AlbumModel, PlaylistCollection, Router) {
    $(document).ready(function () {
        window.spotapp = {
            models: {},
            router: {},
            collections: {}
        };

        spotapp.models.searchModel = new SearchModel();
        spotapp.models.albumModel = new AlbumModel();
        spotapp.collections.playlistCollection = new PlaylistCollection()

        spotapp.router = new Router({
            searchModel: spotapp.models.searchModel,
            albumModel: spotapp.models.albumModel,
            playlistCollection: spotapp.collections.playlistCollection 
        });

        Backbone.history.start();
        
    });

});
