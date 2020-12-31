sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent", "sap/m/library"], function (e, t, n) {
	"use strict";
	var r = n.URLHelper;
	return e.extend("com.mindset.eam.equipmentLog.controller.BaseController", {
		getRouter: function () {
			return t.getRouterFor(this)
		},
		getModel: function (e) {
			return this.getView().getModel(e)
		},
		setModel: function (e, t) {
			return this.getView().setModel(e, t)
		},
		getResourceBundle: function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle()
		},
		onShareEmailPress: function () {
			var e = this.getModel("objectView") || this.getModel("worklistView");
			r.triggerEmail(null, e.getProperty("/shareSendEmailSubject"), e.getProperty("/shareSendEmailMessage"))
		},
		addHistoryEntry: function () {
			var e = [];
			return function (t, n) {
				if (n) {
					e = []
				}
				var r = e.some(function (e) {
					return e.intent === t.intent
				});
				if (!r) {
					e.push(t);
					this.getOwnerComponent().getService("ShellUIService").then(function (t) {
						t.setHierarchy(e)
					})
				}
			}
		}()
	})
});