var r,
    i = n(47120);
var a = n(442837),
    o = n(570140);
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
let l = new Set(),
    u = {};
function c(e) {
    let { gameId: t, isLaunchable: n } = e;
    u[t] = n;
}
function d(e) {
    let { applicationId: t } = e;
    l.add(t);
}
function _(e) {
    let { applicationId: t } = e;
    l.delete(t);
}
class E extends (r = a.ZP.Store) {
    get launchingGames() {
        return l;
    }
    get launchableGames() {
        return u;
    }
    isLaunchable(e) {
        return null != u[e]
            ? u[e]
            : ((u[e] = !1),
              o.Z.dispatch({
                  type: 'CHECK_LAUNCHABLE_GAME',
                  gameId: e
              }),
              !1);
    }
}
s(E, 'displayName', 'LaunchableGameStore'),
    (t.Z = new E(o.Z, {
        GAME_LAUNCHABLE_UPDATE: c,
        GAME_CLOUD_SYNC_START: d,
        GAME_LAUNCH_START: d,
        GAME_LAUNCH_SUCCESS: _,
        GAME_LAUNCH_FAIL: _,
        GAME_CLOUD_SYNC_CONFLICT: _,
        GAME_CLOUD_SYNC_ERROR: _,
        GAME_CLOUD_SYNC_COMPLETE: _
    }));
