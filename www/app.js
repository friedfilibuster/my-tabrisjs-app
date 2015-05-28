Promise = require("promise");
require("whatwg-fetch");

var page = tabris.create("Page", {
  title: "Hello, World! 2",
  topLevel: true
});
 
var textView = tabris.create("TextView", {
  font: "24px",
  layoutData: {centerX: 0, top: 100},
  text: "Hello World"
}).appendTo(page);
 
 var button = tabris.create("Button", {
  text: "Click",
  layoutData: {centerX: 0, top: [textView, 50]}
}).appendTo(page);
 
button.on("select", function() {
  fetch("http://www.telize.com/geoip").then(function(response) {
    return response.json();
  }).then(function(json) {
	  textView.set("text", json.ip)
  });
});

page.open();

