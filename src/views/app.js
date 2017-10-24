var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos();
    
    this.videoList = new VideoListView();
    $('.list').html(this.videoList.render().$el);
    
    
  },


  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView({el: '.player'}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
