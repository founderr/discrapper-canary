a.d(n, {
  Z: function() {
return s;
  }
});
var t = a(626135),
  l = a(981631);

function s(e) {
  let {
problem: n,
stream: a,
feedback: s,
streamApplication: r,
analyticsData: o,
location: i,
rating: c = null
  } = e;
  t.default.track(l.rMx.STREAM_REPORT_PROBLEM, {
reason: n,
streamer_user_id: a.ownerId,
stream_channel_id: a.channelId,
guild_id: a.guildId,
application_id: null != r ? r.id : null,
application_name: null != r ? r.name : null,
location: i,
rating: c,
feedback: s,
...o
  });
}