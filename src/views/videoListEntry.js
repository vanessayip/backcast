var VideoListEntryView = Backbone.View.extend({
  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    // this.$el.find('.video-list-entry-title').text(this.model.get('snippet').title);
    // this.$el.find('.video-list-entry-detail').text(this.model.get('snippet').description);
    return this;
  },
  
  handleClick: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
