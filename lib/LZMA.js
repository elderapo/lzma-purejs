'use strict';

var freeze = require('./freeze');
var Decoder = require('./LZMA/Decoder');
var Encoder = require('./LZMA/Encoder');
  module.exports = freeze({
    Decoder: Decoder,
    Encoder: Encoder
  });

