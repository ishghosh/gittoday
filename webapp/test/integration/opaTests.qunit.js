/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"gitto/Gittoday/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});