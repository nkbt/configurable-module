"use strict";

var instance;
var clone = require('node-clone');


function configure(options) {
	instance = clone(options);
}


function getInstance() {
	if (!instance) {
		throw new Error('Module must be configured first');
	}
	return instance;
}


module.exports = exports = getInstance;
exports.configure = configure;
