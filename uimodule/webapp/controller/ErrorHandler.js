sap.ui.define(["sap/ui/base/Object", "sap/m/MessageBox"], function (e, s) {
	"use strict";
	return e.extend("com.mindset.am.equipchangelog.controller.ErrorHandler", {
		constructor: function (e) {
			this._oResourceBundle = e.getModel("i18n").getResourceBundle();
			this._oComponent = e;
			this._oModel = e.getModel();
			this._bMessageOpen = false;
			this._sErrorText = this._oResourceBundle.getText("errorText");
			this._oModel.attachMetadataFailed(function (e) {
				var s = e.getParameters();
				this._showServiceError(s.response)
			}, this);
			this._oModel.attachRequestFailed(function (e) {
				var s = e.getParameters();
				if (s.response.statusCode !== "404" || s.response.statusCode === 404 && s.response.responseText.indexOf("Cannot POST") === 0) {
					this._showServiceError(s.response)
				}
			}, this)
		}
	});
});