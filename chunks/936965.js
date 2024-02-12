"use strict";
t.r(n), t.d(n, {
  default: function() {
    return v
  }
}), t("222007");
var l = t("37983"),
  s = t("884691"),
  i = t("77078"),
  a = t("322224"),
  u = t("832588"),
  r = t("745049"),
  d = t("782340"),
  o = t("616762");

function c(e) {
  let {
    event: n,
    recurrenceId: t,
    guildId: c,
    onRsvp: v,
    ...m
  } = e, [E, h] = s.useState(u.ResponseOptions.SERIES), p = (0, u.getExistingRsvp)(n.id, null), f = (null == p ? void 0 : p.response) === r.GuildScheduledEventUserResponses.INTERESTED, N = f ? r.GuildScheduledEventUserResponses.UNINTERESTED : r.GuildScheduledEventUserResponses.INTERESTED, g = N === r.GuildScheduledEventUserResponses.INTERESTED ? d.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : d.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
  return (0, l.jsx)(i.ConfirmModal, {
    ...m,
    header: g,
    confirmText: d.default.Messages.OK,
    cancelText: d.default.Messages.CANCEL,
    onConfirm: () => {
      E === u.ResponseOptions.SERIES ? a.default.updateRsvp(n.id, null, c, N) : a.default.updateRsvp(n.id, t, c, N), null == v || v(), m.onClose()
    },
    confirmButtonColor: i.Button.Colors.BRAND,
    children: (0, l.jsx)(i.RadioGroup, {
      className: o.responseOptions,
      value: E,
      options: (0, u.getResponseOptions)(),
      onChange: e => h(e.value)
    })
  })
}

function v(e, n, t, s) {
  (0, u.handleRsvp)({
    eventId: e,
    recurrenceId: n,
    guildId: t,
    updateRsvp: (n, l, s, i) => a.default.updateRsvp(e, l, t, i),
    openRsvpPicker: (e, n) => {
      (0, i.openModalLazy)(() => Promise.resolve(i => (0, l.jsx)(c, {
        ...i,
        event: e,
        recurrenceId: n,
        guildId: t,
        onRsvp: s
      })))
    },
    onRsvp: s
  })
}