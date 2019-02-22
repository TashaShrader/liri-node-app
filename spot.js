if (process.argv[2] === "song-title") {
    
.request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx');
.then(function(data) {
  console.log(data);
})
}