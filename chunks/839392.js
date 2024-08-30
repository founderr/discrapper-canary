var t,
    r,
    s,
    o,
    i = n(442837),
    l = n(570140);
let c = {};
class d extends (o = i.ZP.Store) {
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
    (a.Z = new d(l.Z, {
        GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: a, games: n } = e;
            c[a] = n;
        }
    }));
