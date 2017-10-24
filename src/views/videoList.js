var VideoListView = Backbone.View.extend({

  initialize: function() {
    // this.collection.on('sync', this.render, this);
    // console.log(this);
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // this.collection.forEach(function(item) {
    //   let video = new VideoListEntryView({model: item});
    //   video.render();
    // });
    // for (let i = 0; i < this.collection.models.length; i++) {
    //   this.$el.append(this.collection.models[i].render());
    // }
    return this;
    
  },

  template: templateURL('src/templates/videoList.html')

});
