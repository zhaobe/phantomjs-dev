//example of screen capture with phantomJS
//the behavior should load the webpage, renders it as an image and saves it

var page = require('webpage').create();

page.open('http://phantomjs.org/screen-capture.html', function() {
    page.render('screen-capture.png');
    phantom.exit();
});