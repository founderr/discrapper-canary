n.d(t, {
    Z: function () {
        return l;
    }
});
var a = n(626135),
    s = n(981631);
function l(e) {
    let { problem: t, stream: n, feedback: l, streamApplication: o, analyticsData: r, location: i, rating: c = null } = e;
    a.default.track(s.rMx.STREAM_REPORT_PROBLEM, {
        reason: t,
        streamer_user_id: n.ownerId,
        stream_channel_id: n.channelId,
        guild_id: n.guildId,
        application_id: null != o ? o.id : null,
        application_name: null != o ? o.name : null,
        location: i,
        rating: c,
        feedback: l,
        ...r
    });
}
