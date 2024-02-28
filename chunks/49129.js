"use strict";
n.r(t), n.d(t, {
  getNextShownUpcomingEventNoticeType: function() {
    return r
  }
});
var l = n("866227"),
  u = n.n(l),
  i = n("299039"),
  a = n("745049");

function r(e, t, n, l) {
  let r = u(),
    s = new Date(e.scheduled_start_time).getTime(),
    d = {
      start: s - a.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
      end: s
    };
  if (r.isBetween(d.start, d.end)) {
    if (null != t) {
      let e = u(t),
        n = e.isBetween(d.start, d.end),
        i = e.isBetween(u(s).subtract(a.ACKED_RECENTLY_WINDOW_DAYS, "days"), s);
      return n || i && !l ? void 0 : a.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
    }
    return a.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
  }
  let o = i.default.extractTimestamp(e.id),
    c = Math.min((null != n ? n : o) + a.NEW_EVENT_WINDOW_MILLISECONDS, s),
    f = r.isBetween(o, c);
  if (f && null == t && !l) return a.UpcomingGuildEventNoticeTypes.NEW_EVENT
}