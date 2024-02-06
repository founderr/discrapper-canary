"use strict";
let r;
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("424973");
var s = n("446674"),
  l = n("913144");
let i = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class a extends s.default.PersistedStore {
  initialize(e) {
    r = null != e ? e : i
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
a.displayName = "ApplicationStoreUserSettingsStore", a.persistKey = "ApplicationStoreUserSettingsStore", a.migrations = [e => null == e.hasAcceptedEulaIds ? {
  ...e,
  hasAcceptedEulaIds: []
} : e];
var o = new a(l.default, {
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