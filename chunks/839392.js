var n, t, r, l, i = s(442837),
  c = s(570140);
let o = {};
class E extends(l = i.ZP.Store) {
  getSimilarGames(e) {
return o[e];
  }
}
r = 'GameProfileStore', (t = 'displayName') in(n = E) ? Object.defineProperty(n, t, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[t] = r, a.Z = new E(c.Z, {
  GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function(e) {
let {
  applicationId: a,
  games: s
} = e;
o[a] = s;
  }
});