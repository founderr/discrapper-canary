n.d(t, {
    p: function () {
        return s;
    }
});
var r = n(544891),
    i = n(881052),
    a = n(981631);
let s = async (e) => {
    let { guildId: t, leaderboardId: n, intervalOffset: s = 0 } = e;
    try {
        var o;
        let e = (
                await r.tn.get({
                    url: a.ANM.GUILD_LEADERBOARD(t, n),
                    query: { interval_offset: s }
                })
            ).body,
            i = null !== (o = e.wait_ms_until_next_fetch) && void 0 !== o ? o : 900000;
        return null != i && (e.expires_at = Date.now() + i), e;
    } catch (e) {
        throw new i.Hx(e);
    }
};
