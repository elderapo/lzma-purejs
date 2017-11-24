'use strict';
if (typeof define !== 'function') { var define = require('amdefine')(module); }
var freeze = require('./freeze');
var BinTree = require('./LZ/BinTree');
var InWindow = require('./LZ/InWindow');
var OutWindow = require('./LZ/OutWindow');
  module.exports = freeze({
    BinTree: BinTree,
    InWindow: InWindow,
    OutWindow: OutWindow
  });

