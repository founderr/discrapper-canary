n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140);
let u = new Map();
class c extends (r = o.ZP.Store) {
    get(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return null === (n = this.getLeaderboardResponse(e, t, r)) || void 0 === n ? void 0 : n.leaderboard;
    }
    getLeaderboardResponse(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return null === (r = u.get(i)) || void 0 === r ? void 0 : null === (n = r.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
}
(s = 'GuildLeaderboardStore'),
    (a = 'displayName') in (i = c)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new c(l.Z, {
        CONNECTION_OPEN: function () {
            u = new Map();
        },
        SET_GUILD_LEADERBOARD: function (e) {
            let { leaderboardResponse: t, intervalOffset: n } = e,
                { leaderboard: r } = t,
                { guild_id: i, leaderboard_id: a } = r,
                s = u.get(n);
            null == s && ((s = new Map()), u.set(n, s));
            let o = s.get(i);
            null == o && ((o = new Map()), s.set(i, o)), o.set(a, t);
        }
    }));
