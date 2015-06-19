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
            'click .add-track': 'addToPlaylist',
            'click #submit-name': 'createPlaylist'
        },
        initialize: function() {
            this.listenTo(this.model, 'request', this.loading);
            this.listenTo(this.model, 'change', this.render);
        },
        render: function() {
            var model = this.model.toJSON();
            model.playlists = this.collection.toJSON();
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
            var newPlaylistName = "Playlist " + dateString;
            var newPlaylistTrack = {
                name: 'dummy track name',
                artist: 'Some Artist',
                album: 'Some Album'
            };
            var newPlaylist = new PlaylistModel({
                name: newPlaylistName
            });
            newPlaylist.set('tracks', [newPlaylistTrack]);
            this.collection.add(newPlaylist);
            newPlaylist.save();
        },
        addTrack: function(){

          var trackToAdd = {
            'artist' : this.model.get('artists')[0].name,
            'album' : this.model.get('name'),
            'name' : this.model.get('tracks').items[this.selectedTrackIndex].name,
            'trackURL' : this.model.get('tracks').items[this.selectedTrackIndex].preview_url,
            'imageURL' : this.model.get('images')[0].url
          }
          this.currentPlaylist.push('tracks', trackToAdd);
          console.log(this.currentPlaylist);
          this.collection.add(this.currentPlaylist);
          this.currentPlaylist.save();
        },
        addToPlaylist: function(ev) {
            ev.preventDefault();
            this.selectedPlaylistId = $(ev.currentTarget).parents('tr').find('select').val();
            this.selectedTrackNumber = $(ev.currentTarget).parents('tr').attr('id');
            this.selectedTrackNumber = Number(this.selectedTrackNumber.replace('track-number-', ''));
            this.selectedTrackIndex = this.selectedTrackNumber - 1;
            if (this.selectedPlaylistId === 'newplaylist') {
                $('#name-new-playlist').modal();
                this.currentPlaylist = new PlaylistModel();
            } else {
                this.currentPlaylist = this.collection.get(this.selectedPlaylistId);
                this.addTrack();
            }
            this.selectedPlaylistId = $(ev.currentTarget).replaceWith('added');
        },
        createPlaylist: function(ev) {
          var newPlaylistName = $('#name-playlist').val();
          this.currentPlaylist.set('name', newPlaylistName);
          this.currentPlaylist.set('tracks', []);
          $('#name-new-playlist').modal('hide');
          $('body').removeClass('modal-open');
          $('.modal-backdrop').remove();
          this.addTrack();
        }

    });

    return AlbumView;

});
