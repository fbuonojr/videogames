$(document).ready(function() {
    $("#find-game").on("click", function(event) {
        event.preventDefault();

        var game = $("#game-input").val();
        var dashedGame = game.replace(/ /g, "-");
        console.log(dashedGame);

        var queryURL = "https://rawg-video-games-database.p.rapidapi.com/games/" + dashedGame;

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": queryURL,
            "method": "GET",
            // "success": function();
            "headers": {
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "459bb2a183mshc0681ca6ce8d05cp17f108jsnec2b6aceda17"
            }
        }


        var gameSection = $("#gameSection");
        $.ajax(settings).done(function (response) {
            console.log(response);
            
            //empty section for new game results
            gameSection.empty();
            
            //get name from ajax response and append it to section
            var name = response.name;
            var titleH = $("<h1>").text(name);
            gameSection.append(titleH);

            //get background image from ajax response and append it to section
            var image = response.background_image;
            var imageTag = $("<img>");
            imageTag.attr("src", image);
            gameSection.append(imageTag);

            //get esrb rating from ajax response and append it to section
            var rating = response.esrb_rating.name;
            var ratingH = $("<h4>").text("Rated: " + rating);
            gameSection.append(ratingH);
        });
    });
})