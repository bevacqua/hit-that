'use strict';

var fs = require('fs');
var pictureTube = require('picture-tube');
var webshot = require('webshot');

function hitThat (url, options) {
  var name = Date.now() + '_that.png';
  var o = options || {};
  if (o.width === void 0) { o.width = 1024; }
  if (o.height === void 0) { o.height = 768; }
  if (o.cols === void 0) { o.cols = 80; }
  if (o.dest === void 0) { o.dest = process.stdout; }

  var tube = pictureTube({ cols: o.cols });

  tube.pipe(o.dest);
  webshot(url, { windowSize: { width: o.width, height: o.height } }, ready);

  function ready (err, reader) {
    if (err) {
      throw err;
    }
    var file = fs.createWriteStream(name, {
      encoding: 'binary'
    });

    reader.on('data', read);
    reader.on('end', write);

    function read (data) {
      file.write(data.toString('binary'), 'binary');
    }
    function write () {
      fs.createReadStream(name).pipe(tube).on('end', remove);
    }
    function remove () {
     fs.unlinkSync(name);
    }
  }
}

module.exports = hitThat;
