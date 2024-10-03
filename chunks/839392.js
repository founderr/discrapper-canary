var t,
    i,
    r,
    o,
    l = n(442837),
    s = n(570140);
let c = {};
class d extends (o = l.ZP.Store) {
    getSimilarGames(e) {
        return c[e];
    }
}
(r = 'GameProfileStore'),
    (i = 'displayName') in (t = d)
        ? Object.defineProperty(t, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (t[i] = r),
    (a.Z = new d(s.Z, {
        GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: a, games: n } = e;
            c[a] = n;
        }
    }));
