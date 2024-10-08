sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatters",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, JSONModel, formatters, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("myui5app.controller.InvoiceList", {
      formatters: formatters,
      onInit: function () {
        const oViewModel = new JSONModel({
          currency: "EUR",
        });

        this.getView().setModel(oViewModel, "view");
      },

      onFilterInvoices(oEvent) {
        const aFilter = [];
        const sQuery = oEvent.getParameter("query");
        if (sQuery) {
          aFilter.push(
            new Filter("ProductName", FilterOperator.Contains, sQuery)
          );
        }

        const oList = this.byId("invoiceList");
        const oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },
      onPress() {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("detail");
      },
    });
  }
);
