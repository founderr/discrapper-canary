n.d(e, {
  _: function() {
    return s
  }
});
var r = n(529866),
  i = n(65534),
  a = n(450436);
class s {
  constructor() {
    s.prototype.__init.call(this), s.prototype.__init2.call(this)
  }
  __init() {
    this.name = "BrowserProfilingIntegration"
  }
  __init2() {
    this.getCurrentHub = void 0
  }
  setupOnce(t, e) {
    this.getCurrentHub = e;
    let n = this.getCurrentHub().getClient();
    n && "function" == typeof n.on ? (n.on("startTransaction", t => {
      (0, i.sA)(t)
    }), n.on("beforeEnvelope", t => {
      if (!a.wh.size) return;
      let e = (0, a.AJ)(t);
      if (!e.length) return;
      let n = [];
      for (let t of e) {
        let e = t && t.contexts,
          i = e && e.profile && e.profile.profile_id;
        if (!i) {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log("[Profiling] cannot find profile for a transaction without a profile context");
          continue
        }
        e && e.profile && delete e.profile;
        let s = a.wh.get(i);
        if (!s) {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Profiling] Could not retrieve profile for transaction: ${i}`);
          continue
        }
        a.wh.delete(i);
        let o = (0, a.nm)(i, s, t);
        o && n.push(o)
      }(0, a.db)(t, n)
    })) : r.kg.warn("[Profiling] Client does not support hooks, profiling will be disabled")
  }
}