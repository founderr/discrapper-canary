let r, i, a;
var o,
    s = n(47120);
var l = n(442837),
    u = n(570140),
    c = n(372123),
    d = n(594190),
    _ = n(283595),
    E = n(780570),
    f = n(358085),
    h = n(209492),
    p = n(981631);
function m(e, t, n) {
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
function I() {
    let e = d.ZP.getRunningDiscordApplicationIds();
    for (let t of a.filter((t) => !e.includes(t))) {
        let e = _.Z.getActiveLibraryApplication(t);
        if (null != e)
            u.Z.wait(() => {
                try {
                    c.Z(e.id, e.branchId);
                } catch (e) {}
            });
    }
    return (a = e), !1;
}
function T(e) {
    let { applicationId: t, branchId: n } = e,
        r = (0, E.Tu)(t, n);
    i.add(r);
}
function g(e) {
    let { applicationId: t, branchId: n } = e,
        a = (0, E.Tu)(t, n);
    return (
        i.delete(a),
        (r[a] = {
            type: p.TzF.DONE,
            timestamp: Date.now()
        }),
        !0
    );
}
function S(e) {
    let { state: t } = e;
    for (let e of Object.keys(t)) r[e] = t[e];
}
function A(e) {
    let { applicationId: t, branchId: n, next: a, remote: o } = e,
        s = (0, E.Tu)(t, n);
    (r[s] = {
        type: p.TzF.CONFLICT,
        next: a,
        remote: o
    }),
        i.delete(s);
}
function v(e) {
    let { applicationId: t, branchId: n } = e,
        a = (0, E.Tu)(t, n);
    (r[a] = { type: p.TzF.ERROR }), i.delete(a);
}
class N extends (o = l.ZP.Store) {
    initialize() {
        f.isPlatformEmbedded && h.S(), (r = {}), (i = new Set()), (a = []);
    }
    getState(e, t) {
        return r[(0, E.Tu)(e, t)];
    }
    isSyncing(e, t) {
        let n = (0, E.Tu)(e, t);
        return i.has(n);
    }
}
m(N, 'displayName', 'CloudSyncStore'),
    (t.Z = new N(u.Z, {
        GAME_CLOUD_SYNC_START: T,
        GAME_CLOUD_SYNC_UPDATE: S,
        GAME_CLOUD_SYNC_COMPLETE: g,
        GAME_CLOUD_SYNC_CONFLICT: A,
        GAME_CLOUD_SYNC_ERROR: v,
        RUNNING_GAMES_CHANGE: I
    }));
