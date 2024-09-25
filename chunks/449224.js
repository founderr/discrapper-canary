let r;
var i,
    a = n(442837),
    o = n(570140),
    s = n(594190),
    l = n(77498);
function u(e, t, n) {
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
function c(e) {
    r = e.currentGame;
}
function d(e) {
    r = e.associatedGame;
}
class _ extends (i = a.ZP.Store) {
    getGameForPID(e) {
        var t;
        if (__OVERLAY__ || null == e) return null;
        let n = null === (t = s.ZP.getGameForPID(e)) || void 0 === t ? void 0 : t.name;
        return l.Z.getGameByName(n);
    }
    getGame() {
        return __OVERLAY__ ? r : null;
    }
}
u(_, 'displayName', 'OverlayRunningGameStore'),
    (t.Z = new _(o.Z, {
        OVERLAY_INITIALIZE: c,
        OVERLAY_SET_ASSOCIATED_GAME: d
    }));
