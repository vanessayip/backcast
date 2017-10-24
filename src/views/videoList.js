var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    let nodes = this.$el.children().children();
    nodes.each((index) => new VideoListEntryView({el: nodes[index], model: this.collection.models[index]}).render());
    // new VideoListEntryView({el: '.video-list div', model: this.collection.models[0]}).render();
    // for (let childNode of this.$el.children().children()) {
    //   new VideoListEntryView({el: '.video-list h5'}).render();
    // }
    // console.log(this.$el.children().children().text())
    // this.$el.children().children().forEach(function(node) {
    //   new VideoListEntryView({el: node}).render();
    // });
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
