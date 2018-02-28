sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("produto2.controller.Login", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf produto2.view.Login
		 */ //	onInit: function() {
		//
		//	},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf produto2.view.Login
		 */ //	onBeforeRendering: function() {
		//
		//	},
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf produto2.view.Login
		 */ //	onAfterRendering: function() {
		//
		//	},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf produto2.view.Login
		 */ //	onExit: function() {
		//
		//	}
		/**
		 *@memberOf produto2.controller.Login
		 */
		 onInit: function(){
		 	var oModel = new sap.ui.model.json.JSONModel();
		 	var data = {
		 		Login: {
		 			Usuario: '',
		 			Senha: ''
		 		}
		 	};
		 	this.getView().setModel(oModel);
		 	oModel.setData(data);
		 }, 
		logon: function(event) {
			var oData = this.getView().getModel().oData;
			debugger;
			if(oData.Login.Usuario != 'lucas') {
				
			} else {
				var route = this.getOwnerComponent().getRouter();
			route.navTo('main');	
			}
	
		}
	});
});
