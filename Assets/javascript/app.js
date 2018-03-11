var apiKey = "km5YcBR9PTSmFAVwqgDUQrSJgGHmP2Gu"
 
function getGIFS() {

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + $(this).text().trim() + "&limit=10&api_key=" + apiKey

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
}    


$(document).on("click", "#submitBtn", function() {

})

