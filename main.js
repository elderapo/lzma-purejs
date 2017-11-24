'use strict';

var freeze = require('./lib/freeze');
var LZ = require('./lib/LZ');
var LZMA = require('./lib/LZMA');
var RangeCoder = require('./lib/RangeCoder');
var Stream = require('./lib/Stream');
var Util = require('./lib/Util');

module.exports = freeze({
  version: "0.9.0",
  LZ: LZ,
  LZMA: LZMA,
  RangeCoder: RangeCoder,
  Stream: Stream,
  Util: Util,
  // utility methods
  compress: Util.compress,
  compressFile: Util.compressFile,
  decompress: Util.decompress,
  decompressFile: Util.decompressFile
});

