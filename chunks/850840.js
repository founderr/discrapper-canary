let n;
i(653041);
var s, r = i(442837), o = i(570140);
function a(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}
let d = {
    hasAcceptedStoreTerms: !1,
    hasAcceptedEulaIds: []
};
class l extends (s = r.ZP.PersistedStore) {
    initialize(e) {
        n = null != e ? e : d;
    }
    getState() {
        return n;
    }
    get hasAcceptedStoreTerms() {
        return n.hasAcceptedStoreTerms;
    }
    hasAcceptedEULA(e) {
        return n.hasAcceptedEulaIds.includes(e);
    }
}
a(l, 'displayName', 'ApplicationStoreUserSettingsStore'), a(l, 'persistKey', 'ApplicationStoreUserSettingsStore'), a(l, 'migrations', [e => null == e.hasAcceptedEulaIds ? {
        ...e,
        hasAcceptedEulaIds: []
    } : e]), t.Z = new l(o.Z, {
    APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
        n.hasAcceptedStoreTerms = !0;
    },
    APPLICATION_STORE_ACCEPT_EULA: function (e) {
        let {eulaId: t} = e;
        if (n.hasAcceptedEulaIds.includes(t))
            return !1;
        n.hasAcceptedEulaIds.push(t);
    }
});
