var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(664674);
function l(e, t, n) {
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
let u = !1,
    c = new Map();
function d(e) {
    let { leaderboardResponse: t, intervalOffset: n } = e,
        { leaderboard: r } = t,
        { guild_id: i, leaderboard_id: a } = r,
        o = c.get(n);
    null == o && ((o = new Map()), c.set(n, o));
    let s = o.get(i);
    null == s && ((s = new Map()), o.set(i, s)), s.set(a, t);
}
function _() {
    c = new Map();
}
class E extends (r = a.ZP.Store) {
    getLeaderboards(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null === (t = c.get(n)) || void 0 === t ? void 0 : t.get(e);
    }
    get(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return u ? s.Z : null === (n = this.getLeaderboardResponse(e, t, r)) || void 0 === n ? void 0 : n.leaderboard;
    }
    getLeaderboardResponse(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return null === (r = c.get(i)) || void 0 === r ? void 0 : null === (n = r.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
}
l(E, 'displayName', 'GuildLeaderboardStore'),
    (t.Z = new E(o.Z, {
        CONNECTION_OPEN: _,
        SET_GUILD_LEADERBOARD: d
    }));
