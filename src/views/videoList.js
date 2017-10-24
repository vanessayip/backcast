var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    let nodes = this.$el.children().children();
    nodes.each((index) => new VideoListEntryView({el: nodes[index], model: this.collection.models[index]}).render());

    return this;
    
  },

  template: templateURL('src/templates/videoList.html')

});
