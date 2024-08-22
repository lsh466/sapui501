sap.ui.define(["sap/ui/core/mvc/Controller"], function (BaseController) {
  "use strict";

  return BaseController.extend("myui5app.controller.App", {
    onInit: function () {},

    onShowHello() {
      // show a native JavaScript alert
      alert("Hello World");
    },
  });
});
