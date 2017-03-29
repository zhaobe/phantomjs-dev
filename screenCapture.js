//example of screen capture with phantomJS
//the behavior should load the webpage, renders it as an image and saves it

var page = require('webpage').create(),
    system = require('system'),
    url;

if (system.args.length === 1) {
    console.log('Usage: phantomjs screenCapture.js <the URL>');
    phantom.exit();
}

url = system.args[1];
    
page.open(url, function() {
    page.render('screen-capture.png');
    console.log('Screen captured: ' + system.args[1]);
    phantom.exit();
});