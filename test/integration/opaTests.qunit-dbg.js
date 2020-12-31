/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"com/mindset/eam/equipmentLogg/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});