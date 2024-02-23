"use strict";
let s;
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("424973");
var a = n("446674"),
  r = n("913144");
let i = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class l extends a.default.PersistedStore {
  initialize(e) {
    s = null != e ? e : i
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
l.displayName = "ApplicationStoreUserSettingsStore", l.persistKey = "ApplicationStoreUserSettingsStore", l.migrations = [e => null == e.hasAcceptedEulaIds ? {
  ...e,
  hasAcceptedEulaIds: []
} : e];
var o = new l(r.default, {
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