a.r(s), a.d(s, {
  default: function() {
    return m
  }
}), a(47120);
var t = a(735250),
  r = a(470079),
  n = a(481060),
  c = a(749210),
  i = a(910693),
  o = a(51144),
  u = a(981631),
  d = a(689938),
  l = a(373324);

function m(e) {
  let {
    guildId: s,
    user: a,
    location: m,
    ...C
  } = e, [g, h] = r.useState(""), x = (0, i.sE)(s, {
    location: m,
    targetUserId: a.id
  }), K = r.useCallback(() => {
    c.Z.kickUser(s, a.id, g), x(i.jQ.KICK)
  }, [s, a.id, g, x]), _ = r.useCallback(e => {
    h(e)
  }, []);
  return (0, t.jsxs)(n.ConfirmModal, {
    header: d.Z.Messages.KICK_USER_FROM_SERVER.format({
      user: a.username
    }),
    confirmText: d.Z.Messages.KICK,
    cancelText: d.Z.Messages.CANCEL,
    onConfirm: K,
    ...C,
    children: [(0, t.jsx)(n.Text, {
      variant: "text-md/normal",
      className: l.spacing,
      children: d.Z.Messages.KICK_USER_BODY.format({
        user: "@".concat(o.ZP.getName(a))
      })
    }), (0, t.jsx)(n.FormItem, {
      title: d.Z.Messages.FORM_LABEL_REASON_KICK,
      className: l.spacing,
      children: (0, t.jsx)(n.TextArea, {
        maxLength: u.GNZ,
        onChange: _,
        value: g,
        rows: 2
      })
    })]
  })
}