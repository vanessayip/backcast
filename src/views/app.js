var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.videos.search();
    this.render();
    
  },


  render: function() {
    this.$el.html(this.template());
    new SearchView({el: '.search', collection: this.videos}).render();
    new VideoListView({el: '.list', collection: this.videos}).render();
    new VideoPlayerView({el: '.player', collection: this.videos}).render(this.videos.models[0]);

    //new creates an instance of VideoPlayerView
    //don't need to assign it to a variable
    //can call a method directly
    
    //passing el into new view, so can reuse the video player view
    //calling render in render instead of initalize to categorize with other renderings

    return this;
  },

  template: templateURL('src/templates/app.html')

});
