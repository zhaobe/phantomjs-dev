//example of page load speed
//the behavior should return loading time of webpage in msec

"use strict";

var page = require('webpage').create(),
  system = require('system'),
  t, address;

if (system.args.length === 1) {
    console.log('Usage: phantomjs loadspeed.js <the URL>');
    phantom.exit();
}

t = Date.now();
address = system.args[1];
page.open(address, function(status) {
    if (status !== 'success') {
        console.log('FAIL to load the address');
    } 
    else {
        t = Date.now() - t;
        console.log('Loading ' + system.args[1]);
        console.log('Loading time ' + t + ' msec');
    }
    phantom.exit();
});