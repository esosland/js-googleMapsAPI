// $( document ).ready(function() {
//   $('#initialize').click(initialize);
// });
//
// function initialize() {
//   var mapProp = {
//     center:new google.maps.LatLng(51.508742, -0.120850),
//     zoom: 7,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//   var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
// }
// // google.maps.event.addDomListener(window, 'load', initialize);
//
// function loadScript()
// {
//   var script = document.createElement("script");
//   script.type = "text/javascript";
//   script.src = "http://maps.googleapis.com/maps/api/js?key=&sensor=false&callback=initialize";
//   document.body.appendChild(script);
// }
//
// window.onload = loadScript;

$( document ).ready(function() {
  $('#locateUser').click(locateUser);
});

//google maps functions
function locateUser() {
  // If the browser supports the Geolocation API
  if (navigator.geolocation){
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000 // 10 seconds
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
}
// this is the success callback from telling the navigator (your browser) to get the current user's position
// we do this on line 13 above. We pass in a function to call on success, a function to call on error, and some options to tell the geolocation api how we want it to run.
// on successfully locating the user, geolocationSuccess() gets called automatically, and it is passed the user's position as an argument.
// on error, geolocationError is called.
function geolocationSuccess(position) {
  // here we take the `position` object returned by the geolocation api
  // and turn it into google maps LatLng object by calling the google.maps.LatLng constructor function
  // it 2 arguments: one for latitude, one for longitude.
  // You could refactor this section to pass google maps your own coordinates rather than using geolocation for the user's current location.
  // But you must use coordinates to use this method.

  // var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  // Draw the map - you have to use 'getElementById' here.
  console.log("right before creating map");
  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
  // Place the marker
  // new google.maps.Marker({
  //   map: mapObject,
  //   position: userLatLng
  // });
}

function geolocationError(positionError) {
  alert(positionError);
}
$( document ).ready(function() {
    $(window).load(locateUser);
});
