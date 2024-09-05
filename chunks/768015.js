n.d(t, {
    Z: function () {
        return l;
    }
});
var a = n(626135),
    s = n(981631);
function l(e) {
    let { problem: t, channel: n, feedback: l, activityApplication: i, analyticsData: o, location: r, rating: c = null } = e;
    a.default.track(s.rMx.ACTIVITY_REPORT_PROBLEM, {
        reason: t,
        guild_id: n.getGuildId(),
        channel_id: n.id,
        application_id: null == i ? void 0 : i.id,
        application_name: null == i ? void 0 : i.name,
        location: r,
        rating: c,
        feedback: l,
        ...o
    });
}
