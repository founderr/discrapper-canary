"use strict";
l.r(t), l.d(t, {
  getNextShownUpcomingEventNoticeType: function() {
    return s
  }
});
var n = l("913527"),
  u = l.n(n),
  a = l("709054"),
  d = l("765305");

function s(e, t, l, n) {
  let s = u()(),
    i = new Date(e.scheduled_start_time).getTime(),
    r = {
      start: i - d.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
      end: i
    };
  if (s.isBetween(r.start, r.end)) {
    if (null != t) {
      let e = u()(t),
        l = e.isBetween(r.start, r.end),
        a = e.isBetween(u()(i).subtract(d.ACKED_RECENTLY_WINDOW_DAYS, "days"), i);
      return l || a && !n ? void 0 : d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
    }
    return d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
  }
  let o = a.default.extractTimestamp(e.id),
    E = Math.min((null != l ? l : o) + d.NEW_EVENT_WINDOW_MILLISECONDS, i);
  if (s.isBetween(o, E) && null == t && !n) return d.UpcomingGuildEventNoticeTypes.NEW_EVENT
}