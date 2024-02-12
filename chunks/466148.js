"use strict";
t.r(n), t.d(n, {
  default: function() {
    return d
  },
  getEventSchedule: function() {
    return o
  }
});
var l = t("627445"),
  s = t.n(l),
  i = t("446674"),
  a = t("398604"),
  u = t("397680"),
  r = t("822516");

function d(e, n, t) {
  var l;
  let d = null !== (l = (0, i.useStateFromStores)([a.default], () => a.default.getGuildScheduledEvent(e))) && void 0 !== l ? l : t;
  s(null != d, "Event must be defined"), n = null != n ? n : (0, r.getNextRecurrenceIdInEvent)(d);
  let o = (0, u.default)(n, e);
  return c(d, o, n)
}

function o(e, n) {
  let t = (0, u.getEventException)(n, e.id);
  return c(e, t, n)
}

function c(e, n, t) {
  if (null == e.recurrence_rule || null == t) return {
    startTime: new Date(e.scheduled_start_time),
    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
  };
  let l = (0, r.getBaseScheduleForRecurrence)(t, e),
    {
      startDate: s,
      endDate: i
    } = (0, r.getScheduleForRecurrenceWithException)(l, n);
  return {
    startTime: s.toDate(),
    endTime: null == i ? void 0 : i.toDate()
  }
}