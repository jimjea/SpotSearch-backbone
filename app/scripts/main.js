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
});
