var topic = ["British Shorthair", "Siamese", "Bengal", "Russian Blue", "Scottish Fold", "Maine Coon"];
var apiKey = "km5YcBR9PTSmFAVwqgDUQrSJgGHmP2Gu";
var searchTerm; 

function generateBtns() {
    for (var i = 0; i < topic.length; i++) {
        $("#btnHolder").append("<button class='search'>" + topic[i] + "</button>");
    }
}

//call the giphy api
function getGIFS() {
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&limit=10&api_key=" + apiKey
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        //add the images to the gifHolder div and att their attributes
        for (var i = 0; i < response.data.length; i++) {
            $("#gifHolder").append("<img src='" + response.data[i].images.fixed_height_still.url + "' data-still='" + response.data[i].images.fixed_height_still.url + "' data-animate='" + response.data[i].images.fixed_height.url + "'>");

        }
    });
}    

//create the default buttons on page load
$(document).ready(function() {
    console.log("document loaded");
    generateBtns();
});

//create new search buttons
$(document).on("click", "#submitBtn", function() {
    event.preventDefault();
    if ($("#userInput").val().trim() != '') {
        $("#btnHolder").append("<button class='search'>" + $("#userInput").val().trim() + "</button>"); 
    }    
});

//search button clicked
$(document).on("click", ".search", function() {
    searchTerm = $(this).text();
    getGIFS();
});

//play and pause gif when clicked
$(document).on("click", "img", function() {
    if ($(this).attr("src") === $(this).attr("data-still")) {
        $(this).attr("src", $(this).attr("data-animate"))
    }
    else {
        $(this).attr("src", $(this).attr("data-still"))
    }
});
