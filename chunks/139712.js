l.d(n, {
  Z: function() {
    return m
  }
}), l(47120);
var s = l(735250),
  t = l(470079),
  i = l(481060),
  a = l(482241),
  o = l(124165),
  r = l(765305),
  u = l(689938),
  c = l(344748);

function d(e) {
  let {
    event: n,
    recurrenceId: l,
    guildId: d,
    onRsvp: m,
    ...N
  } = e, [v, p] = t.useState(o.KX.SERIES), C = (0, o.X2)(n.id, null), E = (null == C ? void 0 : C.response) === r.gv.INTERESTED ? r.gv.UNINTERESTED : r.gv.INTERESTED, h = E === r.gv.INTERESTED ? u.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : u.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
  return (0, s.jsx)(i.ConfirmModal, {
    ...N,
    header: h,
    confirmText: u.Z.Messages.OK,
    cancelText: u.Z.Messages.CANCEL,
    onConfirm: () => {
      v === o.KX.SERIES ? a.Z.updateRsvp(n.id, null, d, E) : a.Z.updateRsvp(n.id, l, d, E), null == m || m(), N.onClose()
    },
    confirmButtonColor: i.Button.Colors.BRAND,
    children: (0, s.jsx)(i.RadioGroup, {
      className: c.responseOptions,
      value: v,
      options: (0, o.pF)(),
      onChange: e => p(e.value)
    })
  })
}

function m(e, n, l, t) {
  (0, o.cg)({
    eventId: e,
    recurrenceId: n,
    guildId: l,
    updateRsvp: (n, s, t, i) => a.Z.updateRsvp(e, s, l, i),
    openRsvpPicker: (e, n) => {
      (0, i.openModalLazy)(() => Promise.resolve(i => (0, s.jsx)(d, {
        ...i,
        event: e,
        recurrenceId: n,
        guildId: l,
        onRsvp: t
      })))
    },
    onRsvp: t
  })
}