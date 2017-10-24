var VideoPlayerView = Backbone.View.extend({
  // el: '.player',

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
