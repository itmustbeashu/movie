var updateCallback = function(data){
    
    const apiKey = '611fd8da';
    const defaultImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Fpressroom%2Fbrand-guidelines%2F&psig=AOvVaw0ZQtlZP4Vg6oLvqOVZX--4&ust=1650368779090000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCZ___EnfcCFQAAAAAdAAAAABAD'
    var value = data.newValue;
    console.log("after value ");
    console.log("value : "+value);
    var line = value[value.length -1];
    console.log("line : "+line);
    var movieName = line.text;
    if (line.source.toLowerCase()==="visitor"){
   
    var url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`
 
   
    
    fetch(url)
    .then(function(response){
  
    return response.json();
    }
    ).then(function(res){
     
    document.getElementById("title").innerHTML = res.Title;
    document.getElementById("actor").innerHTML = res.Actors;
    document.getElementById("genre").innerHTML = res.Genre;
    document.getElementById("director").innerHTML = res.Director;
    document.getElementById("language").innerHTML = res.Language;
    document.getElementById("poster").src = res.Poster?res.Poster:defaultImage;

    
    
    }).catch(function(error){
    console.log("Error Message : "+error);
    })
    }
    };
    
    
    
    var notifyWhenDone = function(error) {
    if (err){
    console.log("Error Occured in notify : "+err);
    }
    
    errorMessage.innerHTML = "Unable to find the movie";
    };
    
    var chatText = "chatTranscript.lines";

    lpTag.agentSDK.init({});
    lpTag.agentSDK.bind(chatText, updateCallback, notifyWhenDone);
