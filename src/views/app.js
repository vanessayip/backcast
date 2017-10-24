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
    return this;
  },

  template: templateURL('src/templates/app.html')

});
