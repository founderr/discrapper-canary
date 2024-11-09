let i;
n(653041);
var o,
    r = n(442837),
    l = n(570140);
function s(e, t, n) {
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
let a = {
    hasAcceptedStoreTerms: !1,
    hasAcceptedEulaIds: []
};
class u extends (o = r.ZP.PersistedStore) {
    initialize(e) {
        i = null != e ? e : a;
    }
    getState() {
        return i;
    }
    get hasAcceptedStoreTerms() {
        return i.hasAcceptedStoreTerms;
    }
    hasAcceptedEULA(e) {
        return i.hasAcceptedEulaIds.includes(e);
    }
}
s(u, 'displayName', 'ApplicationStoreUserSettingsStore'),
    s(u, 'persistKey', 'ApplicationStoreUserSettingsStore'),
    s(u, 'migrations', [
        (e) =>
            null == e.hasAcceptedEulaIds
                ? {
                      ...e,
                      hasAcceptedEulaIds: []
                  }
                : e
    ]),
    (t.Z = new u(l.Z, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            i.hasAcceptedStoreTerms = !0;
        },
        APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: t } = e;
            if (i.hasAcceptedEulaIds.includes(t)) return !1;
            i.hasAcceptedEulaIds.push(t);
        }
    }));
