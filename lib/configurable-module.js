"use strict";

var clone = require('node-clone');
var _ = require('underscore');

var ConfigurableModule = function (defaults) {
	var instance,
		getInstance;

	getInstance = function () {
		if (!instance) {
			throw new Error('Module must be configured first');
		}
		return instance;
	};

	getInstance.prototype.configure = function (options) {
		instance = _.defaults(clone(options), defaults || {});
	};

	return getInstance;
};

module.exports = exports = ConfigurableModule;
