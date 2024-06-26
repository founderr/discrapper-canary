var n, s, t, i, r = a(442837),
  o = a(570140);
let c = {};
class d extends(i = r.ZP.Store) {
  getSimilarGames(e) {
    return c[e]
  }
}
t = "GameProfileStore", (s = "displayName") in(n = d) ? Object.defineProperty(n, s, {
  value: t,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[s] = t, l.Z = new d(o.Z, {
  GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function(e) {
    let {
      applicationId: l,
      games: a
    } = e;
    c[l] = a
  }
})