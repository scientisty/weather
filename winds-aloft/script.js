document.addEventListener("DOMContentLoaded", function(event) {

  var div =
    document.getElementById('click').addEventListener("click", function() {
      console.log("click");
      console.log(this.tagName); // note event.target gives element where event is captured, possibly a child element
      console.log(event.pageX, event.pageY);
      console.log(event.clientX, event.clientY);
      this.style.background = "blue";
    });



  // from https://developer.yahoo.com/javascript/howto-ajax.html
  // but may be out of date
  var xmlhttp = null;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
    if (typeof xmlhttp.overrideMimeType != 'undefined') {
      xmlhttp.overrideMimeType('text/xml');
    }
  } else if (window.ActiveXObject) {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  } else {
    alert('Perhaps your browser does not support xmlhttprequests?');
  }

  var url = "http://forecast.weather.gov/product.php?site=NWS&issuedby=US1&product=FD1&format=TXT&version=1&glossary=0"

  xmlhttp.open('GET', url, true);
  xmlhttp.send(null);

  // readyState 4 means complete
  // status 200 meams successfule
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var myObj = eval ( xmlhttp.responseText );  // if JSON is returned you can just eval
    } else {
      // wait for the call to complete
    }
  };

});
