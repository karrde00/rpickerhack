
function getLocation(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position){
  longitude = position.coords.longitude;
  latitude = position.coords.latitude;

  console.log(longitude + ',' +  latitude)
  $('form').append("<input type='hidden' name='latitude' value="+latitude+"><input type='hidden' name='longitude' value="+longitude+">");
}
