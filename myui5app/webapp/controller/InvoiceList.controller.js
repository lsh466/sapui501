sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatters",
  ],
  function (Controller, JSONModel, formatters) {
    "use strict";

    return Controller.extend("myui5app.controller.InvoiceList", {
      formatters: formatters,
      onInit: function () {
        const oViewModel = new JSONModel({
          currency: "EUR",
        });

        this.getView().setModel(oViewModel, "view");
      },
    });
  }
);
