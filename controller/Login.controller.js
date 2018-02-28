sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("produto2.controller.Login", {
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
				MessageToast.show("Login Inválido");
			} else {
				var route = this.getOwnerComponent().getRouter();
			route.navTo('main');	
			}
	
		}
	});
});
