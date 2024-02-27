"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("884691"),
  s = n("917351"),
  u = n.n(s),
  a = n("446674"),
  i = n("634634"),
  o = n("718517"),
  r = n("299039"),
  d = n("933326"),
  c = n("398604"),
  E = n("822516");

function f(e, t, n) {
  let s = (0, a.useStateFromStores)([c.default], () => c.default.getGuildScheduledEvent(e)),
    f = (0, i.default)(n),
    [h, C] = l.useState(null != n && null != s ? (0, E.generateNextRecurrences)(4, (0, E.getRRule)(n), new Date(s.scheduled_start_time)) : []);
  l.useEffect(() => {
    if (null == f || null == n || null == s || u.isEqual(f, n)) return;
    let e = (0, E.getRRule)(n);
    C((0, E.generateNextRecurrences)(h.length, e, new Date(s.scheduled_start_time)))
  }, [n, h.length, s, f]), l.useEffect(() => {
    if (null == t) return;
    let n = h.map(e => r.default.fromTimestamp(Math.floor(e.getTime() / o.default.Millis.SECOND) * o.default.Millis.SECOND));
    d.default.getGuildEventUserCounts(t, e, n)
  }, [e, t, h]);
  let g = l.useMemo(() => {
    if (null == n || 0 === h.length || (null == s ? void 0 : s.scheduled_start_time) == null) return !1;
    let e = new Date;
    e.setFullYear(e.getFullYear() + E.MAX_YEARS_AHEAD_RECURRING_EVENT);
    let t = h[h.length - 1],
      l = (0, E.getRRule)(n),
      u = l.after(t);
    return null != u && u <= e
  }, [n, h, null == s ? void 0 : s.scheduled_start_time]);
  return {
    recurrenceStartTimes: h,
    canViewMoreRecurrences: g,
    updateRecurrenceStartTimes: () => {
      if (null == n || null == s) return;
      let e = (0, E.getRRule)(n),
        t = h[h.length - 1];
      C([...h, ...(0, E.generateNextRecurrences)(4, e, t, !0)])
    }
  }
}