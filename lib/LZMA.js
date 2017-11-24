'use strict';
if (typeof define !== 'function') { var define = require('amdefine')(module); }
var freeze = require('./freeze');
var Decoder = require('./LZMA/Decoder');
var Encoder = require('./LZMA/Encoder');
  module.exports = freeze({
    Decoder: Decoder,
    Encoder: Encoder
  });

