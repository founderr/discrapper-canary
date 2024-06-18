"use strict";
let i;
var r, s, o, a, l = n(442837),
  u = n(570140),
  _ = n(594190),
  c = n(77498);
class d extends(a = l.ZP.Store) {
  getGameForPID(e) {
    var t;
    if (__OVERLAY__ || null == e) return null;
    let n = null === (t = _.ZP.getGameForPID(e)) || void 0 === t ? void 0 : t.name;
    return c.Z.getGameByName(n)
  }
  getGame() {
    return __OVERLAY__ ? i : null
  }
}
o = "OverlayRunningGameStore", (s = "displayName") in(r = d) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new d(u.Z, {
  OVERLAY_INITIALIZE: function(e) {
    i = e.currentGame
  },
  OVERLAY_SET_ASSOCIATED_GAME: function(e) {
    i = e.associatedGame
  }
})