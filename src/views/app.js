var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.video = new Video(exampleVideoData[1]);
    this.videos = new Videos(exampleVideoData); 
    this.render();

    this.videos.on('select', (model) => new VideoPlayerView({el: '.player', model: model}).render());



  },


  render: function() {
    this.$el.html(this.template());

    new SearchView({el: '.search'}).render();
    new VideoPlayerView({el: '.player', model: this.video}).render();
    new VideoListView({el: '.list', collection: this.videos}).render();

    //new creates an instance of VideoPlayerView
    //don't need to assign it to a variable
    //can call a method directly
    
    //passing el into new view, so can reuse the video player view
    //calling render in render instead of initalize to categorize with other renderings


    return this;
  },

  template: templateURL('src/templates/app.html')

});
