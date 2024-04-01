"use strict";
let r;
n.r(e), n("653041");
var i, s = n("442837"),
  u = n("570140");

function a(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t
}
let l = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class o extends(i = s.default.PersistedStore) {
  initialize(t) {
    r = null != t ? t : l
  }
  getState() {
    return r
  }
  get hasAcceptedStoreTerms() {
    return r.hasAcceptedStoreTerms
  }
  hasAcceptedEULA(t) {
    return r.hasAcceptedEulaIds.includes(t)
  }
}
a(o, "displayName", "ApplicationStoreUserSettingsStore"), a(o, "persistKey", "ApplicationStoreUserSettingsStore"), a(o, "migrations", [t => null == t.hasAcceptedEulaIds ? {
  ...t,
  hasAcceptedEulaIds: []
} : t]), e.default = new o(u.default, {
  APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
    r.hasAcceptedStoreTerms = !0
  },
  APPLICATION_STORE_ACCEPT_EULA: function(t) {
    let {
      eulaId: e
    } = t;
    if (r.hasAcceptedEulaIds.includes(e)) return !1;
    r.hasAcceptedEulaIds.push(e)
  }
})