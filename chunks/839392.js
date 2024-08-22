var s,
    t,
    r,
    o,
    i = n(442837),
    l = n(570140);
let c = {};
class _ extends (o = i.ZP.Store) {
    getSimilarGames(e) {
        return c[e];
    }
}
(r = 'GameProfileStore'),
    (t = 'displayName') in (s = _)
        ? Object.defineProperty(s, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[t] = r),
    (a.Z = new _(l.Z, {
        GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: a, games: n } = e;
            c[a] = n;
        }
    }));
