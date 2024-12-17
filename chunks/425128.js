r.d(n, {
    _7: function () {
        return d;
    },
    _b: function () {
        return f;
    },
    pV: function () {
        return c;
    }
});
var i = r(544891),
    a = r(570140),
    s = r(881052),
    o = r(463031),
    l = r(981631);
let u = 900000,
    c = async (e) => {
        let { guildId: n, leaderboardId: r, intervalOffset: a = 0, force: o = !1 } = e;
        try {
            var c;
            let e = (
                    await i.tn.get({
                        url: l.ANM.GUILD_LEADERBOARD(n, r),
                        query: {
                            interval_offset: a,
                            cached: !o
                        },
                        rejectWithError: !1
                    })
                ).body,
                s = null !== (c = e.wait_ms_until_next_fetch) && void 0 !== c ? c : u;
            return null != s && (e.expires_at = Date.now() + s), e;
        } catch (e) {
            throw new s.Hx(e);
        }
    },
    d = async (e) => {
        let { riotConnectionId: n, lolConnectionId: r, onlyUpdateIfStale: u } = e;
        try {
            let e = (
                await i.tn.post({
                    url: l.ANM.UPDATE_MY_LOL_LEADERBOARD(),
                    body: {
                        riot_connection_id: n,
                        lol_connection_id: r,
                        only_update_if_stale: u
                    },
                    rejectWithError: !1
                })
            ).body;
            return (
                null != e.update_enqueued_timestamp &&
                    a.Z.dispatch({
                        type: 'SET_USER_LEADERBOARD_LAST_UPDATE_REQUESTED',
                        leaderboardId: o.z,
                        lastUpdateRequested: e.update_enqueued_timestamp
                    }),
                e
            );
        } catch (e) {
            throw new s.Hx(e);
        }
    },
    f = async (e) => {
        let { guildId: n, leaderboardId: r, sortByStatisticId: a, sortDesc: o, showWinnerCrown: u } = e;
        try {
            return (
                await i.tn.put({
                    url: l.ANM.GUILD_LEADERBOARD_SETTINGS(n, r),
                    body: {
                        sort_by_statistic_id: a,
                        sort_desc: o,
                        show_winner_crown: u
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new s.Hx(e);
        }
    };
