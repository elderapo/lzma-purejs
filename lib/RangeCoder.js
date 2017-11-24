'use strict';
if (typeof define !== 'function') { var define = require('amdefine')(module); }
var freeze = require('./freeze');
var BitTreeDecoder = require('./RangeCoder/BitTreeDecoder');
var BitTreeEncoder = require('./RangeCoder/BitTreeEncoder');
var Decoder = require('./RangeCoder/Decoder');
var Encoder = require('./RangeCoder/Encoder');
  module.exports = freeze({
    BitTreeDecoder: BitTreeDecoder,
    BitTreeEncoder: BitTreeEncoder,
    Decoder: Decoder,
    Encoder: Encoder
  });

