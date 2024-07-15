var n, t, r, l, i = s(442837),
  E = s(570140);
let c = {};
class o extends(l = i.ZP.Store) {
  getSimilarGames(e) {
return c[e];
  }
}
r = 'GameProfileStore', (t = 'displayName') in(n = o) ? Object.defineProperty(n, t, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[t] = r, a.Z = new o(E.Z, {
  GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function(e) {
let {
  applicationId: a,
  games: s
} = e;
c[a] = s;
  }
});