$(document).ready(function() {
    getQuote();
});

$(document).on('click', '.getQuote', function(event) {
    event.preventDefault();
    getQuote();
});

$(document).on('click', '.twitterShare', function(event) {
    event.preventDefault();
    generateTweetShareLink($('.quoteText').text());
});

function updateQuote(quote) {
    $('.quoteText').text(quote.quoteText);
    $('.quoteAuthor').attr('href', quote.quoteLink);
    $('.quoteAuthor').text(quote.quoteAuthor);
}

function getQuote() {
    $.ajax({
        url: 'http://api.forismatic.com/api/1.0/',
        type: 'POST',
        dataType: 'jsonp',
        data: {
            "method": 'getQuote',
            "key": 1,
            "format": 'jsonp',
            "lang": 'en',
            "jsonp": 'updateQuote'
        },
    });
}

function generateTweetShareLink(text) {
  var width  = 575,
      height = 400,
      left   = ($(window).width()  - width)  / 2,
      top    = ($(window).height() - height) / 2,
      url    = "https://twitter.com/share?url=" + location.href + "&text=" + text,
      opts   = 'status=1' +
               ',width='  + width  +
               ',height=' + height +
               ',top='    + top    +
               ',left='   + left;

  window.open(url, 'twitter', opts);
}
