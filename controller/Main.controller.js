sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("produto2.controller.Main", {
		
		listProducts: function(event) {
			var route = this.getOwnerComponent().getRouter();
			route.navTo('listProdutos');	
		}
	});
});
