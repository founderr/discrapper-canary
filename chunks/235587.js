var i,
    a = r(47120);
var s = r(442837),
    o = r(902704),
    l = r(570140),
    u = r(709054);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function d(e, n, r) {
    return ''.concat(e, ',').concat(n, ',').concat(r);
}
let f = () => ({
        currentLeaderboardRanks: {},
        prevLeaderboardRanks: {}
    }),
    _ = f();
function h(e) {
    var n;
    let { leaderboardResponse: r, intervalOffset: i } = e;
    if (0 !== i) return !1;
    let { leaderboard: a } = r,
        s = d(a.guild_id, a.leaderboard_id, a.interval_start),
        l = {
            ranks: a.users.map((e) => e.user_id),
            ttl: u.default.extractTimestamp(a.interval_end)
        },
        c = _.currentLeaderboardRanks[s];
    if ((0, o.E)(l.ranks, null !== (n = null == c ? void 0 : c.ranks) && void 0 !== n ? n : [])) return !1;
    (_.prevLeaderboardRanks[s] = c), (_.currentLeaderboardRanks[s] = l);
}
function p() {
    let e = Date.now();
    for (let [n, r] of Object.entries(_.prevLeaderboardRanks)) (null == r || e > r.ttl) && delete _.prevLeaderboardRanks[n];
    for (let [n, r] of Object.entries(_.currentLeaderboardRanks)) (null == r || e > r.ttl) && delete _.currentLeaderboardRanks[n];
}
class m extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        return (
            (_ = {
                ..._,
                ...(null != e ? e : {})
            }),
            p(),
            !0
        );
    }
    getState() {
        return _;
    }
    getPrevLeaderboardRanks(e, n, r) {
        let i = d(e, n, r);
        return _.prevLeaderboardRanks[i];
    }
    getCurrentLeaderboardRanks(e, n, r) {
        let i = d(e, n, r);
        return _.currentLeaderboardRanks[i];
    }
    reset() {
        _ = f();
    }
}
c(m, 'displayName', 'GuildLeaderboardRanksStore'), c(m, 'persistKey', 'GuildLeaderboardRanksStore'), (n.Z = new m(l.Z, { SET_GUILD_LEADERBOARD: h }));
