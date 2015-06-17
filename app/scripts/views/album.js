//album view

define([
    'jquery',
    'backbone',
    'handlebars',
    'models/playlist',
    'text!templates/album.hbs',
    'text!templates/loading.hbs'
], function($, Backbone, Handlebars, PlaylistModel, albumViewTemplate, loadingTemplate) {

    var AlbumView = Backbone.View.extend({

        events: {
            'click .track': 'playTrack',
            'click #add-playlist' : 'addPlaylist'
        },
        initialize: function() {
            this.listenTo(this.model, 'request', this.loading);
            this.listenTo(this.model, 'change', this.render);
        },
        render: function() {
            var model = this.model.toJSON();
            var template = Handlebars.compile(albumViewTemplate);
            this.$el.html(template(model));
        },
        loading: function() {
            var template = Handlebars.compile(loadingTemplate);
            this.$el.html(template({}));
        },
        playTrack: function(ev) {
            ev.preventDefault();
            $('#player').attr('src', ev.currentTarget.attributes.href.value);
            $('#player').trigger('play');
            //update player url & play
        },
        addPlaylist: function(ev) {
            ev.preventDefault();
            var dateString = new Date().toISOString();
            var newPlaylistName = "Playlist "+ dateString;
            var newPlaylistTrack = {
              name: 'dummy track name',
              artist: 'Some Artist',
              album: 'Some Album'
            };
            var newPlaylist = new PlaylistModel({name: newPlaylistName});
            newPlaylist.set('tracks', [newPlaylistTrack]);
            this.collection.add(newPlaylist);
            newPlaylist.save();
        }

    });

    return AlbumView;

});
