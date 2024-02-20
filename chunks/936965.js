"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  i = n("77078"),
  u = n("322224"),
  r = n("832588"),
  s = n("745049"),
  d = n("782340"),
  o = n("505326");

function c(e) {
  let {
    event: t,
    recurrenceId: n,
    guildId: c,
    onRsvp: f,
    ...E
  } = e, [v, g] = a.useState(r.ResponseOptions.SERIES), h = (0, r.getExistingRsvp)(t.id, null), p = (null == h ? void 0 : h.response) === s.GuildScheduledEventUserResponses.INTERESTED, m = p ? s.GuildScheduledEventUserResponses.UNINTERESTED : s.GuildScheduledEventUserResponses.INTERESTED, C = m === s.GuildScheduledEventUserResponses.INTERESTED ? d.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : d.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
  return (0, l.jsx)(i.ConfirmModal, {
    ...E,
    header: C,
    confirmText: d.default.Messages.OK,
    cancelText: d.default.Messages.CANCEL,
    onConfirm: () => {
      v === r.ResponseOptions.SERIES ? u.default.updateRsvp(t.id, null, c, m) : u.default.updateRsvp(t.id, n, c, m), null == f || f(), E.onClose()
    },
    confirmButtonColor: i.Button.Colors.BRAND,
    children: (0, l.jsx)(i.RadioGroup, {
      className: o.responseOptions,
      value: v,
      options: (0, r.getResponseOptions)(),
      onChange: e => g(e.value)
    })
  })
}

function f(e, t, n, a) {
  (0, r.handleRsvp)({
    eventId: e,
    recurrenceId: t,
    guildId: n,
    updateRsvp: (t, l, a, i) => u.default.updateRsvp(e, l, n, i),
    openRsvpPicker: (e, t) => {
      (0, i.openModalLazy)(() => Promise.resolve(i => (0, l.jsx)(c, {
        ...i,
        event: e,
        recurrenceId: t,
        guildId: n,
        onRsvp: a
      })))
    },
    onRsvp: a
  })
}