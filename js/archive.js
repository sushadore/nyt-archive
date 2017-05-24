var apiKey = require("./../.env").apiKey;

function Archive(month, year) {
  this.month = month;
  this.year = year;
}

Archive.prototype.headlines = function(displayHeadlines, totalHeadlines) {
  $.get(`http://api.nytimes.com/svc/archive/v1/${this.year}/${this.month}.json?api-key=${apiKey}`).then(function(query) {
    query.response.docs.forEach(function(object) {
      displayHeadlines(object);
    });
    totalHeadlines(query.response.meta.hits);
  }).fail(function(query) {
    $(".patience").hide();
    $("#headline").append(`<h1>${query.statusText}!!</h1>`);
  });
};

exports.archiveModule = Archive;
