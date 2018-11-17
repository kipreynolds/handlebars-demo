(function (){
  var request = new XMLHttpRequest();
  request.open('GET', '/data/entries.json', true);

  request.onload = function() {
    if (request.readyState == 4 && request.status == 200) {
      // Success! Store response text for use in template
      var entryData = JSON.parse(request.responseText);
      var template = Handlebars.templates['entries'];
      var context = entryData;
      var html = template(context);
      document.getElementById("entries").innerHTML = html;
    } else {
      // Request made, but error encountered
      console.log("Request error");
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log("connection error");
  };

  request.send();
}());