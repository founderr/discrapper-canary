a.d(n, {
  Z: function() {
    return t
  }
});
var s = a(626135),
  l = a(981631);

function t(e) {
  let {
    problem: n,
    stream: a,
    feedback: t,
    streamApplication: r,
    analyticsData: i,
    location: o,
    rating: c = null
  } = e;
  s.default.track(l.rMx.STREAM_REPORT_PROBLEM, {
    reason: n,
    streamer_user_id: a.ownerId,
    stream_channel_id: a.channelId,
    guild_id: a.guildId,
    application_id: null != r ? r.id : null,
    application_name: null != r ? r.name : null,
    location: o,
    rating: c,
    feedback: t,
    ...i
  })
}