
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964',
                '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

function randomQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function( response ) {
            $("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
                response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
            $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
                ' (' + response.quoteAuthor + ')');

            var color = Math.floor(Math.random() * colors.length);
            $("html body").animate({
                backgroundColor: colors[color],
                color: colors[color]
            }, 1000);
            $(".btn").animate({
                backgroundColor: colors[color]
            }, 1000);
        }
    });
}

$(function() {
    randomQuote();
});

$("button").click(function(){
    randomQuote();
});