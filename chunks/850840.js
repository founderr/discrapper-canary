"use strict";
let s;
r.r(t), r("653041");
var n, a = r("442837"),
  l = r("570140");

function u(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}
let c = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class i extends(n = a.default.PersistedStore) {
  initialize(e) {
    s = null != e ? e : c
  }
  getState() {
    return s
  }
  get hasAcceptedStoreTerms() {
    return s.hasAcceptedStoreTerms
  }
  hasAcceptedEULA(e) {
    return s.hasAcceptedEulaIds.includes(e)
  }
}
u(i, "displayName", "ApplicationStoreUserSettingsStore"), u(i, "persistKey", "ApplicationStoreUserSettingsStore"), u(i, "migrations", [e => null == e.hasAcceptedEulaIds ? {
  ...e,
  hasAcceptedEulaIds: []
} : e]), t.default = new i(l.default, {
  APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
    s.hasAcceptedStoreTerms = !0
  },
  APPLICATION_STORE_ACCEPT_EULA: function(e) {
    let {
      eulaId: t
    } = e;
    if (s.hasAcceptedEulaIds.includes(t)) return !1;
    s.hasAcceptedEulaIds.push(t)
  }
})