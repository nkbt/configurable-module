"use strict";

var clone = require('node-clone');

var ConfigurableModule = function () {
	var instance,
		getInstance;

	getInstance = function () {
		if (!instance) {
			throw new Error('Module must be configured first');
		}
		return instance;
	};

	getInstance.prototype.configure = function (options) {
		instance = clone(options);
	};

	return getInstance;
};

module.exports = exports = ConfigurableModule;
