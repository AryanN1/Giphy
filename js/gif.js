
$("#addCar").on("click",function(){
console.log("button");
 var button =$("<button>" + $("#car-input").val() + "</button>");
$("#gifButtons").append(button);
button.attr("carButtons", $("#car-input").val());



});
$("#gifButtons").on("click", "button",function() {
    console.log("hit")
      var topics = $(this).attr("carButtons");


      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        topics + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(topics)

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;
          console.log(response.data);

          for (var i = 0; i < results.length; i++) {

            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              var gifDiv = $("<div class='item'>");

              var rating = results[i].rating;

              var p = $("<p>").text("Rating: " + rating);

              var topicsImage = $("<img>");
              topicsImage.attr("src", results[i].images.fixed_height.url);
              //topicsImage.attr("data-still", results[i].images.fixed_height.url);
              //topicsImage.attr("data-animate", results[i].images.fixed_height.url);
              //topicsImage.attr("data-state", still);
              //topicsImage.addclass(gif);
              gifDiv.append(p);
              gifDiv.append(topicsImage);
              $("#cars").prepend(gifDiv);
            }
          }
        });

      $(".gif").on("click", function() {
      var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    
    });
    });
