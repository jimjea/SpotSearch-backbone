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
    'models/album',
    'router/router'
], function($, Backbone, SearchModel, AlbumModel, Router) {
    $(document).ready(function () {
        window.spotapp = {
            models: {},
            router: {}
        };

        spotapp.models.searchModel = new SearchModel();
        spotapp.models.albumModel = new AlbumModel();

        spotapp.router = new Router({
            searchModel: spotapp.models.searchModel,
            albumModel: spotapp.models.albumModel
        });

        Backbone.history.start();
        
    });

});
