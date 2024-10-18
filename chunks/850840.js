let i;
n(653041);
var r,
    l = n(442837),
    c = n(570140);
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
let o = {
    hasAcceptedStoreTerms: !1,
    hasAcceptedEulaIds: []
};
class a extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        i = null != e ? e : o;
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
s(a, 'displayName', 'ApplicationStoreUserSettingsStore'),
    s(a, 'persistKey', 'ApplicationStoreUserSettingsStore'),
    s(a, 'migrations', [
        (e) =>
            null == e.hasAcceptedEulaIds
                ? {
                      ...e,
                      hasAcceptedEulaIds: []
                  }
                : e
    ]),
    (t.Z = new a(c.Z, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            i.hasAcceptedStoreTerms = !0;
        },
        APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: t } = e;
            if (i.hasAcceptedEulaIds.includes(t)) return !1;
            i.hasAcceptedEulaIds.push(t);
        }
    }));
