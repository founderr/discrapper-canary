let o;
t(653041);
var r,
    a = t(442837),
    i = t(570140);
function c(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let l = {
    hasAcceptedStoreTerms: !1,
    hasAcceptedEulaIds: []
};
class s extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        o = null != e ? e : l;
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
c(s, 'displayName', 'ApplicationStoreUserSettingsStore'),
    c(s, 'persistKey', 'ApplicationStoreUserSettingsStore'),
    c(s, 'migrations', [
        (e) =>
            null == e.hasAcceptedEulaIds
                ? {
                      ...e,
                      hasAcceptedEulaIds: []
                  }
                : e
    ]),
    (n.Z = new s(i.Z, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            o.hasAcceptedStoreTerms = !0;
        },
        APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: n } = e;
            if (o.hasAcceptedEulaIds.includes(n)) return !1;
            o.hasAcceptedEulaIds.push(n);
        }
    }));
