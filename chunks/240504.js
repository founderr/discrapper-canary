"use strict";
a.r(t);
var n, s = a("442837"),
  l = a("570140");

function i(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let r = 12 * a("70956").default.Millis.HOUR,
  o = {
    profileThemesRelevanceExceeded: null,
    savedAt: null
  },
  u = {
    hasFetchedRelevance: !1
  },
  d = o,
  c = u;
class f extends(n = s.default.PersistedStore) {
  initialize(e) {
    c = u, d = o;
    let t = new Date;
    null != e && null != e.savedAt && t.getTime() - e.savedAt < r && (d = e)
  }
  get hasFetchedRelevance() {
    return c.hasFetchedRelevance
  }
  get profileThemesRelevanceExceeded() {
    return d.profileThemesRelevanceExceeded
  }
  getState() {
    return d
  }
}
i(f, "displayName", "PerksRelevanceStore"), i(f, "persistKey", "PerksRelevanceStore"), t.default = new f(l.default, {
  BILLING_PERKS_RELEVANCE_FETCH_START: function() {
    c.hasFetchedRelevance = !0
  },
  BILLING_PERKS_RELEVANCE_FETCH_SUCCESS: function(e) {
    let {
      res: t
    } = e;
    null != t && (d.profileThemesRelevanceExceeded = t.eligible, d.savedAt = new Date().getTime())
  },
  BILLING_PERKS_RELEVANCE_FETCH_FAIL: function() {},
  LOGOUT: function() {
    c = u, d = o
  }
})