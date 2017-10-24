var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videoPlayer = new VideoPlayerView();
    this.videoList = new VideoListView();
    this.render();
    
  },


  render: function() {
    this.$el.html(this.template());
    $('.player').html(this.videoPlayer.render().$el);
    $('.list').html(this.videoList.render().$el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
