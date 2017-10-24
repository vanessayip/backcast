var VideoPlayerView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$el.find('.video-player-details h3').text(this.model.get('title'));
    this.$el.find('.video-player-details div').text(this.model.get('description'));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
