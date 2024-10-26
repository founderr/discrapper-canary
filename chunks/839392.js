var a,
    r,
    s,
    i,
    o = n(442837),
    l = n(570140);
let c = {},
    d = {};
class u extends (i = o.ZP.Store) {
    getSimilarGames(e) {
        return c[e];
    }
    getSimilarGamesError(e) {
        return d[e];
    }
}
(s = 'GameProfileStore'),
    (r = 'displayName') in (a = u)
        ? Object.defineProperty(a, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[r] = s),
    (t.Z = new u(l.Z, {
        GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: t, games: n } = e;
            c[t] = n;
        },
        GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
            let { applicationId: t, error: n } = e;
            d[t] = n;
        }
    }));
