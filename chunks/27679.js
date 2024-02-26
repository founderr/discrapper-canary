"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("299039"),
  r = n("322224"),
  a = n("822516");

function s(e, t, n, s) {
  let u = (0, a.getBaseScheduleForRecurrence)(t, e),
    i = (0, a.areDatesIdentical)(u.startDate, n.startDate) ? null : n.startDate,
    d = (0, a.areDatesIdentical)(u.endDate, n.endDate) ? null : n.endDate;
  if (null != s) return (0, a.areSchedulesIdentical)(n, u) ? r.default.deleteGuildEventException(e.guild_id, e.id, s.event_exception_id) : r.default.updateGuildEventException({
    scheduled_start_time: null == i ? void 0 : i.toISOString(),
    scheduled_end_time: null == d ? void 0 : d.toISOString(),
    is_canceled: s.is_canceled
  }, e.guild_id, e.id, t);
  {
    let n = l.default.extractTimestamp(t);
    return r.default.createGuildEventException({
      original_scheduled_start_time: new Date(n).toISOString(),
      scheduled_start_time: null == i ? void 0 : i.toISOString(),
      scheduled_end_time: null == d ? void 0 : d.toISOString(),
      is_canceled: !1
    }, e.guild_id, e.id)
  }
}