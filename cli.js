#!/usr/bin/env node

'use strict';

var fs = require('fs');
var meow = require('meow');
var hitThat = require('./');
var usage = fs.readFileSync('./usage.txt');
var cli = meow({ help: usage });
var url = cli.input.shift();
var options = cli.flags;
options.dest = process.stdout;
hitThat(url, options);
