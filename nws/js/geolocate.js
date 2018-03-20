if ("geolocation" in navigator) {
    overlay.startOverlay(); // initializes overlay and spinner
    console.log('geolocation is available');
    navigator.geolocation.getCurrentPosition(success, error, options);
  } else {
    console.log('geolocation IS NOT available');
  }

  function success(position) {
    console.log('Your current position is:' +
      '\nlatitude:  ' + position.coords.latitude +
      '\nlongitude: ' + position.coords.longitude +
      '\naccuracy:  ' + position.coords.accuracy + ' m' +
      '\naltitude:  ' + position.coords.altitude +
      ' +/- ' + position.coords.altitudeAccuracy +
      '\nheading:   ' + position.coords.heading +
      '\nspeed:     ' + position.coords.speed +
      '\ntimestamp: ' + position.timestamp);

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    getStation(latitude, longitude)
      .then(cwa => {
        // Gets array of available local discussion products
        return getProducts('AFD', cwa);
      })
      .then(discussions => {
        // Gets content of most recent discussion product
        return getProduct(discussions);
      })
      .then(discussion => {
        var discussionsElement = document.getElementById("discussion");
        text = discussion.productText;
        text = text.split(/\n\n/);
        text[0] = text[0].replace(/\n/g, '<br>');
        text[1] = text[1].replace(/\n/g, '<br>');
        text = text.join('<br><br>');
        discussionsElement.innerHTML = text;
        overlay.stopOverlay();
      })
      .catch(err => {
        console.log('Fetch Error:', err);
      });
  };

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  var options = {
    enableHighAccuracy: true, // default: false
    timeout: 5000, // default: Infinity
    maximumAge: 0 // default: 0
  };