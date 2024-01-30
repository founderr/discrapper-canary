"use strict";
n.r(t), n.d(t, {
  getExistingRsvp: function() {
    return E
  },
  ResponseOptions: function() {
    return l
  },
  getResponseOptions: function() {
    return o
  },
  handleRsvp: function() {
    return s
  }
});
var u, l, r = n("271938"),
  d = n("398604"),
  i = n("822516"),
  a = n("745049"),
  c = n("782340");

function E(e, t) {
  let n = r.default.getId();
  return d.default.getRsvp(e, t, n)
}

function o() {
  return [{
    name: c.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
    value: 0
  }, {
    name: c.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
    value: 1
  }]
}

function s(e) {
  let {
    eventId: t,
    recurrenceId: n,
    guildId: u,
    updateRsvp: l,
    openRsvpPicker: r,
    onRsvp: c,
    canRsvpToRecurrences: o = !0
  } = e, s = d.default.getGuildScheduledEvent(t);
  if (null == s) return;
  let _ = o ? null != n ? n : (0, i.getNextRecurrenceIdInEvent)(s) : null,
    y = E(s.id, _);
  null == _ ? (l(t, null, u, a.GuildScheduledEventUserResponses.INTERESTED), null == c || c()) : null != y ? (l(t, _, u, a.GuildScheduledEventUserResponses.UNINTERESTED), null == c || c()) : r(s, _)
}(u = l || (l = {}))[u.SERIES = 0] = "SERIES", u[u.RECURRENCE = 1] = "RECURRENCE"