"use strict";
n.r(t), n.d(t, {
  getNextShownUpcomingEventNoticeType: function() {
    return r
  }
});
var u = n("866227"),
  l = n.n(u),
  i = n("249654"),
  d = n("745049");

function r(e, t, n, u) {
  let r = l(),
    a = new Date(e.scheduled_start_time).getTime(),
    s = {
      start: a - d.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
      end: a
    };
  if (r.isBetween(s.start, s.end)) {
    if (null != t) {
      let e = l(t),
        n = e.isBetween(s.start, s.end),
        i = e.isBetween(l(a).subtract(d.ACKED_RECENTLY_WINDOW_DAYS, "days"), a);
      return n || i && !u ? void 0 : d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
    }
    return d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
  }
  let E = i.default.extractTimestamp(e.id),
    c = Math.min((null != n ? n : E) + d.NEW_EVENT_WINDOW_MILLISECONDS, a),
    o = r.isBetween(E, c);
  if (o && null == t && !u) return d.UpcomingGuildEventNoticeTypes.NEW_EVENT
}