n.d(t, {
  Z: function() {
    return h
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(502568),
  a = n(894017),
  r = n(79874),
  o = n(854698),
  c = n(390966),
  u = n(689938),
  d = n(638849);

function h(e) {
  let {
    guildEvent: t,
    recurrenceId: n
  } = e, h = (0, r.ZP)(t, n), m = (0, a.Z)(n, t.id);
  if (null == t) return null;
  let p = (null == t ? void 0 : t.scheduled_start_time) != null ? (0, o.lh)(m, h.startTime, new Date(null == t ? void 0 : t.scheduled_start_time)) : null;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.ZP.Divider, {
      className: d.divider
    }), (0, l.jsx)(c.z, {
      startTime: h.startTime.toISOString(),
      status: null != p ? p : t.status,
      liveText: u.Z.Messages.LIVE_EVENT,
      className: d.eventSchedule,
      textVariant: "text-lg/semibold",
      eventType: t.entity_type,
      guildEventId: null == t ? void 0 : t.id,
      recurrenceId: n
    }), (0, l.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      className: d.eventName,
      children: t.name
    })]
  })
}