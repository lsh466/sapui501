/* eslint-disable linebreak-style */
sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  function (Controller, MessageToast, Fragment) {
    "use strict";

    return Controller.extend("myui5app.controller.HelloPanel", {
      onShowHello() {
        // show a native JavaScript alert
        MessageToast.show("Hello World");
      },
      onOpenDialog() {
        if (!this.pDialog) {
          this.pDialog = this.loadFragment({
            name: "myui5app.view.HelloDialog",
          });
        }
        this.pDialog.then(function (oDialog) {
          oDialog.open();
        });
      },
      onButtonPress() {
        this.byId("idDialog").close();
      },
    });
  }
);
