"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("664336"),
  i = n("466148"),
  r = n("393745"),
  o = n("782340"),
  u = n("992831");

function d(e) {
  let {
    guildEvent: t,
    recurrenceId: n
  } = e, d = (0, i.default)(t.id, n);
  return null == t ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.default.Divider, {
      className: u.divider
    }), (0, l.jsx)(r.GuildEventTimeStatus, {
      startTime: d.startTime.toISOString(),
      status: t.status,
      liveText: o.default.Messages.LIVE_EVENT,
      className: u.eventSchedule,
      textVariant: "text-lg/semibold",
      eventType: t.entity_type,
      guildEventId: null == t ? void 0 : t.id,
      recurrenceId: n
    }), (0, l.jsx)(a.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      className: u.eventName,
      children: t.name
    })]
  })
}