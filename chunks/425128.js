n.d(t, {
    p: function () {
        return s;
    }
});
var r = n(544891),
    i = n(881052),
    a = n(981631);
let o = 900000,
    s = async (e) => {
        let { guildId: t, leaderboardId: n, intervalOffset: s = 0 } = e;
        try {
            var l;
            let e = (
                    await r.tn.get({
                        url: a.ANM.GUILD_LEADERBOARD(t, n),
                        query: { interval_offset: s }
                    })
                ).body,
                i = null !== (l = e.wait_ms_until_next_fetch) && void 0 !== l ? l : o;
            return null != i && (e.expires_at = Date.now() + i), e;
        } catch (e) {
            throw new i.Hx(e);
        }
    };
