"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  },
  getEventSchedule: function() {
    return u
  },
  useEventScheduleById: function() {
    return l
  }
});
var i = n("442837"),
  r = n("924301"),
  s = n("894017"),
  a = n("854698");

function o(e, t) {
  t = null != t ? t : (0, a.getNextRecurrenceIdInEvent)(e);
  let n = (0, s.default)(t, e.id);
  return d(e, n, t)
}

function l(e, t) {
  let n = (0, i.useStateFromStores)([r.default], () => r.default.getGuildScheduledEvent(e));
  t = null != t ? t : (0, a.getNextRecurrenceIdInEvent)(n);
  let o = (0, s.default)(t, null == n ? void 0 : n.id);
  return null == n ? null : d(n, o, t)
}

function u(e, t) {
  let n = (0, s.getEventException)(t, e.id);
  return d(e, n, t)
}

function d(e, t, n) {
  if (null == e.recurrence_rule || null == n) return {
    startTime: new Date(e.scheduled_start_time),
    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
  };
  let i = (0, a.getBaseScheduleForRecurrence)(n, e),
    {
      startDate: r,
      endDate: s
    } = (0, a.getScheduleForRecurrenceWithException)(i, t);
  return {
    startTime: r.toDate(),
    endTime: null == s ? void 0 : s.toDate()
  }
}