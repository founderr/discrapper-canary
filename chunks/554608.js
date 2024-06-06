    "use strict";
    t.r(a), t.d(a, {
      MigrationStatus: function() {
        return f
      }
    });
    var d, c, n, i, f, o, r = t("442837"),
      l = t("570140");
    (d = f || (f = {}))[d.NOT_STARTED = 0] = "NOT_STARTED", d[d.IN_PROGRESS = 1] = "IN_PROGRESS", d[d.FAILED = 2] = "FAILED", d[d.SKIPPED = 3] = "SKIPPED";
    let s = 0;
    class b extends(o = r.default.Store) {
      getMigrationStatus() {
        return s
      }
    }
    i = "DomainMigrationStore", (n = "displayName") in(c = b) ? Object.defineProperty(c, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : c[n] = i, a.default = new b(l.default, {
      DOMAIN_MIGRATION_START: function() {
        s = 1
      },
      DOMAIN_MIGRATION_FAILURE: function() {
        s = 2
      },
      DOMAIN_MIGRATION_SKIP: function() {
        s = 3
      }
    })