var userLocation, radius;
var rank;

// this.exploreInputs = exploreInputs;


//set up temboo session
var tsession = require("temboo/core/temboosession");
var session = new tsession.TembooSession("samkreter", "Rpicker", "1b32c6ff7d394e29885041b925f4f458");
//get foursquare library 
var Foursquare = require("temboo/Library/Foursquare/Venues");
//set up input varibles
var exploreChoreo = new Foursquare.Explore(session);
var exploreInputs = exploreChoreo.newInputSet();



// User inputs
module.exports.saveOptions = function saveOptions(data,callback){
  var city = data.city;
  var state = data.state;
  var latitude = data.latitude;
  var longitude = data.longitude;
  rank = data.rating;
  console.log(latitude);
  console.log(longitude);
  userLocation = city + ', ' + state; 
  console.log(userLocation);  
  if (radius === null){
    radius = 0;
  } else{
    radius = data.radius;
  }

 execution(userLocation, radius);
 callback({name: names,rating: rating});
}


// Set inputs
function execution (location, radius) {
  var Mradius = radius * 1609.34;
  exploreInputs.set_ClientSecret("CGF0CXUPEOMXPVLF1OVLITXQWJRETO4SI5OOAVGR0DM441EM");
  if(latitude = undefined){  
    exploreInputs.set_Latitude(latitude);
    exploreInputs.set_Longitude(longitude);
    exploreInputs.set_Radius(Mradius);
  }
  else{
  	exploreInputs.set_Near(location);
  }
  exploreInputs.set_ClientID("0Y4WX42SOV1NXZOC2AGSUZAUOKQ1LVYDIK4WAMI5UK0OG3LU");

  exploreInputs.set_Limit(500);
  exploreChoreo.execute(
    exploreInputs,
    function(results){
      inspectObj(JSON.parse(results.get_Response()));
    },
    
    function(error){
      console.log(error.type); 
      console.log(error.message);
    });
}

var names = rating = [];
function inspectObj(obj){
   var length = obj.response.groups[0].items.length;
   var vens = obj.response.groups[0].items;   
 
    
   for(var i=0;i<length;i++){
     if(vens[i].venue.rating >= rank){
     names.push(vens[i].venue.name);
     rating.push(vens[i].venue.rating);
     }

   }
   for(var i=0; i<names.length; i++){
   	  console.log(names[i]);
   	  console.log(rating[i]);
   }
};