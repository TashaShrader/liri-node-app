# Liri-Node-App

## Description
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

**Retrived data from**
* Node-Spotify-Api
* Axios
* OMDB Api
* BandsInTown Api
* Moment
* DotEnv


**To use App you will need to install a few things in your terminal..**
* npm init -y
* npm-spotify-api
* npm install moment
* npm install axios
* npm install dotenv

## How It Works!

**I have created 2 prompts to navigate through my project.**
* Movie, Concert, Song
* User Input

**First you have the options of searching a Movie, Concert, or Song.**
* Movie information is sourced from the OMDB Api.
* Concert information is sourced from the BandsInTown Api.
* Song information is sourced from Spotify Api.
* To select which source use up and down arrow keys, and press enter to select.
![categorys]
(/images/categorys.png)
Format: ![Alt Text](url)

**You are then prompted with a question**
* User will type in the Movie Name, Band Name, or Song Name
* Press enter to submit
![question]
(/images/question.png)
Format: ![Alt Text](url)
## Results

**When you search a Concert:**
* Name of the venue
* Venue location
![concert]
(/images/concert.png)
Format: ![Alt Text](url)
**When you search a Movie your:**
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
  ![movies]
(/images/movies.png)
Format: ![Alt Text](url)
**When you search a Song your:**
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
