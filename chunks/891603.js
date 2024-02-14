"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var n = l("37983");
l("884691");
var a = l("446674"),
  u = l("77078"),
  s = l("267567"),
  d = l("271938"),
  r = l("398604"),
  i = l("322224"),
  o = l("397680"),
  c = l("745049"),
  f = l("782340");

function E(e) {
  let {
    guildEventId: t,
    guildId: l,
    recurrenceId: E
  } = e, _ = (0, a.useStateFromStores)([s.default], () => s.default.isLurking(l), [l]), T = (0, a.useStateFromStores)([d.default], () => d.default.getId()), {
    rsvped: M,
    baseRsvp: v,
    recurrenceRsvp: g
  } = (0, a.useStateFromStoresObject)([r.default], () => ({
    rsvped: r.default.isInterestedInEventRecurrence(t, E),
    baseRsvp: r.default.getRsvp(t, null, T),
    recurrenceRsvp: r.default.getRsvp(t, E, T)
  }), [E, t, T]), m = (0, o.default)(E, t);
  if (_ || (null == m ? void 0 : m.is_canceled)) return null;
  let I = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      n = (null == v ? void 0 : v.response) === c.GuildScheduledEventUserResponses.INTERESTED,
      a = n ? c.GuildScheduledEventUserResponses.UNINTERESTED : c.GuildScheduledEventUserResponses.INTERESTED,
      u = e ? null : E;
    i.default.updateRsvp(t, u, l, a)
  };
  return (0, n.jsxs)(u.MenuItem, {
    id: M ? f.default.Messages.EVENT_MARK_NOT_INTERESTED : f.default.Messages.EVENT_MARK_INTERESTED,
    label: M ? f.default.Messages.EVENT_MARK_NOT_INTERESTED : f.default.Messages.EVENT_MARK_INTERESTED,
    action: void 0,
    children: [(0, n.jsx)(u.MenuItem, {
      id: f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
      label: f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
      action: () => I(!1)
    }), (0, n.jsx)(u.MenuItem, {
      id: f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
      label: f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
      action: () => I(!0),
      disabled: null != g
    })]
  })
}