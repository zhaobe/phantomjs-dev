//example of net logging
//the behavior should return the request and responses of the url input

"use strict";

var page = require('webpage').create(),
    system = require('system'),
    url;

if (system.args.length === 1) {
    console.log('Usage: phantomjs netlogger.js <the URL>');
    phantom.exit();
}
else {
    url = system.args[1];
    
    //output requested in JSON format for request, stringify(value,[, replacer[, space]])
    page.onResourceRequested = function (req) {
        console.log('requested: ' + JSON.stringify(req, undefined, 4));
    };
    
    //output requested in JSON format for response
    page.onResourceReceived = function (res) {
        console.log('received: ' + JSON.stringify(res, undefined, 4));
    };
    
    //open url if status success
    page.open(url, function (status) {
        if (status !== 'success') {
            console.log('FAILED TO LOAD URL');
        }
        phantom.exit();
    }); 
}
