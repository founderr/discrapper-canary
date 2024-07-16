let a;
n(653041);
var r, o = n(442837),
  i = n(570140);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let l = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class d extends(r = o.ZP.PersistedStore) {
  initialize(e) {
a = null != e ? e : l;
  }
  getState() {
return a;
  }
  get hasAcceptedStoreTerms() {
return a.hasAcceptedStoreTerms;
  }
  hasAcceptedEULA(e) {
return a.hasAcceptedEulaIds.includes(e);
  }
}
c(d, 'displayName', 'ApplicationStoreUserSettingsStore'), c(d, 'persistKey', 'ApplicationStoreUserSettingsStore'), c(d, 'migrations', [e => null == e.hasAcceptedEulaIds ? {
  ...e,
  hasAcceptedEulaIds: []
} : e]), t.Z = new d(i.Z, {
  APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
a.hasAcceptedStoreTerms = !0;
  },
  APPLICATION_STORE_ACCEPT_EULA: function(e) {
let {
  eulaId: t
} = e;
if (a.hasAcceptedEulaIds.includes(t))
  return !1;
a.hasAcceptedEulaIds.push(t);
  }
});