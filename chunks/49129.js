"use strict";
n.r(t), n.d(t, {
  getNextShownUpcomingEventNoticeType: function() {
    return d
  }
});
var l = n("866227"),
  u = n.n(l),
  a = n("249654"),
  i = n("745049");

function d(e, t, n, l) {
  let d = u(),
    r = new Date(e.scheduled_start_time).getTime(),
    s = {
      start: r - i.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
      end: r
    };
  if (d.isBetween(s.start, s.end)) {
    if (null != t) {
      let e = u(t),
        n = e.isBetween(s.start, s.end),
        a = e.isBetween(u(r).subtract(i.ACKED_RECENTLY_WINDOW_DAYS, "days"), r);
      return n || a && !l ? void 0 : i.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
    }
    return i.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
  }
  let o = a.default.extractTimestamp(e.id),
    c = Math.min((null != n ? n : o) + i.NEW_EVENT_WINDOW_MILLISECONDS, r),
    E = d.isBetween(o, c);
  if (E && null == t && !l) return i.UpcomingGuildEventNoticeTypes.NEW_EVENT
}