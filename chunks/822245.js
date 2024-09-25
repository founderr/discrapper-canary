var r,
    i = n(653041);
var a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    u = n(911969),
    c = n(704907),
    d = n(317381),
    _ = n(581883),
    E = n(674563),
    f = n(526761);
function h(e, t, n) {
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
let p = [u.yU.CHAT, u.yU.PRIMARY_ENTRY_POINT],
    m = { pendingUsages: [] },
    I = new c.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => (e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1),
        lookupKey: (e) => e,
        afterCompute: () => {},
        numFrequentlyItems: E.yP
    });
function T(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    if (t !== f.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    m.pendingUsages = [];
}
function g(e) {
    var t;
    let { command: n } = e;
    if (!p.includes(n.type) || (null === (t = d.ZP.getLaunchState(n.applicationId)) || void 0 === t ? void 0 : t.isLaunching)) return !1;
    A(n.applicationId);
}
function S(e) {
    let { applicationId: t } = e;
    A(t);
}
function A(e) {
    m.pendingUsages.push({
        key: e,
        timestamp: Date.now()
    }),
        I.track(e),
        I.compute();
}
function v() {
    var e, t;
    let n = null !== (t = null === (e = _.Z.frecencyWithoutFetchingLatest.applicationFrecency) || void 0 === e ? void 0 : e.applications) && void 0 !== t ? t : {};
    I.overwriteHistory(
        o().mapValues(n, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        m.pendingUsages
    );
}
class N extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        null != e && (m = e), this.waitFor(d.ZP), this.syncWith([_.Z], v);
    }
    getState() {
        return m;
    }
    hasPendingUsage() {
        return m.pendingUsages.length > 0;
    }
    getApplicationFrecencyWithoutLoadingLatest() {
        return I;
    }
    getScoreWithoutLoadingLatest(e) {
        var t;
        return null !== (t = I.getScore(e)) && void 0 !== t ? t : 0;
    }
    getTopApplicationsWithoutLoadingLatest() {
        return I.frequently;
    }
}
h(N, 'displayName', 'ApplicationFrecencyStore'),
    h(N, 'persistKey', 'ApplicationFrecency'),
    (t.Z = new N(l.Z, {
        APPLICATION_COMMAND_USED: g,
        EMBEDDED_ACTIVITY_OPEN: S,
        USER_SETTINGS_PROTO_UPDATE: T
    }));
