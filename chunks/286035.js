    "use strict";
    t.r(a), t.d(a, {
      failMigration: function() {
        return n
      },
      finishMigration: function() {
        return i
      },
      migrate: function() {
        return c
      }
    });
    var d = t("570140");

    function c() {
      d.default.wait(() => d.default.dispatch({
        type: "DOMAIN_MIGRATION_START"
      }))
    }

    function n() {
      d.default.dispatch({
        type: "DOMAIN_MIGRATION_FAILURE"
      })
    }

    function i() {
      window.location.reload()
    }