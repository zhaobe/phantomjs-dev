'use strict';

var page = require('webpage').create(),
  system = require('system'),
  url;

//if (system.args.length === 1) {
//  console.log('Usage: phantomjs ' + system.args[0] + ''<the URL>');
//  phantom.exit();
//}

//url = system.args[1];

// for printing out console messages
page.onConsoleMessage = function (msg) {
  console.log(msg);
}

function click(el) {
  var ev = document.createEvent("MouseEvent");
  ev.initMouseEvent(
    "click",
    true, // canBubble
    true, // cancelable
    window, //view
    null, // detail
    0, 0, 0, 0, // screenX, screenY, clientX, clientY
    false, false, false, false, // ctrlKey, altKey, shiftKey, metaKey
    0, null // button, relatedTarger
  );
  el.dispatchEvent(ev);
}


page.open("https://www.google.com/", function (status) {
  console.log('opening page...');

  // form filling and submission
  page.evaluate(function () {
    console.log('the document title is:', document.title);

    var form = document.querySelector('form');
    var selectElement = form.querySelector('input[name="q"]');
    selectElement.value = 'phantomjs';

    form.submit();
  });

  // verifying the url has been updated with 
  // a timeout for page to finish loading
  window.setTimeout(function () {
    page.evaluate(function () {
      console.log(window.location.href);
    });
    phantom.exit();
  }, 4000);

});
