"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  },
  getEventSchedule: function() {
    return o
  }
});
var l = n("627445"),
  a = n.n(l),
  i = n("446674"),
  u = n("398604"),
  r = n("397680"),
  s = n("822516");

function d(e, t, n) {
  var l;
  let d = null !== (l = (0, i.useStateFromStores)([u.default], () => u.default.getGuildScheduledEvent(e))) && void 0 !== l ? l : n;
  a(null != d, "Event must be defined"), t = null != t ? t : (0, s.getNextRecurrenceIdInEvent)(d);
  let o = (0, r.default)(t, e);
  return c(d, o, t)
}

function o(e, t) {
  let n = (0, r.getEventException)(t, e.id);
  return c(e, n, t)
}

function c(e, t, n) {
  if (null == e.recurrence_rule || null == n) return {
    startTime: new Date(e.scheduled_start_time),
    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
  };
  let l = (0, s.getBaseScheduleForRecurrence)(n, e),
    {
      startDate: a,
      endDate: i
    } = (0, s.getScheduleForRecurrenceWithException)(l, t);
  return {
    startTime: a.toDate(),
    endTime: null == i ? void 0 : i.toDate()
  }
}