var Archive = require("./../js/archive.js").archiveModule;

var displayHeadlines = function(object) {
  $(".patience").hide();
  $("#headline").append(`<h4><a href="${object.web_url}">${object.headline.main}</a></h4>`);
  object.multimedia.forEach(function(photo) {
    if (photo.width === 190) {
      $("#headline").append(`<a href="${object.web_url}"><img src="http://www.nytimes.com/${photo.url}"></a>`);
    }
  });
    $("#headline").append(`<p>${object.lead_paragraph ? object.lead_paragraph : ""}</p>`);
};

var totalHeadlines = function(hits) {
  $("#total-headlines").text(`There were ${hits} articles this month.`);
};

$(function(){
  $("#date").click(function(event){
    event.preventDefault();
    $(".patience").show();
    $("#headline").empty();
    $("#total-headlines").text("");
    var year = $("#year").val();
    var month = $("#month").val();
    currentArchive = new Archive(month, year);
    currentArchive.headlines(displayHeadlines, totalHeadlines);
  });
});
