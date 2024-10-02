var t,
    i,
    o,
    r,
    l = n(442837),
    s = n(570140);
let c = {};
class d extends (r = l.ZP.Store) {
    getSimilarGames(e) {
        return c[e];
    }
}
(o = 'GameProfileStore'),
    (i = 'displayName') in (t = d)
        ? Object.defineProperty(t, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (t[i] = o),
    (a.Z = new d(s.Z, {
        GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: a, games: n } = e;
            c[a] = n;
        }
    }));
