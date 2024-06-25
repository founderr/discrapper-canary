let r;
t(653041);
var s, a = t(442837),
  l = t(570140);

function i(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e
}
let o = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class u extends(s = a.ZP.PersistedStore) {
  initialize(e) {
    r = null != e ? e : o
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
i(u, "displayName", "ApplicationStoreUserSettingsStore"), i(u, "persistKey", "ApplicationStoreUserSettingsStore"), i(u, "migrations", [e => null == e.hasAcceptedEulaIds ? {
  ...e,
  hasAcceptedEulaIds: []
} : e]), n.Z = new u(l.Z, {
  APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
    r.hasAcceptedStoreTerms = !0
  },
  APPLICATION_STORE_ACCEPT_EULA: function(e) {
    let {
      eulaId: n
    } = e;
    if (r.hasAcceptedEulaIds.includes(n)) return !1;
    r.hasAcceptedEulaIds.push(n)
  }
})