n.d(t, {
  Z: function() {
    return u
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(481060),
  o = n(689938),
  c = n(554050);

function u(e) {
  let {
    className: t,
    onJump: n
  } = e, [l, u] = i.useState(!1);
  return (0, s.jsx)(r.Clickable, {
    className: a()(c.jumpButton, t),
    onClick: e => {
      u(!0), n(e)
    },
    children: l ? (0, s.jsx)(r.Spinner, {
      type: r.Spinner.Type.PULSING_ELLIPSIS
    }) : (0, s.jsx)(r.Text, {
      variant: "text-xs/normal",
      className: c.text,
      children: o.Z.Messages.JUMP
    })
  })
}