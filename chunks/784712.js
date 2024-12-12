r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(626135),
    a = r(479313),
    s = r(981631);
function o(e) {
    let { summary: n, guildId: r, channelId: o, rating: l = null, problem: u = null, feedback: c = '', location: d } = e;
    (0, a.U$)(n, l),
        i.default.track(s.rMx.SUMMARIES_REPORT_PROBLEM, {
            reason: u,
            location: d,
            rating: l,
            feedback: c,
            participant_count: n.people.length,
            message_count: n.count,
            start_message_id: n.startId,
            guild_id: r,
            channel_id: o,
            summary_id: n.id,
            summary_source: n.source,
            summary_type: n.type
        });
}
