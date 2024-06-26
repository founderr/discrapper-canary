"use strict";
n.d(t, {
  KX: function() {
    return r
  },
  X2: function() {
    return d
  },
  cg: function() {
    return I
  },
  pF: function() {
    return E
  }
});
var i, r, s = n(314897),
  o = n(924301),
  a = n(894017),
  l = n(79874),
  u = n(854698),
  _ = n(765305),
  c = n(689938);

function d(e, t) {
  let n = s.default.getId();
  return o.ZP.getRsvp(e, t, n)
}

function E() {
  return [{
    name: c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
    value: 0
  }, {
    name: c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
    value: 1
  }]
}

function I(e) {
  let {
    eventId: t,
    recurrenceId: n,
    guildId: i,
    updateRsvp: r,
    openRsvpPicker: s,
    onRsvp: c
  } = e, E = o.ZP.getGuildScheduledEvent(t);
  if (null == E) return;
  let I = (0, a.c)(n, t),
    {
      startTime: T
    } = (0, l.Kq)(E, n),
    h = (null == E ? void 0 : E.scheduled_start_time) != null ? (0, u.lh)(I, T, new Date(null == E ? void 0 : E.scheduled_start_time)) : null,
    f = null != h && _.$I.has(h) ? null : null != n ? n : (0, u.DK)(E),
    S = d(E.id),
    N = d(E.id, f);
  null == f ? (r(t, null, i, null != S ? _.gv.UNINTERESTED : _.gv.INTERESTED), null == c || c()) : null != N ? (r(t, f, i, null != S ? _.gv.INTERESTED : _.gv.UNINTERESTED), null == c || c()) : s(E, f)
}(i = r || (r = {}))[i.SERIES = 0] = "SERIES", i[i.RECURRENCE = 1] = "RECURRENCE"