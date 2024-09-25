var a,
    r,
    s,
    o,
    i = t(442837),
    l = t(570140);
let c = {};
class d extends (o = i.ZP.Store) {
    getSimilarGames(e) {
        return c[e];
    }
}
(s = 'GameProfileStore'),
    (r = 'displayName') in (a = d)
        ? Object.defineProperty(a, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[r] = s),
    (n.Z = new d(l.Z, {
        GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: n, games: t } = e;
            c[n] = t;
        }
    }));
