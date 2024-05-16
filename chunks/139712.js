"use strict";
n.r(l), n.d(l, {
  default: function() {
    return v
  }
}), n("47120");
var t = n("735250"),
  s = n("470079"),
  a = n("481060"),
  i = n("482241"),
  u = n("124165"),
  o = n("765305"),
  r = n("689938"),
  d = n("926828");

function c(e) {
  let {
    event: l,
    recurrenceId: n,
    guildId: c,
    onRsvp: v,
    ...m
  } = e, [h, p] = s.useState(u.ResponseOptions.SERIES), N = (0, u.getExistingRsvp)(l.id, null), E = (null == N ? void 0 : N.response) === o.GuildScheduledEventUserResponses.INTERESTED ? o.GuildScheduledEventUserResponses.UNINTERESTED : o.GuildScheduledEventUserResponses.INTERESTED, g = E === o.GuildScheduledEventUserResponses.INTERESTED ? r.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : r.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
  return (0, t.jsx)(a.ConfirmModal, {
    ...m,
    header: g,
    confirmText: r.default.Messages.OK,
    cancelText: r.default.Messages.CANCEL,
    onConfirm: () => {
      h === u.ResponseOptions.SERIES ? i.default.updateRsvp(l.id, null, c, E) : i.default.updateRsvp(l.id, n, c, E), null == v || v(), m.onClose()
    },
    confirmButtonColor: a.Button.Colors.BRAND,
    children: (0, t.jsx)(a.RadioGroup, {
      className: d.responseOptions,
      value: h,
      options: (0, u.getResponseOptions)(),
      onChange: e => p(e.value)
    })
  })
}

function v(e, l, n, s) {
  (0, u.handleRsvp)({
    eventId: e,
    recurrenceId: l,
    guildId: n,
    updateRsvp: (l, t, s, a) => i.default.updateRsvp(e, t, n, a),
    openRsvpPicker: (e, l) => {
      (0, a.openModalLazy)(() => Promise.resolve(a => (0, t.jsx)(c, {
        ...a,
        event: e,
        recurrenceId: l,
        guildId: n,
        onRsvp: s
      })))
    },
    onRsvp: s
  })
}