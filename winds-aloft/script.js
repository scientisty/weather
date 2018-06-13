document.addEventListener("DOMContentLoaded", function(event) {

 let url;
 // forecast.weather.gov works with cors!

 url = "https://forecast.weather.gov/product.php?site=NWS&issuedby=US1&product=FD1&format=CI&version=1&glossary=0"

 fetch(url, {
    method: 'GET',
    mode: 'cors'
  })
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      console.log(response);
   
      // Examine the text in the response
      response.text().then(function(data) {
        console.log(data);

        // see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
        // and https://w3c.github.io/DOM-Parsing/
        let parser = new DOMParser();
     
        htmlDoc = parser.parseFromString(data, "text/html");  // text/xml fails

        //document.getElementById("demo").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        console.log(htmlDoc);
        console.log(htmlDoc.children);
       
        pre = htmlDoc.querySelector('.glossaryProduct');
        console.log(pre);
        winds = pre.textContent;  // Node.textContent, not style aware
        //console.log(pre.innerText);  // Node.innerText, style aware, originally from IE, less common
        //console.log(pre.innerHTML);  // Element.innerHTML 
        console.log(winds.split(' '));
        let lines = winds.split('\n');
        console.log(lines);
        lines.forEach(function(element, index, array) {
          console.log(element);
          console.log(element.split(/\s+/));
        })

        // adapted from https://www.aspsnippets.com/Articles/Read-Parse-and-display-CSV-Text-file-using-JavaScript-jQuery-and-HTML5.aspx
        var table = document.createElement("table");
        let rows = lines;
        for (let i = 0; i < rows.length; i++) {
          var row = table.insertRow(-1);
          var cells = rows[i].trim().split(/\s+/);  // /\s+/ splits on any amount of whitespace, t
          if(cells.length > 0) {
            for (let j = 0; j < cells.length; j++) {
              var cell = row.insertCell(-1);
              cell.innerHTML = cells[j];
            }
          }
        }
        document.getElementsByTagName("body")[0].appendChild(table);

        // TODO clean up above parsing of file to use field width instead of whitespace!
                      
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

});
