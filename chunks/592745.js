var i,
    a = r(47120);
var s = r(442837),
    o = r(570140);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = new Set(),
    c = {};
function d(e) {
    let { gameId: n, isLaunchable: r } = e;
    c[n] = r;
}
function f(e) {
    let { applicationId: n } = e;
    u.add(n);
}
function _(e) {
    let { applicationId: n } = e;
    u.delete(n);
}
class h extends (i = s.ZP.Store) {
    get launchingGames() {
        return u;
    }
    get launchableGames() {
        return c;
    }
    isLaunchable(e) {
        return null != c[e]
            ? c[e]
            : ((c[e] = !1),
              o.Z.dispatch({
                  type: 'CHECK_LAUNCHABLE_GAME',
                  gameId: e
              }),
              !1);
    }
}
l(h, 'displayName', 'LaunchableGameStore'),
    (n.Z = new h(o.Z, {
        GAME_LAUNCHABLE_UPDATE: d,
        GAME_CLOUD_SYNC_START: f,
        GAME_LAUNCH_START: f,
        GAME_LAUNCH_SUCCESS: _,
        GAME_LAUNCH_FAIL: _,
        GAME_CLOUD_SYNC_CONFLICT: _,
        GAME_CLOUD_SYNC_ERROR: _,
        GAME_CLOUD_SYNC_COMPLETE: _
    }));
