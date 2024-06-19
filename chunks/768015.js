n.d(a, {
  Z: function() {
    return s
  }
});
var t = n(626135),
  l = n(981631);

function s(e) {
  let {
    problem: a,
    channel: n,
    feedback: s,
    activityApplication: i,
    analyticsData: o,
    location: r,
    rating: c = null
  } = e;
  t.default.track(l.rMx.ACTIVITY_REPORT_PROBLEM, {
    reason: a,
    guild_id: n.getGuildId(),
    channel_id: n.id,
    application_id: null == i ? void 0 : i.id,
    application_name: null == i ? void 0 : i.name,
    location: r,
    rating: c,
    feedback: s,
    ...o
  })
}