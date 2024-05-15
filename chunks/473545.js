"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("735250");
n("470079");
var u = n("442837"),
  a = n("481060"),
  d = n("41776"),
  s = n("314897"),
  i = n("924301"),
  r = n("482241"),
  o = n("894017"),
  E = n("765305"),
  c = n("689938");

function f(e) {
  let {
    guildEventId: t,
    guildId: n,
    recurrenceId: f
  } = e, _ = (0, u.useStateFromStores)([d.default], () => d.default.isLurking(n), [n]), T = (0, u.useStateFromStores)([s.default], () => s.default.getId()), {
    rsvped: S,
    baseRsvp: N,
    recurrenceRsvp: g
  } = (0, u.useStateFromStoresObject)([i.default], () => ({
    rsvped: i.default.isInterestedInEventRecurrence(t, f),
    baseRsvp: i.default.getRsvp(t, null, T),
    recurrenceRsvp: i.default.getRsvp(t, f, T)
  }), [f, t, T]), I = (0, o.default)(f, t);
  if (_ || (null == I ? void 0 : I.is_canceled)) return null;
  let v = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      l = (null == N ? void 0 : N.response) === E.GuildScheduledEventUserResponses.INTERESTED ? E.GuildScheduledEventUserResponses.UNINTERESTED : E.GuildScheduledEventUserResponses.INTERESTED,
      u = e ? null : f;
    r.default.updateRsvp(t, u, n, l)
  };
  return (0, l.jsxs)(a.MenuItem, {
    id: S ? c.default.Messages.EVENT_MARK_NOT_INTERESTED : c.default.Messages.EVENT_MARK_INTERESTED,
    label: S ? c.default.Messages.EVENT_MARK_NOT_INTERESTED : c.default.Messages.EVENT_MARK_INTERESTED,
    action: void 0,
    children: [(0, l.jsx)(a.MenuItem, {
      id: c.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
      label: c.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
      action: () => v(!1)
    }), (0, l.jsx)(a.MenuItem, {
      id: c.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
      label: c.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
      action: () => v(!0),
      disabled: null != g
    })]
  })
}