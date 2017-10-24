var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.entry1 = new VideoListEntryView();
    this.entry2 = new VideoListEntryView();
    this.entry3 = new VideoListEntryView();
    this.entry4 = new VideoListEntryView();
    this.entry5 = new VideoListEntryView();
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log(this.$el.find('.video-list').children().each((index) => console.log(e)));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
