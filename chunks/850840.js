let r;
var i,
    a = n(653041);
var o = n(442837),
    s = n(570140);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = {
    hasAcceptedStoreTerms: !1,
    hasAcceptedEulaIds: []
};
function c() {
    r.hasAcceptedStoreTerms = !0;
}
function d(e) {
    let { eulaId: t } = e;
    if (r.hasAcceptedEulaIds.includes(t)) return !1;
    r.hasAcceptedEulaIds.push(t);
}
class _ extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        r = null != e ? e : u;
    }
    getState() {
        return r;
    }
    get hasAcceptedStoreTerms() {
        return r.hasAcceptedStoreTerms;
    }
    hasAcceptedEULA(e) {
        return r.hasAcceptedEulaIds.includes(e);
    }
}
l(_, 'displayName', 'ApplicationStoreUserSettingsStore'),
    l(_, 'persistKey', 'ApplicationStoreUserSettingsStore'),
    l(_, 'migrations', [
        (e) =>
            null == e.hasAcceptedEulaIds
                ? {
                      ...e,
                      hasAcceptedEulaIds: []
                  }
                : e
    ]),
    (t.Z = new _(s.Z, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: c,
        APPLICATION_STORE_ACCEPT_EULA: d
    }));
