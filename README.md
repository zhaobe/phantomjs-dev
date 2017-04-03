# Simple PhantomJS basics

## Setting up PhantomJS for Mac
- download the Mac OSX binary files for phantomJS [here](http://phantomjs.org/download.html)
- unzip the binary files and move them into /usr/local/share
- create symbolic links with 
    - `sudo ln -s /usr/local/share/<phantomjs-folder>/bin/phantomjs /usr/local/share/phantomjs`
    - `sudo ln -s /usr/local/share/<phantomjs-folder>/bin/phantomjs /usr/local/bin/phantomjs`
    - `sudo ln -s /usr/local/share/<phantomjs-folder>/bin/phantomjs /usr/bin/phantomjs`
- so now you should have symbolic links of phantomjs to the three locations above.
- use `which phantomjs` to check that it is in your PATH, if not you might need to add `export PATH="/usr/local/bin/:$PATH"` to either your ~/.bash_profile or /etc/paths
- once you successfully see that phantomjs is in your PATH you can use `phantomjs hello.js` to run a simple phantomjs of hello.js

## Development order for files
- hello.js
- loadspeed.js
- evaluation.js
- netLogger.js
- screenCapture.js
- outputEncode.js