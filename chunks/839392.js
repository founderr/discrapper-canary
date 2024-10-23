var a,
    r,
    s,
    i,
    o = t(442837),
    l = t(570140);
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
    (n.Z = new u(l.Z, {
        GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: n, games: t } = e;
            c[n] = t;
        },
        GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
            let { applicationId: n, error: t } = e;
            d[n] = t;
        }
    }));
