r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(442837),
    a = r(311687),
    s = r(873128);
function o(e) {
    let { userId: n, guildId: r, leaderboardId: o, intervalOffset: l = 0, statisticId: u } = e,
        c = (0, i.e7)([a.Z], () => a.Z.getLastUpdateRequested(o)),
        d = null != c ? new Date(1000 * c) : void 0,
        f = (0, s.Z)({
            guildId: r,
            leaderboardId: o,
            intervalOffset: l
        }),
        _ = null == f ? void 0 : f.users.find((e) => e.user_id === n),
        h = null == _ ? void 0 : _.statistics[u];
    return {
        lastUpdateRequested: d,
        statisticLastUpdatedDate: null != h ? new Date(h.updated_at) : void 0
    };
}
