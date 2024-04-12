"use strict";
let r;
n.r(t), n("653041");
var a, u = n("442837"),
  s = n("570140");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let l = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class c extends(a = u.default.PersistedStore) {
  initialize(e) {
    r = null != e ? e : l
  }
  getState() {
    return r
  }
  get hasAcceptedStoreTerms() {
    return r.hasAcceptedStoreTerms
  }
  hasAcceptedEULA(e) {
    return r.hasAcceptedEulaIds.includes(e)
  }
}
i(c, "displayName", "ApplicationStoreUserSettingsStore"), i(c, "persistKey", "ApplicationStoreUserSettingsStore"), i(c, "migrations", [e => null == e.hasAcceptedEulaIds ? {
  ...e,
  hasAcceptedEulaIds: []
} : e]), t.default = new c(s.default, {
  APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
    r.hasAcceptedStoreTerms = !0
  },
  APPLICATION_STORE_ACCEPT_EULA: function(e) {
    let {
      eulaId: t
    } = e;
    if (r.hasAcceptedEulaIds.includes(t)) return !1;
    r.hasAcceptedEulaIds.push(t)
  }
})