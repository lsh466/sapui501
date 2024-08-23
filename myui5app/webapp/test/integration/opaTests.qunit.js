QUnit.config.autostart = false;

sap.ui.require(["sap/ui/core/Core"], async (Core) => {
  "use strict";

  await Core.ready();

  sap.ui.require(
    [
      "myui5app/localService/mockserver",
      "myui5app/test/integration/NavigationJourney",
    ],
    (mockserver) => {
      // initialize the mock server
      mockserver.init();
      QUnit.start();
    }
  );
});
