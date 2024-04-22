"use strict";
n.r(t), n.d(t, {
  getNextShownUpcomingEventNoticeType: function() {
    return d
  }
});
var u = n("913527"),
  l = n.n(u),
  i = n("709054"),
  r = n("765305");

function d(e, t, n, u) {
  let d = l()(),
    a = new Date(e.scheduled_start_time).getTime(),
    s = {
      start: a - r.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
      end: a
    };
  if (d.isBetween(s.start, s.end)) {
    if (null != t) {
      let e = l()(t),
        n = e.isBetween(s.start, s.end),
        i = e.isBetween(l()(a).subtract(r.ACKED_RECENTLY_WINDOW_DAYS, "days"), a);
      return n || i && !u ? void 0 : r.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
    }
    return r.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
  }
  let o = i.default.extractTimestamp(e.id),
    c = Math.min((null != n ? n : o) + r.NEW_EVENT_WINDOW_MILLISECONDS, a);
  if (d.isBetween(o, c) && null == t && !u) return r.UpcomingGuildEventNoticeTypes.NEW_EVENT
}