var r,
    i = n(47120);
var a = n(442837),
    o = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = new Map();
function u(e) {
    let { leaderboardResponse: t, intervalOffset: n } = e,
        { leaderboard: r } = t,
        { guild_id: i, leaderboard_id: a } = r,
        o = l.get(n);
    null == o && ((o = new Map()), l.set(n, o));
    let s = o.get(i);
    null == s && ((s = new Map()), o.set(i, s)), s.set(a, t);
}
function c() {
    l = new Map();
}
class d extends (r = a.ZP.Store) {
    getLeaderboards(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null === (t = l.get(n)) || void 0 === t ? void 0 : t.get(e);
    }
    get(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return null === (n = this.getLeaderboardResponse(e, t, r)) || void 0 === n ? void 0 : n.leaderboard;
    }
    getLeaderboardResponse(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return null === (r = l.get(i)) || void 0 === r ? void 0 : null === (n = r.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
}
s(d, 'displayName', 'GuildLeaderboardStore'),
    (t.Z = new d(o.Z, {
        CONNECTION_OPEN: c,
        SET_GUILD_LEADERBOARD: u
    }));
