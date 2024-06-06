    "use strict";
    t.r(a), t("47120");
    var d = t("317770"),
      c = t("626135"),
      n = t("358085"),
      i = t("998502"),
      f = t("801814"),
      o = t("981631");
    class r extends d.default {
      _initialize() {
        n.isPlatformEmbedded && (i.default.on("UPDATE_DOWNLOADED", () => this.processModuleEvents()), i.default.on("MODULE_INSTALLED", (e, a, t) => this.processModuleEvents()), i.default.on("UPDATER_HISTORY_RESPONSE", (e, a) => {
          this._handleHistoryResponse(a)
        }), this.processModuleEvents())
      }
      _terminate() {}
      processModuleEvents() {
        i.default.send("UPDATER_HISTORY_QUERY_AND_TRUNCATE")
      }
      _handleHistoryResponse(e) {
        if (null == e) return;
        let a = 0 === Math.floor(1e3 * Math.random());
        e.forEach(e => {
          "analytics" === e.type ? e.name === o.AnalyticEvents.UPDATER_METRICS_DOWNLOAD || e.name === o.AnalyticEvents.UPDATER_METRICS_INSTALL || e.name === o.AnalyticEvents.UPDATER_METRICS_COMBINED || e.name === o.AnalyticEvents.UPDATER_METRICS_TRANSITION_STATUS ? a && c.default.track(e.name, e.data) : console.warn("Unknown updater analytic event ".concat(e.name)) : this._tracker.trackEvent(e)
        }), this._tracker.submissionReady() && (c.default.track(o.AnalyticEvents.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset())
      }
      constructor(...e) {
        var a, t, d;
        super(...e), a = this, t = "_tracker", d = new f.default, t in a ? Object.defineProperty(a, t, {
          value: d,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : a[t] = d
      }
    }
    a.default = new r