var text = "";
       
$(document).ready( function() {
  $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
    var html = "";
 
    html += "<h2>" + json.quoteText + "</h2>";
    html += "<br />";
        
    if (json.quoteAuthor !== "") {
      html += "   -- " + json.quoteAuthor;
    } else {
      html += "   -- Unknown"
    }
          
    $("#quoteText").html(html);      
    text = document.getElementById("quoteText").textContent;
  });   

  $("#getQuote").on("click", function() {

    $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
      var html = "";
 
      html += "<h2>" + json.quoteText + "</h2>";
      html += "<br />";
        
      if (json.quoteAuthor !== "") {
        html += "   -- " + json.quoteAuthor;
      } else {
        html += "   -- Unknown"
      }
          
      $("#quoteText").html(html);      
      text = document.getElementById("quoteText").textContent;
    });   
  });    
});

$("a#tweetQuote").click(function() {
	window.open("https://twitter.com/intent/tweet?text=" + text , " " , "width=550,height=450");
});