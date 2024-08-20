sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (
    Controller,
    MessageToast
) {
    "use strict";

    return Controller.extend("myui5app.controller.HelloPanel", {

        onShowHello() {
            // show a native JavaScript alert
            MessageToast.show("Hello World");
        }

    });
});