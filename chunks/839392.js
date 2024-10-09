var t,
    r,
    s,
    i,
    o = a(442837),
    l = a(570140);
let c = {};
class d extends (i = o.ZP.Store) {
    getSimilarGames(e) {
        return c[e];
    }
}
(s = 'GameProfileStore'),
    (r = 'displayName') in (t = d)
        ? Object.defineProperty(t, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (t[r] = s),
    (n.Z = new d(l.Z, {
        GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: n, games: a } = e;
            c[n] = a;
        }
    }));
