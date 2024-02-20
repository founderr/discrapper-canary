"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
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
  E = l("782340");

function f(e) {
  let {
    guildEventId: t,
    guildId: l,
    recurrenceId: f
  } = e, _ = (0, a.useStateFromStores)([s.default], () => s.default.isLurking(l), [l]), T = (0, a.useStateFromStores)([d.default], () => d.default.getId()), {
    rsvped: M,
    baseRsvp: v,
    recurrenceRsvp: I
  } = (0, a.useStateFromStoresObject)([r.default], () => ({
    rsvped: r.default.isInterestedInEventRecurrence(t, f),
    baseRsvp: r.default.getRsvp(t, null, T),
    recurrenceRsvp: r.default.getRsvp(t, f, T)
  }), [f, t, T]), g = (0, o.default)(f, t);
  if (_ || (null == g ? void 0 : g.is_canceled)) return null;
  let m = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      n = (null == v ? void 0 : v.response) === c.GuildScheduledEventUserResponses.INTERESTED,
      a = n ? c.GuildScheduledEventUserResponses.UNINTERESTED : c.GuildScheduledEventUserResponses.INTERESTED,
      u = e ? null : f;
    i.default.updateRsvp(t, u, l, a)
  };
  return (0, n.jsxs)(u.MenuItem, {
    id: M ? E.default.Messages.EVENT_MARK_NOT_INTERESTED : E.default.Messages.EVENT_MARK_INTERESTED,
    label: M ? E.default.Messages.EVENT_MARK_NOT_INTERESTED : E.default.Messages.EVENT_MARK_INTERESTED,
    action: void 0,
    children: [(0, n.jsx)(u.MenuItem, {
      id: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
      label: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
      action: () => m(!1)
    }), (0, n.jsx)(u.MenuItem, {
      id: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
      label: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
      action: () => m(!0),
      disabled: null != I
    })]
  })
}