"use strict";
a.r(t), a.d(t, {
  default: function() {
    return n
  }
});
var l = a("626135"),
  s = a("981631");

function n(e) {
  let {
    problem: t,
    channel: a,
    feedback: n,
    activityApplication: i,
    analyticsData: c,
    location: d,
    rating: o = null
  } = e;
  l.default.track(s.AnalyticEvents.ACTIVITY_REPORT_PROBLEM, {
    reason: t,
    guild_id: a.getGuildId(),
    channel_id: a.id,
    application_id: null == i ? void 0 : i.id,
    application_name: null == i ? void 0 : i.name,
    location: d,
    rating: o,
    feedback: n,
    ...c
  })
}