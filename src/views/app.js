var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos();
    
    //this.videoList = new VideoListView();
    $('.list').html(this.videoList.render().$el);
    
    
  },


  render: function() {
    this.$el.html(this.template());
    //new creates an instance of VideoPlayerView
    //don't need to assign it to a variable
    //can call a method directly
    
    //passing el into new view, so can reuse the video player view
    //calling render in render instead of initalize to categorize with other renderings
    new VideoPlayerView({el: '.player'}).render();
    new VideoListView({el: '.list'}).render();
    new SearchView({el: '.search'}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
