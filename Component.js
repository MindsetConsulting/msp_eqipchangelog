sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device", "./model/models", "./controller/ErrorHandler","com/mindset/eam/equipmentLog/localService/mockserver"], function (t, e, s, i,Mockserver) {
	"use strict";
	Mockserver.init();                         
	return t.extend("com.mindset.eam.equipmentLog.Component", {
		metadata: {
			manifest: "json"
		},
		init: function () {
		
			// var oModel = new sap.ui.model.odata.v2.ODataModel({serviceUrl: "/destinations/service"});
			// this.setModel(oModel);
			t.prototype.init.apply(this, arguments);
			this._oErrorHandler = new i(this);
			this.setModel(s.createDeviceModel(), "device");
			this.setModel(s.createFLPModel(), "FLP");
			this.getRouter().initialize();
		},
		destroy: function () {
			this._oErrorHandler.destroy();
			t.prototype.destroy.apply(this, arguments)
		},
		getContentDensityClass: function () {
			if (this._sContentDensityClass === undefined) {
				if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
					this._sContentDensityClass = ""
				} else if (!e.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact"
				} else {
					this._sContentDensityClass = "sapUiSizeCozy"
				}
			}
			return this._sContentDensityClass
		}
	})
});