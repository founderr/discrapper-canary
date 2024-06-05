"use strict";
let n;
s.r(t), s("653041");
var a, r = s("442837"),
  i = s("570140");

function l(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let u = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class o extends(a = r.default.PersistedStore) {
  initialize(e) {
    n = null != e ? e : u
  }
  getState() {
    return n
  }
  get hasAcceptedStoreTerms() {
    return n.hasAcceptedStoreTerms
  }
  hasAcceptedEULA(e) {
    return n.hasAcceptedEulaIds.includes(e)
  }
}
l(o, "displayName", "ApplicationStoreUserSettingsStore"), l(o, "persistKey", "ApplicationStoreUserSettingsStore"), l(o, "migrations", [e => null == e.hasAcceptedEulaIds ? {
  ...e,
  hasAcceptedEulaIds: []
} : e]), t.default = new o(i.default, {
  APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
    n.hasAcceptedStoreTerms = !0
  },
  APPLICATION_STORE_ACCEPT_EULA: function(e) {
    let {
      eulaId: t
    } = e;
    if (n.hasAcceptedEulaIds.includes(t)) return !1;
    n.hasAcceptedEulaIds.push(t)
  }
})