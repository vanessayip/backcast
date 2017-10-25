var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    var data = {key: 'AIzaSyBugf5SoU1OXxy5gnvjg8wumN3CNPIbOPg', 'part': 'snippet', chart: 'mostPopular', 'q': query};
    this.fetch({data: data});
  },

  parse: function (data) {
    return data.items;
  }

});
