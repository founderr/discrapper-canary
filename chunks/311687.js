var i,
    a = r(442837),
    s = r(570140);
function o(e, n, r) {
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
let l = (() => ({ lastUpdateRequested: {} }))();
function u(e) {
    let { lastUpdateRequested: n, leaderboardId: r } = e;
    l.lastUpdateRequested[r] = n;
}
class c extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        l = {
            ...l,
            ...(null != e ? e : {})
        };
    }
    getState() {
        return l;
    }
    getLastUpdateRequested(e) {
        return l.lastUpdateRequested[e];
    }
}
o(c, 'displayName', 'UserLeaderboardStore'), o(c, 'persistKey', 'UserLeaderboardStore'), (n.Z = new c(s.Z, { SET_USER_LEADERBOARD_LAST_UPDATE_REQUESTED: u }));
