"use strict";
n.r(t), n.d(t, {
  getNextShownUpcomingEventNoticeType: function() {
    return s
  }
});
var l = n("913527"),
  u = n.n(l),
  a = n("709054"),
  d = n("765305");

function s(e, t, n, l) {
  let s = u()(),
    i = new Date(e.scheduled_start_time).getTime(),
    r = {
      start: i - d.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
      end: i
    };
  if (s.isBetween(r.start, r.end)) {
    if (null != t) {
      let e = u()(t),
        n = e.isBetween(r.start, r.end),
        a = e.isBetween(u()(i).subtract(d.ACKED_RECENTLY_WINDOW_DAYS, "days"), i);
      return n || a && !l ? void 0 : d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
    }
    return d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
  }
  let o = a.default.extractTimestamp(e.id),
    c = Math.min((null != n ? n : o) + d.NEW_EVENT_WINDOW_MILLISECONDS, i);
  if (s.isBetween(o, c) && null == t && !l) return d.UpcomingGuildEventNoticeTypes.NEW_EVENT
}