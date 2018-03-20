if ("geolocation" in navigator) {
  overlay.startOverlay(); // initializes overlay and spinner
  console.log("geolocation is available");
  navigator.geolocation.getCurrentPosition(success, error, options);
} else {
  console.log("geolocation IS NOT available");
}

function success(position) {
  console.log(
    "Your current position is:" +
      "\nlatitude:  " +
      position.coords.latitude +
      "\nlongitude: " +
      position.coords.longitude +
      "\naccuracy:  " +
      position.coords.accuracy +
      " m" +
      "\naltitude:  " +
      position.coords.altitude +
      " +/- " +
      position.coords.altitudeAccuracy +
      "\nheading:   " +
      position.coords.heading +
      "\nspeed:     " +
      position.coords.speed +
      "\ntimestamp: " +
      position.timestamp
  );

  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

var options = {
  enableHighAccuracy: true, // default: false
  timeout: 5000, // default: Infinity
  maximumAge: 0 // default: 0
};
