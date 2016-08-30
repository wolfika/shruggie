#!/usr/bin/env node
'use strict';
const meow = require('meow');
const shruggie = require('./');

const cli = meow(`
	Usage
	  $ shruggie

	Examples
	  $ shruggie
	  ¯\\_(ツ)_/¯
`);

console.log(shruggie(cli.input[0] || 'unicorns'));
