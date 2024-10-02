var r,
    i = n(47120);
var a = n(442837),
    o = n(902704),
    s = n(570140),
    l = n(709054);
function u(e, t, n) {
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
function c(e, t, n) {
    return ''.concat(e, ',').concat(t, ',').concat(n);
}
let d = () => ({
        currentLeaderboardRanks: {},
        prevLeaderboardRanks: {}
    }),
    _ = d();
function E(e) {
    var t;
    let { leaderboardResponse: n, intervalOffset: r } = e;
    if (0 !== r) return !1;
    let { leaderboard: i } = n,
        a = c(i.guild_id, i.leaderboard_id, i.interval_start),
        s = {
            ranks: i.users.map((e) => e.user_id),
            ttl: l.default.extractTimestamp(i.interval_end)
        },
        u = _.currentLeaderboardRanks[a];
    if ((0, o.E)(s.ranks, null !== (t = null == u ? void 0 : u.ranks) && void 0 !== t ? t : [])) return !1;
    (_.prevLeaderboardRanks[a] = u), (_.currentLeaderboardRanks[a] = s);
}
function f() {
    let e = Date.now();
    for (let [t, n] of Object.entries(_.prevLeaderboardRanks)) (null == n || e > n.ttl) && delete _.prevLeaderboardRanks[t];
    for (let [t, n] of Object.entries(_.currentLeaderboardRanks)) (null == n || e > n.ttl) && delete _.currentLeaderboardRanks[t];
}
class h extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        return (
            (_ = {
                ..._,
                ...(null != e ? e : {})
            }),
            f(),
            !0
        );
    }
    getState() {
        return _;
    }
    getPrevLeaderboardRanks(e, t, n) {
        let r = c(e, t, n);
        return _.prevLeaderboardRanks[r];
    }
    getCurrentLeaderboardRanks(e, t, n) {
        let r = c(e, t, n);
        return _.currentLeaderboardRanks[r];
    }
    reset() {
        _ = d();
    }
}
u(h, 'displayName', 'GuildLeaderboardRanksStore'), u(h, 'persistKey', 'GuildLeaderboardRanksStore'), (t.Z = new h(s.Z, { SET_GUILD_LEADERBOARD: E }));
