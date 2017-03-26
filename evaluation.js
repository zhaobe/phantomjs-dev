//example of evaluate function, 
//the behavior should return the title of the webpage

var page = require('webpage').create(),
    system = require('system'),
    url;

if (system.args.length === 1) {
    console.log('Usage: phantomjs evaluate.js <the URL>');
    phantom.exit();
}

url = system.args[1];

page.open(url, function(status) {
    var title = page.evaluate(function() {
        return document.title;
    });
    console.log('The page title is ' + title);
    phantom.exit();
});