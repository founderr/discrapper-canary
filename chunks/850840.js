"use strict";
let a;
n.r(t), n("653041");
var r, s = n("442837"),
  l = n("570140");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class o extends(r = s.default.PersistedStore) {
  initialize(e) {
    a = null != e ? e : u
  }
  getState() {
    return a
  }
  get hasAcceptedStoreTerms() {
    return a.hasAcceptedStoreTerms
  }
  hasAcceptedEULA(e) {
    return a.hasAcceptedEulaIds.includes(e)
  }
}
i(o, "displayName", "ApplicationStoreUserSettingsStore"), i(o, "persistKey", "ApplicationStoreUserSettingsStore"), i(o, "migrations", [e => null == e.hasAcceptedEulaIds ? {
  ...e,
  hasAcceptedEulaIds: []
} : e]), t.default = new o(l.default, {
  APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
    a.hasAcceptedStoreTerms = !0
  },
  APPLICATION_STORE_ACCEPT_EULA: function(e) {
    let {
      eulaId: t
    } = e;
    if (a.hasAcceptedEulaIds.includes(t)) return !1;
    a.hasAcceptedEulaIds.push(t)
  }
})