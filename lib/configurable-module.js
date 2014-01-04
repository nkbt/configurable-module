"use strict";

module.exports = exports = function (configureCallback, getInstanceCallback) {

	var isConfigured = false;

	function configure(options) {
		isConfigured = true;
		return configureCallback(options);
	}

	function getInstance() {
		if (!isConfigured) {
			throw new Error('Module must be configured first');
		}
		return getInstanceCallback();
	}

	getInstance.configure = configure;

	return getInstance;
};
