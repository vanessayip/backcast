var SearchView = Backbone.View.extend({
  events: {
    'click .btn': 'submitSearch',
    'keyup': 'processEnter'
  }, 

  submitSearch: function () {
    this.collection.search($('.form-control').val());
    $('.form-control').val('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  processEnter: function (e) {
    if (e.which === 13) {
      this.submitSearch();
    }
  },

  template: templateURL('src/templates/search.html')

});
