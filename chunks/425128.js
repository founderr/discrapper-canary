n.d(t, {
    _: function () {
        return c;
    },
    p: function () {
        return u;
    }
});
var r = n(392711);
var i = n(544891),
    a = n(881052),
    o = n(235070),
    s = n(981631);
let l = 900000,
    u = async (e) => {
        let { guildId: t, leaderboardId: n, intervalOffset: u = 0 } = e;
        try {
            var c;
            let e = (
                    await i.tn.get({
                        url: s.ANM.GUILD_LEADERBOARD(t, n),
                        query: { interval_offset: u }
                    })
                ).body,
                a = null !== (c = e.wait_ms_until_next_fetch) && void 0 !== c ? c : l;
            null != a && (e.expires_at = Date.now() + a);
            let d = (0, o.A)(n),
                { sortByStatisticId: _, sortDesc: E } = d,
                f = E ? -1 / 0 : 1 / 0,
                h = E ? 'desc' : 'asc';
            return (
                (e.leaderboard.users = (0, r.orderBy)(
                    e.leaderboard.users,
                    (e) => {
                        var t, n;
                        return null !== (n = null === (t = e.statistics[_]) || void 0 === t ? void 0 : t.value) && void 0 !== n ? n : f;
                    },
                    h
                )),
                (e.leaderboard.settings = d),
                e
            );
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    c = async (e, t) => {
        try {
            await i.tn.post({
                url: s.ANM.UPDATE_MY_LOL_LEADERBOARD(),
                body: {
                    riot_connection_id: e,
                    lol_connection_id: t
                }
            });
        } catch (e) {
            throw new a.Hx(e);
        }
    };
