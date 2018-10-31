(function (){
  var template = Handlebars.templates['entries'];
  var context = {
      title: "Handlebars Test",
      test: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, minus ut voluptates quis corrupti amet excepturi, similique eum omnis ipsam libero."
  };
  var html = template(context);
  document.getElementById("entries").innerHTML = html;
}());