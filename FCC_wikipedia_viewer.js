$(document).ready(function(){
  var firstClick = true;
  $("#searchButton").click(function(){
    var inputEntryString = document.getElementById("inputEntry").value;
    inputEntryString = inputEntryString.replace(/ /g, "%20");

    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + inputEntryString,
      dataType: "jsonp",
      type: "GET",
      success: function(json) {
        if (firstClick === false) {
          $(".responseEntry").remove();
        }
        else {
          firstClick = false;
        }
        for (i=0; i < 10; i++) {
          $("#results").append("<div class='responseEntry'><button type='button' class='btn btn-default btn-lg btn-block active'><a href='https://en.wikipedia.org/wiki/" + json.query.search[i].title + "' target='_blank' class='customA'>" + "<h4 class='text-left entryTitle'>" + json.query.search[i].title + "</h4>" + "<h4 class='text-left entryDetails'>" + json.query.search[i].snippet + "</h4></a></button></div>");
        };
      }
    });

 });
});
