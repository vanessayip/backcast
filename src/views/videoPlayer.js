var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('select', this.render, this);
    this.collection.on('sync', this.render, this);
  }, 
  
  render: function(e) {
    if (e.length > 1) {
      this.$el.html(this.template(e.models[0].attributes));
    } else {
      this.$el.html(this.template(e.attributes));
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
