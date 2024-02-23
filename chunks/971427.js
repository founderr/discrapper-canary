"use strict";
let r;
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("424973");
var s = n("446674"),
  i = n("913144");
let a = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class l extends s.default.PersistedStore {
  initialize(e) {
    r = null != e ? e : a
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
l.displayName = "ApplicationStoreUserSettingsStore", l.persistKey = "ApplicationStoreUserSettingsStore", l.migrations = [e => null == e.hasAcceptedEulaIds ? {
  ...e,
  hasAcceptedEulaIds: []
} : e];
var o = new l(i.default, {
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