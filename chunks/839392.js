var s,
    r,
    t,
    o,
    i = n(442837),
    l = n(570140);
let c = {};
class _ extends (o = i.ZP.Store) {
    getSimilarGames(e) {
        return c[e];
    }
}
(t = 'GameProfileStore'),
    (r = 'displayName') in (s = _)
        ? Object.defineProperty(s, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[r] = t),
    (a.Z = new _(l.Z, {
        GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: a, games: n } = e;
            c[a] = n;
        }
    }));
