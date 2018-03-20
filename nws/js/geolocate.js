/*
 * Returns a promise for the user's position.
 * 
 * Inspired by https://www.codeschool.com/blog/2016/01/08/es2015-and-the-geolocation-api/,
 * and to a lesser extent https://gist.github.com/varmais/74586ec1854fe288d393.
 * 
 * @returns {Promise<string>} position 
 */
function getPosition() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
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
      resolve(position); // returns a Promise object that is resolved with value
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      reject(err); // returns a promise object that is rejected
    }

    var options = {
      enableHighAccuracy: false, // default: false
      timeout: 30000, // default: Infinity
      maximumAge: 10000000 // default: 0
    };
  });
}
