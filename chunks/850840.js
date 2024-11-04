let o;
n(653041);
var r,
    i = n(442837),
    a = n(570140);
function c(e, t, n) {
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
let d = {
    hasAcceptedStoreTerms: !1,
    hasAcceptedEulaIds: []
};
class l extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        o = null != e ? e : d;
    }
    getState() {
        return o;
    }
    get hasAcceptedStoreTerms() {
        return o.hasAcceptedStoreTerms;
    }
    hasAcceptedEULA(e) {
        return o.hasAcceptedEulaIds.includes(e);
    }
}
c(l, 'displayName', 'ApplicationStoreUserSettingsStore'),
    c(l, 'persistKey', 'ApplicationStoreUserSettingsStore'),
    c(l, 'migrations', [
        (e) =>
            null == e.hasAcceptedEulaIds
                ? {
                      ...e,
                      hasAcceptedEulaIds: []
                  }
                : e
    ]),
    (t.Z = new l(a.Z, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            o.hasAcceptedStoreTerms = !0;
        },
        APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: t } = e;
            if (o.hasAcceptedEulaIds.includes(t)) return !1;
            o.hasAcceptedEulaIds.push(t);
        }
    }));
