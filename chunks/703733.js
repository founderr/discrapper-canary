n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(442837),
    i = n(311687),
    a = n(873128);
function s(e) {
    let { userId: t, guildId: n, leaderboardId: s, intervalOffset: o = 0, statisticId: l } = e,
        u = (0, r.e7)([i.Z], () => i.Z.getLastUpdateRequested(s)),
        c = (0, a.Z)({
            guildId: n,
            leaderboardId: s,
            intervalOffset: o
        }),
        d = null == c ? void 0 : c.users.find((e) => e.user_id === t),
        _ = null == d ? void 0 : d.statistics[l];
    return {
        lastUpdateRequested: u,
        statisticLastUpdatedDate: null != _ ? new Date(_.updated_at) : void 0
    };
}
