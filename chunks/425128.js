n.d(t, {
    _: function () {
        return E;
    },
    p: function () {
        return _;
    }
});
var r = n(392711);
var i = n(913527),
    a = n.n(i),
    o = n(544891),
    s = n(881052),
    l = n(709054),
    u = n(235070),
    c = n(981631);
let d = 900000,
    _ = async (e) => {
        let { guildId: t, leaderboardId: n, intervalOffset: i = 0 } = e;
        try {
            var _;
            let e = (
                    await o.tn.get({
                        url: c.ANM.GUILD_LEADERBOARD(t, n),
                        query: { interval_offset: i }
                    })
                ).body,
                s = null !== (_ = e.wait_ms_until_next_fetch) && void 0 !== _ ? _ : d;
            null != s && (e.expires_at = Date.now() + s);
            let E = (0, u.A)(n),
                { sortByStatisticId: f, sortDesc: h } = E,
                p = h ? -1 / 0 : 1 / 0,
                m = h ? 'desc' : 'asc';
            return (
                (e.leaderboard.users = (0, r.orderBy)(
                    e.leaderboard.users,
                    (e) => {
                        var t, n;
                        return null !== (n = null === (t = e.statistics[f]) || void 0 === t ? void 0 : t.value) && void 0 !== n ? n : p;
                    },
                    m
                )),
                (e.leaderboard.settings = E),
                (e.leaderboard.interval_end = l.default.fromTimestamp(1000 * a()(l.default.extractTimestamp(e.leaderboard.interval_start)).add(1, 'week').unix())),
                e
            );
        } catch (e) {
            throw new s.Hx(e);
        }
    },
    E = async (e, t) => {
        try {
            await o.tn.post({
                url: c.ANM.UPDATE_MY_LOL_LEADERBOARD(),
                body: {
                    riot_connection_id: e,
                    lol_connection_id: t
                }
            });
        } catch (e) {
            throw new s.Hx(e);
        }
    };
