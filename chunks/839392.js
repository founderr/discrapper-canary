var n, t, l, r, i = s(442837),
  o = s(570140);
let c = {};
class E extends(r = i.ZP.Store) {
  getSimilarGames(e) {
return c[e];
  }
}
l = 'GameProfileStore', (t = 'displayName') in(n = E) ? Object.defineProperty(n, t, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[t] = l, a.Z = new E(o.Z, {
  GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function(e) {
let {
  applicationId: a,
  games: s
} = e;
c[a] = s;
  }
});