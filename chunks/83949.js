    "use strict";
    t.r(a), t.d(a, {
      default: function() {
        return b
      }
    });
    var d = t("470079"),
      c = t("719711"),
      n = t("433517"),
      i = t("579806"),
      f = t("626135"),
      o = t("998502"),
      r = t("286035"),
      l = t("981631");

    function s(e) {
      var a;
      return null == e ? void 0 : null === (a = e._state) || void 0 === a ? void 0 : a.lastTestTimestamp
    }

    function b() {
      return d.useEffect(() => {
        window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN && !0 !== n.Storage.get(c.DOMAIN_MIGRATION_SUCCESS_KEY) && o.default.supportsFeature(l.NativeFeatures.USER_DATA_CACHE) && (r.migrate(), i.default.userDataCache.getCached().then(e => {
          if (null == e) {
            r.failMigration(), f.default.track(l.AnalyticEvents.DOMAIN_MIGRATED, {
              success: !1,
              has_data: !1
            }, {
              flush: !0
            });
            return
          }
          let a = Object.keys(e),
            t = 0 !== a.length,
            d = null != e.token,
            o = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
            b = null == o || null == s(o) || s(o) <= s(n.Storage.get("RTCRegionStore"));
          t && d && !b && (n.Storage.clear(), a.forEach(a => {
            let t = e[a];
            try {
              n.Storage.set(a, JSON.parse(t))
            } catch (e) {}
          })), f.default.track(l.AnalyticEvents.DOMAIN_MIGRATED, {
            success: !0,
            current_is_newer: b,
            has_data: t
          }, {
            flush: !0
          }), n.Storage.set(c.DOMAIN_MIGRATION_SUCCESS_KEY, !0), i.default.userDataCache.deleteCache(), r.finishMigration()
        }))
      }, []), null
    }