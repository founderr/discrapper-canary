"use strict";
let l;
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("424973");
var s = n("446674"),
  i = n("913144");
let r = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class o extends s.default.PersistedStore {
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
o.displayName = "ApplicationStoreUserSettingsStore", o.persistKey = "ApplicationStoreUserSettingsStore", o.migrations = [e => null == e.hasAcceptedEulaIds ? {
  ...e,
  hasAcceptedEulaIds: []
} : e];
var a = new o(i.default, {
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