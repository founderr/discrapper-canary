n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(626135),
    l = n(981631);
function a(e) {
    let { problem: t, channel: n, feedback: a, activityApplication: o, analyticsData: r, location: s, rating: c = null } = e;
    i.default.track(l.rMx.ACTIVITY_REPORT_PROBLEM, {
        reason: t,
        guild_id: n.getGuildId(),
        channel_id: n.id,
        application_id: null == o ? void 0 : o.id,
        application_name: null == o ? void 0 : o.name,
        location: s,
        rating: c,
        feedback: a,
        ...r
    });
}
