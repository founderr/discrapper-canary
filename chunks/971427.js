"use strict";
let s;
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("424973");
var r = n("446674"),
  l = n("913144");
let a = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class i extends r.default.PersistedStore {
  initialize(e) {
    s = null != e ? e : a
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
i.displayName = "ApplicationStoreUserSettingsStore", i.persistKey = "ApplicationStoreUserSettingsStore", i.migrations = [e => null == e.hasAcceptedEulaIds ? {
  ...e,
  hasAcceptedEulaIds: []
} : e];
var o = new i(l.default, {
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