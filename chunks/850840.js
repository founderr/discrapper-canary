"use strict";
let l;
n.r(t), n("653041");
var a, s = n("442837"),
  i = n("570140");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let r = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class o extends(a = s.default.PersistedStore) {
  initialize(e) {
    l = null != e ? e : r
  }
  getState() {
    return l
  }
  get hasAcceptedStoreTerms() {
    return l.hasAcceptedStoreTerms
  }
  hasAcceptedEULA(e) {
    return l.hasAcceptedEulaIds.includes(e)
  }
}
u(o, "displayName", "ApplicationStoreUserSettingsStore"), u(o, "persistKey", "ApplicationStoreUserSettingsStore"), u(o, "migrations", [e => null == e.hasAcceptedEulaIds ? {
  ...e,
  hasAcceptedEulaIds: []
} : e]), t.default = new o(i.default, {
  APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
    l.hasAcceptedStoreTerms = !0
  },
  APPLICATION_STORE_ACCEPT_EULA: function(e) {
    let {
      eulaId: t
    } = e;
    if (l.hasAcceptedEulaIds.includes(t)) return !1;
    l.hasAcceptedEulaIds.push(t)
  }
})