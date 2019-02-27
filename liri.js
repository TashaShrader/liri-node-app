require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      message: "what would you like to search?",
      choices: ["movie", "concert", "song"],
      name: "search"
    },
    {
      type: "input",
      message: "name that search?",
      name: "name"
    },

  ])
  .then(function (inquirerResponse) {
    if (inquirerResponse.search === "movie") {
      var movieTitle = inquirerResponse.name;
      var queryUrl = "http://www.omdbapi.com/?t=" + movieTitle + "&apikey=b3eb9e86";
      axios.get(queryUrl)
        .then(function (response) {
          console.log("\n\nThe movie's Title is: " + response.data.Title);
          console.log("The movie came out in: " + response.data.Year);
          console.log("The movie's IMDB rating is: " + response.data.imdbRating);
          console.log("The movie's Rotten Tomatoes rating is: " + response.data.Ratings[1]);
          console.log("The movie was filmed in: " + response.data.Country);
          console.log("The movie language: " + response.data.Language);
          console.log("The plot of the move: " + response.data.Plot);
          console.log("The movie Actors: " + response.data.Actors);
        })
    }

    //.slice(3).join(" ")
    if (inquirerResponse.search === "concert") {
  var bandTitle = inquirerResponse.name;
      var queryUrl = "https://rest.bandsintown.com/artists/" + bandTitle + "/events?app_id=node";
      axios.get(queryUrl)
        .then(function (response) {
          console.log("Concert venue: " + response.data[0].venue.name);
          console.log("Concert city: " + response.data[0].venue.city);
          console.log("Concert date: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
        })


    }

    if (inquirerResponse.search === "song") {
      
      var songTitle = inquirerResponse.name;
      spotify.search({ type: 'track', query: songTitle },
        function (err, data) {
          if (!songTitle) {
            songTitle = "the sign";
            console.log("the sign");
          }
          if  (err) {
            console.log(err);
          }
          else {
          console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
          console.log("Song name: " + data.tracks.items[0].name);
          console.log("Spotify link: " + data.tracks.items[0].external_urls.spotify);
          console.log("Album nae: " + data.tracks.items[0].album.name);
          }
        });
  
    }

  
})
