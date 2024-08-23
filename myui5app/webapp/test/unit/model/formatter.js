sap.ui.define(
  ["myui5app/model/formatters", "sap/ui/model/resource/ResourceModel"],
  (formatter, ResourceModel) => {
    "use strict";

    QUnit.module("Formatting functions", {});

    QUnit.test("Should return the translated texts", (assert) => {
      const oResourceModel = new ResourceModel({
        bundleUrl: sap.ui.require.toUrl("myui5app/i18n/i18n_ko.properties"),
        supportedLocales: [""],
        fallbackLocale: "",
      });

      const oControllerMock = {
        getOwnerComponent() {
          return {
            getModel() {
              return oResourceModel;
            },
          };
        },
      };

      const fnIsolatedFormatter = formatter.statusText.bind(oControllerMock);

      // Assert
      assert.strictEqual(
        fnIsolatedFormatter("A"),
        "신규",
        "The long text for Status A is correct"
      );
      assert.strictEqual(
        fnIsolatedFormatter("B"),
        "진행중",
        "The long text for Status B is correct"
      );
      assert.strictEqual(
        fnIsolatedFormatter("C"),
        "완료",
        "The long text for Status C is correct"
      );
      assert.strictEqual(
        fnIsolatedFormatter("Foo"),
        "Foo",
        "The long text for Status Foo is correct"
      );
    });
  }
);
