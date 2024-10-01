n(47120);
var a,
    l = n(442837),
    i = n(902704),
    r = n(570140),
    s = n(709054);
function o(e, t, n) {
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
function u(e, t, n) {
    return ''.concat(e, ',').concat(t, ',').concat(n);
}
let c = () => ({
        currentLeaderboardRanks: {},
        prevLeaderboardRanks: {}
    }),
    d = c();
class h extends (a = l.ZP.PersistedStore) {
    initialize(e) {
        return (
            (d = {
                ...d,
                ...(null != e ? e : {})
            }),
            !(function () {
                let e = Date.now();
                for (let [t, n] of Object.entries(d.prevLeaderboardRanks)) (null == n || e > n.ttl) && delete d.prevLeaderboardRanks[t];
                for (let [t, n] of Object.entries(d.currentLeaderboardRanks)) (null == n || e > n.ttl) && delete d.currentLeaderboardRanks[t];
            })(),
            !0
        );
    }
    getState() {
        return d;
    }
    getPrevLeaderboardRanks(e, t, n) {
        let a = u(e, t, n);
        return d.prevLeaderboardRanks[a];
    }
    getCurrentLeaderboardRanks(e, t, n) {
        let a = u(e, t, n);
        return d.currentLeaderboardRanks[a];
    }
    reset() {
        d = c();
    }
}
o(h, 'displayName', 'GuildLeaderboardRanksStore'),
    o(h, 'persistKey', 'GuildLeaderboardRanksStore'),
    (t.Z = new h(r.Z, {
        SET_GUILD_LEADERBOARD: function (e) {
            var t;
            let { leaderboardResponse: n, intervalOffset: a } = e;
            if (0 !== a) return !1;
            let { leaderboard: l } = n,
                r = u(l.guild_id, l.leaderboard_id, l.interval_start),
                o = {
                    ranks: l.users.map((e) => e.user_id),
                    ttl: s.default.extractTimestamp(l.interval_end)
                },
                c = d.currentLeaderboardRanks[r];
            if ((0, i.E)(o.ranks, null !== (t = null == c ? void 0 : c.ranks) && void 0 !== t ? t : [])) return !1;
            (d.prevLeaderboardRanks[r] = c), (d.currentLeaderboardRanks[r] = o);
        }
    }));
