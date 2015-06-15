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
], function($, Backbone, SearchModel) {
    $(document).ready(function () {
        window.spotapp = {
            models: {},
            router: {}
        };

        spotapp.models.searchModel = new SearchModel();
        spotapp.router = new Router({
            searchModel: spotapp.models.searchModel;
        });

        Backbone.history.start();
    });

});
